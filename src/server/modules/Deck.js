var _ = require('lodash');

module.exports = function() {

    var deck;

    var values = ['A', '2', '3', '4', '5', '6','7','8','9','10','J', 'Q', 'K'];
    var suites = ['S', 'C', 'D', 'H'];

    _init();

    function _init() {
        deck = values.reduce(function (curr, value) {
            var tempCards = [];

            suites.forEach(function (suite) {
                tempCards.push({'value': value, 'suite': suite});
            });

            return curr.concat(tempCards);

        }, []);

        deck = _.shuffle( deck );

    }


    function _give(amount) {

        var hand;

        hand = deck.slice(0, amount);
        deck = deck.splice(amount, deck.length - amount)

        return hand;
    }

    return {
        give: _give

    };

};

/*
{
    value: 'A',
    suite: 'S'
}*/
