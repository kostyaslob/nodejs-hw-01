import {readContacts} from "./utils/readContacts.js";

async function main() {
    const contacts = await readContacts();

    console.log(contacts);
}

main().catch((error) => console.error(error));