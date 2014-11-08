module.exports = function() {

    var hand;

    function _assignHand( newHand ) {
        hand = newHand;
    }

    function _getHand() {
        return hand;
    }

    return {
        getHand: _getHand,
        assignHand: _assignHand
    };

};