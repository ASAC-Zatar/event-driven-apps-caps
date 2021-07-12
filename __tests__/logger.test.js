'use strict';
const events = require('../events');
require('../logger');
describe('logger tests',()=>{
    let consoleSpy;
    beforeEach(()=>{
        consoleSpy=jest.spyOn(console,'log').mockImplementation();
        jest.useFakeTimers();
    })
    afterEach(()=>{
        consoleSpy.mockRestore(); 
        jest.clearAllTimers()
    })
    test('pickup logger test',()=>{
        events.emit('pickup',{});
        jest.runAllTimers()
        expect(consoleSpy).toHaveBeenCalled();
    })
    test('delivered logger test',()=>{
        events.emit('delivered',{});
        jest.runAllTimers()
        expect(consoleSpy).toHaveBeenCalled();
    })
    test('in-transit logger test',()=>{
        events.emit('in-transit',{});
        jest.runAllTimers()
        expect(consoleSpy).toHaveBeenCalled();
    })
})