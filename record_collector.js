var RecordCollector = function(name, collection, wallet){
  this.name = name;
  this.collection = [];
  wallet = 50;
};

RecordCollector.prototype = {
  buyRecord: function(record){
    this.collection.push(record)
    this.wallet -= record.price
  },

}


module.exports = RecordCollector;