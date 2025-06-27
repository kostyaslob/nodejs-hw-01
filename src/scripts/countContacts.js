import {readContacts} from "../utils/readContacts.js";

export const countContacts = async () => {
    const contacts = await readContacts();
    return contacts ? contacts.length : 0;
};

console.log(await countContacts());
