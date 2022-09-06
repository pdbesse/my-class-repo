// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    customerName: "Jerome",
    customerEmail: "jerome@example.com",
    customerID: "yum1234",
    phoneNumber: "000-000-0000"
  },
   {
    customerName: "Asher",
    customerEmail: "asher@example.com",
    customerID: "noob1234",
    phoneNumber: "000-000-0000"
  },
   {
    customerName: "Farley",
    customerEmail: "meow@example.com",
    customerID: "meow1234",
    phoneNumber: "000-000-0000"
  },
  {
    customerName: "Mr. Snuggles",
    customerEmail: "snuggle@example.com",
    customerID: "snugs1234",
    phoneNumber: "000-000-0000"
  },
  {
    customerName: "Mr. Peanut Butter",
    customerEmail: "bo-jack@example.com",
    customerID: "bo1234",
    phoneNumber: "000-000-0000"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
