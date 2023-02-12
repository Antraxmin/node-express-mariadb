const db = require("./db.model.js");

// constructor
const Store = function(store){
    this.name = store.name;
    this.phone = store.phone;
    this.time = store.time;
    this.location = store.location;
};

