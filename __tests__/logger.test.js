'use strict';
const events = require('../events');
require('../logger');
describe('logger tests', () => {
    let consoleSpy;
    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        jest.useFakeTimers();

    })
    afterEach(() => {
        consoleSpy.mockRestore();
        // jest.clearAllTimers()
        // jest.clearAllMocks()
    })
    test.only('pickup logger test', (done) => {
        events.emit('pickup', {});
        jest.runAllTimers()
        expect(consoleSpy).toHaveBeenCalled()
        done()

    })
    test.only('delivered logger test', (done) => {
        events.emit('delivered', {});
        jest.runAllTimers()
        expect(consoleSpy).toHaveBeenCalled();
        done()
    })
    test.only('in-transit logger test', (done) => {
        events.emit('in-transit', {});
        jest.runAllTimers()
        expect(consoleSpy).toHaveBeenCalled();
        done()
    })
})