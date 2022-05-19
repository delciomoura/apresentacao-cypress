import notices from "../fixtures/parameters.json";
const { expectNoticeName, expectNoticePhone, expectNoticeDescription } = notices.message || {};

const contacts = [
    {
        "name": "Delcio Moura",
        "number": "84-99999-9999",
        "description": expectNoticeName
    },
    {
        "name": "Silvio Domingos",
        "number": "11-98554-9999",
        "description": expectNoticeDescription
    },
    {
        "name": "Shel Wilkerson",
        "number": "73-9675-9999",
        "description": "Humilde QA"
    },
    {
        "name": "Ana Paula",
        "number": "81-95447-9999",
        "description": expectNoticePhone
    },
    {
        "name": "Filipe Isaac",
        "number": "13-91234-9999",
        "description": "Coordenador do PagSeguro"
    }
]

export { contacts }