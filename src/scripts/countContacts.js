import {readContacts} from "../utils/readContacts.js";

export const countContacts = async () => {
    const contactsQuantity = await readContacts();
    return contactsQuantity ? contactsQuantity.length : 0;
};

console.log(await countContacts());
