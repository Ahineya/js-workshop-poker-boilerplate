var chai = require('chai');
var sinon = require('sinon');
var _ = require('lodash');

var Deck = require('../../src/server/modules/Deck.js');

describe("Deck test", function() {

    var deck, testHand;
    testHand = [
        {
            value: 'Q',
            suite: 'D'
        },
        {
            value: '2',
            suite: 'S'
        },
        {
            value: '5',
            suite: 'H'
        },
        {
            value: '8',
            suite: 'S'
        }
    ];

    sinon.stub(_, 'shuffle').returns(testHand);

    beforeEach(function() {

        deck = new Deck();
    });

    it("Should create new deck object", function() {
        chai.expect(deck, 'deck object should create');
    });

    it('should give requested amount of cards', function() {
        var hand = deck.give(3);

        chai.expect(hand.length === 3, 'hand length is 5');

    });

    it('should give exact cards', function() {

        var hand = deck.give(1);

        chai.assert(
            (hand[0].value === testHand[0].value),
            'card in hand have exact value'
        );

    });

});