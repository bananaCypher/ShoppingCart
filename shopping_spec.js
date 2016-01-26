var assert = require('assert');
var items = require('./items.js');

describe('Shopping', function(){
    
});

describe('Items', function(){
    it('have names', function(){
        for (var i = 0, len = items.length; i < len; i++) {
            var value = true;
            if (items[i].name == '' || items[i].name == null) {
                value = false;
            }
            assert.equal(true, value);
        }
    }); 
    it('have prices', function(){
        for (var i = 0, len = items.length; i < len; i++) {
            var value = true;
            if (items[i].price == null) {
                value = false;
            }
            assert.equal(true, value);
        }
    });
});

describe('Basket', function(){
    
});

describe('10% Discount', function(){

});

describe('Buy One Get One Free', function(){

});

describe('Discount Card', function(){

});
