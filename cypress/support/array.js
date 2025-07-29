const faker = require('faker')

export const contactsArray = [
    {
        'name': `${faker.name.firstName("male")} ${faker.name.lastName()}`,
        'number': `${faker.phone.phoneNumber('(84) 9####-####')}`,
        'description': `${faker.lorem.words(5)}`,
    },
    {
        'name': `${faker.name.firstName("female")} ${faker.name.lastName()}`,
        'number': `${faker.phone.phoneNumber('(84) 9####-####')}`,
        'description': `${faker.lorem.words(2)}`
    },
    {
        'name': `${faker.name.firstName()} ${faker.name.lastName()}`,
        'number': `${faker.phone.phoneNumber('(84) 9####-####')}`,
        'description': `${faker.lorem.words(4)}`
    },
    {
        'name': `${faker.name.firstName()} ${faker.name.lastName()}`,
        'number': `${faker.phone.phoneNumber('(84) 9####-####')}`,
        'description': `${faker.lorem.words(3)}`
    },
    {
        'name': `${faker.name.firstName()} ${faker.name.lastName()}`,
        'number': `${faker.phone.phoneNumber('(84) 9####-####')}`,
        'description': `${faker.lorem.words(1)}`
    }
]
