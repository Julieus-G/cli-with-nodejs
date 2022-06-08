#!/usr/bin/env node
const program = require("commander");
const { prompt } = require("inquirer");
const {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers,
} = require("./index");

//customer questions
const questions = [
  {
    type: "input",
    name: "firstname",
    message: "Customer first Name",
  },
  {
    type: "input",
    name: "secondname",
    message: "Customer second Name",
  },
  {
    type: "input",
    name: "phonenumber",
    message: "Customer phone number",
  },
  {
    type: "input",
    name: "email",
    message: "Customer email address",
  },
];

program.version("1.0.0").description("Client Management System");
program
  .help(`
Function                  Alias        Description
version                   v            To check the version of the customer-cli
client-cli add            a            To add new customes in the database
client-cli list           l            To check all the customes in the database
client-cli update [_ID]   u            To update details for specific customes in the database
client-cli remove [_ID]   r            To remove details for specific customes in the database
client-cli find [NAME]    f            To find a specific customes in the database
`)

// program
//   .command("add <firstname> <secondname> <phonenumber> <email>")
//   .alias("a")
//   .description("Add a customer")
//   .action((firstname, secondname, phonenumber, email) => {
//     addCustomer({ firstname, secondname, phonenumber, email });
//   });

//Add command
program
  .command("add")
  .alias("a")
  .description("Add a customer")
  .action(() => {
    prompt(questions).then((answers) => {
      addCustomer(answers);
    });
  });

// Find command
program
  .command("find <name>")
  .alias("f")
  .description("Find a customer")
  .action((name) => {
    findCustomer({ name });
  });

// Update Command
program
  .command("update <_id>")
  .alias("u")
  .description("Update a customer")
  .action((_id) => {
    prompt(questions).then((answers) => updateCustomer(_id, answers));
  });

// Remove Command
program
  .command("remove <_id>")
  .alias("r")
  .description("Remove a customer")
  .action((_id) => removeCustomer(_id));

// List Command
program
  .command("list")
  .alias("l")
  .description("List all customers")
  .action(() => listCustomers());

program.parse(process.argv);
