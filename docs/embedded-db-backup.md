# Embedded Postgres Backup
>  You can enable a simple, automated daily backup of an embedded Postgres database.

For deployments using an embedded (containerized) Postgres database it's recommended to have a backup/restore strategy. An automated daily backup can be enabled in the GUI config under the "Database" section with the "Embedded Postgres Backup" option. Alternatively, when using a Helm-based install it will be enabled by default, and can be disabled by adding the following to your local `values.yaml` file:
```yaml
paramify:
  pgbackup:
    enabled: false
```

When enabled, a daily cron job will be deployed to generate backups, upload them to your object store, and prune old versions over time. It can also be executed manually via `kubectl exec` to list available backups and restore a selected backup.


## Backup
Once setup as a daily cron job it will execute with the default `backup` command, which does the following:
* Executes standard `pg_dump`, generating a dated backup file like `postgres_2024-01-01_12-30.dump`
* Uploads the backup file to the configured object store in a `backup` folder
* Prunes old backups, retaining a specified number of daily, weekly, and monthly backups

To manually execute a backup use the following:
```bash
# Startup the convenience container to run manual backup/restore commands
kubectl -n paramify scale sts pgbackup --replicas=1

# A backup can ge generated manually by executing the "backup" command
kubectl -n paramify exec -it pgbackup-0 backup

# The convenience container can be shutdown when it's not needed
kubectl -n paramify scale sts pgbackup --replicas=0
```


## Restore
When the container is started with `restore` (no backup specified) it will output the list of available backup files from the object store.

For example (replacing `-n paramify` with the appropriate namespace, if different):
```bash
# Use "restore" to list available backups
kubectl -n paramify exec -it pgbackup-0 restore
```

Once the desired backup is identified, the job can be executed with `restore <backup>` to do the following:
* Download the specified backup file
* Execute `pg_restore` of the backup file to restore the database to that version

```bash
# First, shutdown the Paramify application by scaling app to 0 pods
kubectl -n paramify scale --replicas=0 deploy paramify

# Then use "restore <backup>" to restore a selected backup
kubectl -n paramify exec -it pgbackup-0 restore postgres_2024-01-01_12-30.dump

# Finally, restart the Paramify application by scaling app back to 1 pod
kubectl -n paramify scale --replicas=1 deploy paramify
```

_NOTE: It's recommended to shutdown the application before performing the restore, but required to restart the application after the restore is complete._
