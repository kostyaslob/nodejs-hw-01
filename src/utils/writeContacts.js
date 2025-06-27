import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
        return await fs.writeFile(PATH_DB, updatedContacts, { encoding: "utf-8" });
    }
    catch (error) {
        console.log(error);
    }
};
