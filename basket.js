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
        var potentials = [];
        var named_potentials = [];
        var returners = [];
        for (var item of this.items) {
            if (item.bogof === true) {
                var index = named_potentials.lastIndexOf(item.name);
                if (index == -1) {
                    potentials.push(item);
                    named_potentials.push(item.name);
                } else {
                    potentials.splice(index, 1);
                    named_potentials.splice(index, 1);
                }
            } else {
                returners.push(item);
            }
        }
        return returners.concat(potentials);
    },
    customer: require('./customer.js'),
}

module.exports = basket;
