var expect = require('chai').expect;
var assert = require('chai').assert;
var lib = require('./index.js');
describe('all', function () {
    it('it has to be a string', function () {
        expect("foo").to.equal('foo');
    });
    it('this one is just a number', function () {
        expect(2).to.equal(2);
    });
    it('This one is just an array', function () {
        var ar = ["asdf", "sadf"];
        assert.isArray(ar);
    });    
    it('This one is should be an object', function () {
        var ar = {beaty:["asdf", "sadf"]};
        assert.isObject(ar);
    });    
    it('This one is should be an string', function () {
        assert.isNmber(lib.sample);
    });
});