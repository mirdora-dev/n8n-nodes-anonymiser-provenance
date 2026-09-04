import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class AnonymiserProvenance implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Anonymiser Provenance',
        name: 'anonymiserProvenance',
        icon: 'file:anonymiserprovenance.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={$parameter["operation"]}',
        description: 'Perform anonymiser provenance operations in n8n',
        defaults: {
            name: 'Anonymiser Provenance',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'anonymiserProvenanceApi',
                required: true,
            },
        ],
        properties: [
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Execute',
                        value: 'execute',
                        description: 'Execute the anonymisation action',
                        action: 'Execute action',
                    },
                ],
                default: 'execute',
            },
        ],
    };
}
