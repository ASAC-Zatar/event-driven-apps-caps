'use strict';
const uuid = require('uuid').v4;
const faker = require('faker');
const events = require('../events');
let store = process.env.STORE || 'CAPS';

require('../driver');
require('../vendor');
require('../logger');

describe('events handler tests', () => {

    beforeEach(()=>{
        jest.spyOn(global.console,'log');
        jest.useFakeTimers();
      })
      afterEach(()=>{
        jest.spyOn(global.console,'log').mockRestore(); 
        jest.clearAllTimers()
    })
    let order = {
        orderId: uuid(),
        storeName: store,
        customerName: faker.name.findName(),
        address:faker.address.streetAddress(),
    }
    test('pick up handler test',() => {
        events.emit('pickup',order)
        jest.runAllTimers();
        expect(console.log).toHaveBeenCalled();
    })
    test('delivered handler test',() => {
        events.emit('delivered',order)
        jest.runAllTimers()
        expect(console.log).toHaveBeenCalled();
    })
    test('in-transit handler test',() => {
        events.emit('in-transit',order)
        jest.runAllTimers();
        expect(console.log).toHaveBeenCalled();
    })
})

