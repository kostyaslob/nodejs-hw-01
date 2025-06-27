import {createFakeContact} from "../utils/createFakeContact.js";
import {readContacts} from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";


export const addOneContact = async () => {
    const newContact = await readContacts();
    newContact.push(createFakeContact());
    await writeContacts(newContact);
};

addOneContact();
