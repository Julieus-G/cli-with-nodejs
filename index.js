const mongoose = require("mongoose");

//Mapping global promise
mongoose.Promise = global.Promise;

// Connect to db
const db = mongoose.connect("mongodb://127.0.0.1:27017/customercli");

//Import Model
const Customer = require("./models/customers");

//Add customer
const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info("New Customer Added");
    db.close();
  });
};

//Find Customer
const findCustomer = (name) => {
  const search = new RegExp(name, "i");

  Customer.find({ $or: [{ firstName: search }, { secondName: search }] }).then(
    (customer) => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      db.close();
    }
  );
};



// Update Customer
const updateCustomer = (_id, customer) => {
  Customer.updateOne({ _id }, customer)
    .then(customer => {
      console.info('Customer Updated');
      db.close();
    });
}

// Remove Customer
const removeCustomer = (_id) => {
  Customer.remove({ _id })
    .then(customer => {
      console.info('Customer Removed');
      db.close();
    });
}

// List Customers
const listCustomers = () => {
  Customer.find()
    .then(customers => {
      console.info(customers);
      console.info(`${customers.length} customers`);
      db.close();
    });
}


//Export all methods
module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers
};
