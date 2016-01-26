var basket = {
    items: require('./items.js'),
    runningTotal: function(){
        var sum = 0;
        var items = this.runBOGOF();
        var discount = 0;
        for (var item of items) { sum += item.price; }
        if (sum > 20) discount += 10;
        if (this.customer.discountCard) discount += 5
        if (discount > 0) sum = this.percDiscount(sum, discount);
        return sum;
    },
    percDiscount: function(total, discount){
        var perc = discount / 100;
        var sub = total / discount;
        return total - sub;
    },
    runBOGOF: function(){
        return this.runDeal(2, 2, 'bogof');
    },
    runTFT: function(){
        return this.runDeal(3, 1, 'tft');
    },
    runDeal: function(qualifier, freebies, dealID) {
        var potentials = {};
        var returners = [];
        for (var item of this.items) {
            if (!potentials[item.name]) potentials[item.name] = [];
            potentials[item.name].push(item);
            if (item[dealID] === true) {
                if (potentials[item.name].length == qualifier) { 
                    potentials[item.name].splice(0, freebies);
                }
            }
        }
        for (var key in potentials) {
            for (var item of potentials[key]) {
                returners.push(item);
            }
        }
        return returners;
    },
    customer: require('./customer.js'),
}

module.exports = basket;
