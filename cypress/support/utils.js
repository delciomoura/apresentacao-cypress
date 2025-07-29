const fakerBR = require('faker-br');

export const randomName = `${fakerBR.name.firstName()} ${fakerBR.name.lastName()}`;
export const randomEmail = fakerBR.internet.email();

