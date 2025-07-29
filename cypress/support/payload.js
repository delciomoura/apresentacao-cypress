import { randomName, randomEmail } from "./utils";
const faker = require("faker");

export const contactsArray = [
  {
    name: `${faker.name.firstName("male")} ${faker.name.lastName()}`,
    number: `${faker.phone.phoneNumber("(84) 9####-####")}`,
    description: `${faker.lorem.words(5)}`,
  },
  {
    name: `${faker.name.firstName("female")} ${faker.name.lastName()}`,
    number: `${faker.phone.phoneNumber("(84) 9####-####")}`,
    description: `${faker.lorem.words(2)}`,
  },
  {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    number: `${faker.phone.phoneNumber("(84) 9####-####")}`,
    description: `${faker.lorem.words(4)}`,
  },
  {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    number: `${faker.phone.phoneNumber("(84) 9####-####")}`,
    description: `${faker.lorem.words(3)}`,
  },
  {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    number: `${faker.phone.phoneNumber("(84) 9####-####")}`,
    description: `${faker.lorem.words(1)}`,
  },
];

export const contact = {
  name: randomName,
  number: `${faker.phone.phoneNumber("(84) 9####-####")}`,
  description: "Teste cypress delete",
};

export const unNamedContact = {
  number: `${faker.phone.phoneNumber("(84) 9####-####")}`,
  description: "Teste cypress delete",
};

export const contactWithoutPhone = {
  name: randomName,
  description: "Teste cypress delete",
};

export const contactWithoutDescription = {
  name: randomName,
  number: `${faker.phone.phoneNumber("(84) 9####-####")}`,
};

export const bodyContactMock = {
  _id: faker.random.uuid().replace(/-/g, ""),
  name: contact.name,
  number: contact.number,
  description: contact.description,
  userId: faker.random.uuid().replace(/-/g, ""),
  __v: 0,
};

export const user = {
  email: randomEmail,
  password: Cypress.env('password'),
};
