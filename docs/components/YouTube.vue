<script setup lang="ts">
    defineProps({
        src: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div style="position:relative;padding-top:56.25%;">
        <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" :src="src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
</template>