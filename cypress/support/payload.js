import { randomName, randomEmail } from "./utils";

const contact = {
    name: randomName,
    number: "13999999999",
    description: "Teste cypress delete"
}

const unNamedContact = {
    number: "13999999999",
    description: "Teste cypress delete"
}

const contactWithoutPhone = {
    name: randomName,
    description: "Teste cypress delete"
}

const contactWithoutDescription = {
    name: randomName,
    number: "13999999999",
}

const user = { email: randomEmail, password: 'delcio123' }

export { contact, user, unNamedContact, contactWithoutPhone, contactWithoutDescription }
