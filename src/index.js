import { readContacts } from "./utils/readContacts.js";
import { writeContacts } from "./utils/writeContacts.js";

async function main() {
    const contacts = await readContacts();
    
    contacts.push({ id: 3, name: "Kostya" });

    await writeContacts(contacts);

}

main();

