import {createFakeContact} from "../utils/createFakeContact.js";
import {readContacts} from "../utils/readContacts.js";
import {writeContacts} from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    const newContactsList = await readContacts();
    for (let i = 0; i < number; i++) {
        newContactsList.push(createFakeContact());
    }
    await writeContacts(newContactsList);
};

generateContacts(5);
