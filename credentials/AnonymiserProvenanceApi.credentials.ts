import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class AnonymiserProvenanceApi implements ICredentialType {
    name = 'anonymiserProvenanceApi';
    displayName = 'Anonymiser Provenance API';
    documentationUrl = 'https://github.com/mirdora-dev/anonymiser-core-standalone';
    properties: INodeProperties[] = [
        {
            displayName: 'Environment Path',
            name: 'envPath',
            type: 'string',
            default: '',
            description: 'Optional path to custom environment configurations',
        },
    ];
}
