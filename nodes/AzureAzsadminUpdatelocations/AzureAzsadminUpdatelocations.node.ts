import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAzsadminUpdatelocations implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Azsadmin Updatelocations',
                name: 'N8nDevAzureAzsadminUpdatelocations',
                icon: { light: 'file:./azure-azsadmin-updatelocations.png', dark: 'file:./azure-azsadmin-updatelocations.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Update location API endpoints and objects.',
                defaults: { name: 'Azure Azsadmin Updatelocations' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAzsadminUpdatelocationsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
