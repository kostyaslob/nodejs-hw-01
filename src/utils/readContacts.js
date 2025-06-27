import { PATH_DB } from "../constants/contacts.js";
import * as fs from "node:fs/promises";

export const readContacts = async () => {
    try {
        return JSON.parse(await fs.readFile(PATH_DB, { encoding: "utf-8" }));
    }
    catch (error) {
        console.log(error);
    }
};
