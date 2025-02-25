import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'tasaciones-templates-bucket',
  access: (allow) => ({
    'templates/appartments/*': [
        allow.guest.to(['read']),
        allow.entity('identity').to(['read'])
    ]
  })
});