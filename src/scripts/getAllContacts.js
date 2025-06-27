import {readContacts} from "../utils/readContacts.js";

export const getAllContacts = async () => {
    const allContactsList = await readContacts();
    return allContactsList;
};

console.log(await getAllContacts());
