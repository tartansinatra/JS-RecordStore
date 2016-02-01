var RecordStore = function(name, city, inventory, balance){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 100;
}


RecordStore.prototype = {
  addRecord: function(record){
    this.inventory.push(record);
  },
  sellRecord: function(record){
    this.inventory.pop(record);
    this.balance += record.price;
  },
  listInventory: function(){
    for (record of this.inventory)
      console.log(record.artist + ', ' +record.title);
  },

  finStrength: function(){
    totalbalance = this.balance += record1.price += record2.price += record3.price
    return totalbalance
  }
}

module.exports = RecordStore;

