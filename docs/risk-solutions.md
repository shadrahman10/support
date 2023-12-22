# Risk Solutions
> Risk Solutions represent capabilities that can be mapped to various requirements.

![paramify](/assets/hero-risk-solutions.png)

## Overview
Risk Solutions are a crucial part of your security strategy. They represent capabilities that your organization either currently possesses, plans to implement, or does not yet have. Importantly, these Risk Solutions are framework-agnostic, meaning they can be applied to satisfy controls from any framework. 

Paramify maintains a library of battle-tested Risk Solutions, audited and certified many times over. Depending on your license, you are welcome to use any Risk Solutions as-is, customize it to your needs, or write your own.

## Creating a Risk Solution
To create a Risk Solution, navigate to the appropriate page and click on the "Add Solution" button. Assign a name to the solution and optionally categorize it for easier searching and filtering. After saving, you can add additional information.

* **Narrative**: A brief statement explaining the capability. It should mention elements from your library. It can also use dynamic template tags to automatically populate information unique to a project. Each narrative is associated with a specific responsible role, or the person tasked with making the narrative "true".
* **Implementation Status**: This field indicates whether the solution is currently in operation, planned for implementation, not implemented, or not applicable for some reason.
* **Main Component**: This field helps you associate components to a set of capabilities. If left blank, it is assumed that the capability is inherent to the overall system.

## Mapping Risk Solutions to Controls
Mapping Risk Solutions to control parts streamlines the management of requirement responses and reduces redundancy. To map a solution to a control, navigate to the solution detail page and click on the "Mappings" tab.

Risk Solutions can be mapped in three ways:
* **To a project requirement**: Risk Solutions can be mapped directly to specific requirements in a project.
* **To a source requirement**: Risk Solutions can be mapped generically to a source requirement, meaning it may or may not be applicable to a specific project.
* **To a component or collection**: Risk Solutions can be mapped to a component or collection of components, meaning that the solution is only applicable when that component is in scope.

<div style="position:relative;padding-top:56.25%;">
<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/vu-kwZK65nM?si=PTgY39w8fN7Xf3KL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Tailoring Responses to Controls
If a Risk Solution almost meets your needs but not quite, Paramify provides the following methods to customize you response: 
* **Update Risk Solution**: When the customization is appropriate for all controls that the Risk Solution is mapped, the Risk Solution can be updated directly in the Risk Solution Library.  Navigate to the Risk Solution library and open the Risk Solution that needs to be updated.  Direct changes will apply whereever the Risk Solution is mapped.
* **Duplicate Risk Solution**: If the existing Risk Solution is applicable for some control responses but another Risk Solution with similar details for application to other controls is needed, the existing Risk Solution can be duplicated to copy existing details.
  1. Navigate to the Risk Solution library and open the Risk Solution that needs to be duplicated.
  2. In the Risk Solution header menu on the right, click "Duplicate Risk Solution".
  3. After it is copied, the details can be modified in the copied Risk Solution to update the Risk Solution for other controls.    
* **Create New Risk Solution**: See "Creating Risk Solution" above.
* **Create Custom Response**: Unlike Risk Solutions, Custom responses are control/requirement specific. Perform the following steps to create a Custom Response from scratch within the Control Implementation Details page:
  1. Click on the "Custom Response" button.
  2. In the menu on the right in the Custom Response header, click "Edit Settings".
  3. Update Name, Responsible Roles, Implementation Status, and Origination as needed.
* **Convert Risk Solution to Custom Response**: When the Risk Solution is close but needs minor adjustments specific to a particular control/requirement, a Risk Solution applied to the control can be detached and copied as a custom response for customization specific to the control that cannot be applied to other controls or projects. Perform the following steps from the Control Implementation Details page: 
  1. In the menu on the right in the Custom Response header, click "Detach from Library", which copies its details, including text, roles, and implementation status. 
  2. Now, tailor the details to fit the specific nuances of your requirement.
  3. (Optional) In the menu on the right in the Custom Response header, click "Edit Settings".
  4. (Optional) Update Name, Responsible Roles, Implementation Status, and Origination as needed.
* **Convert Custom Response to Risk Solution**:
  1. In the menu on the right in the Custom Response header, click "Save as Risk Solution".
  2. Update the Family, Subfamily, Responsible Roles, and Origination, as needed, and click "Yes" to save.
  3. A unique Risk Solution is created in the library linked exclusively to your project requirement.  Your tailored Risk Solution is reusable to map to other relevant controls across projects.

<div style="position:relative;padding-top:56.25%;">
<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;"  src="https://www.youtube.com/embed/geDlTsawTQ0?si=cl1ZVPC96etRHIGT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
