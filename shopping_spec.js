var assert = require('assert');
var items = require('./items.js');
var basket = require('./basket.js');

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
    it('check we can get total price', function(){
        assert.equal(5.5, basket.runningTotal());
    });
    it('check we get a 10% discount on baskets over £20', function(){
        basket.items.push({ name: 'steaks', price: 25 });
        assert.equal(27.45, basket.runningTotal());
    });
});

describe('Buy One Get One Free', function(){
    it('check items are removed from cart', function(){
        var test = [{name: 'bread', price: 1.50}, {name: 'steaks', price: 25}]
        // f'ing JAvascript doesn't compare objects properly.... so I have to manually do it.
        assert.equal(JSON.stringify(test), JSON.stringify(basket.runBOGOF()));
    });
});

describe('Discount Card', function(){

});
