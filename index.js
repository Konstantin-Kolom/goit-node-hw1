const argv = require('yargs').argv;
const contactsOperations = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const contacts = await contactsOperations.listContacts();
      console.table(contacts);
      console.log(`Contracts loaded`);
      break;

    case 'get':
      const getContactById = await contactsOperations.getContactById(id);
      console.table(getContactById);
      console.log(`Contract found`);

      break;

    case 'add':
      const addtContact = await contactsOperations.addContact(name, email, phone);
      console.table(addtContact);
      if (addtContact === null) {
        console.log(`Contract not added. All fields are not filled.`);
      } else {
        console.log(`Contract added`);
      }

      break;

    case 'remove':
      const removeContact = await contactsOperations.removeContact(id);
      console.table(removeContact);
      console.log(`Contract deleted`);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);

// node index.js --action list
// node index.js --action get --id 5
// node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
// node index.js --action remove --id=3

// node index.js --action add
