var Record = require('./record');
var RecordStore = require('./record_store');
var RecordCollector = require('./record_collector')

var chai = require('chai');
var assert = chai.assert;

var expect = chai.expect;




describe('RecordStore', function(){
  
  beforeEach(function(){
      testStore = new RecordStore('Championship Vinyl', 'Chicago');
      record1 = new Record('Guns n Roses', 'Appetite for Destruction', 5);
      record2 = new Record('Metallica', 'St Anger', 6);
      record3 = new Record('Adele', '25', 10);
  });

  it('should be able to addRecords', function(){
    testStore.addRecord(record1)
    assert.equal(record1, testStore.inventory[0]);
  });

  it('should be able to list the inventory', function(){
    testStore.addRecord(record1)
    testStore.addRecord(record2)
    testStore.addRecord(record3)

    testStore.listInventory()
    // expect(testStore.inventory[1]).to.contain("Guns n Roses");
    // expect(deepTestStore).to.have.deep.property(record1.name, 'Guns n Roses');
  });

  it('should be able to sell rcords', function(){
    testStore.sellRecord(record1)
    assert.equal(105, testStore.balance);
  });

  it('should be able to confirm the cash balance and value of stock instore', function(){
    testStore.finStrength()
    assert.equal(121, testStore.balance);
  })

})

describe('RecordCollector', function(){

  beforeEach(function(){
      collector = new RecordCollector('Bob');
      record1 = new Record('The Beatles', 'Sgt Pepper', 5);
      record2 = new Record('Metallica', 'Exile on Main Street', 5);
  });

  it('should be able to buy records', function(){
    this.collection.push(record);
    assert.equal(45, collector.wallet)
  })

})