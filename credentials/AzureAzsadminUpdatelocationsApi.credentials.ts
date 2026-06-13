import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureAzsadminUpdatelocationsApi implements ICredentialType {
        name = 'N8nDevAzureAzsadminUpdatelocationsApi';

        displayName = 'Azure Azsadmin Updatelocations API';

        icon: Icon = { light: 'file:../nodes/AzureAzsadminUpdatelocations/azure-azsadmin-updatelocations.png', dark: 'file:../nodes/AzureAzsadminUpdatelocations/azure-azsadmin-updatelocations.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Azsadmin Updatelocations API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
