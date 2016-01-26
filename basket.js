var basket = {
    items: require('./items.js'),
    runningTotal: function(){
        var sum = 0;
        var items = this.runBOGOF();
        for (var i = 0, len = items.length; i < len; i++) {
           sum += items[i].price; 
        }
        if (sum > 20) {
            sum = this.percDiscount(sum, 10);
        }
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
        for (var i = 0, len = this.items.length; i < len; i++) {
            var item = this.items[i]
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
}

module.exports = basket;
