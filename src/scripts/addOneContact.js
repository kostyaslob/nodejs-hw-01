import {createFakeContact} from "../utils/createFakeContact.js";
import {readContacts} from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    const contact = await readContacts();
    contact.push(createFakeContact());
    await writeContacts(contact);
};

addOneContact();
