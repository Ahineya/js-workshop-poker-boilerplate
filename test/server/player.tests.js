var chai = require('chai');

var Player = require('../../src/server/modules/Player.js');

describe('Player tests', function() {

    var player;

    beforeEach(function() {
        player = new Player();
    });

    it('should create Player instance', function() {
        chai.assert(player, 'should create player');
    });

    it('should take cards', function() {

        var hand = [{
            value: 'A',
            suite: 'S'
        }];

        player.assignHand( hand );

        var playerHand = player.getHand();

        chai.assert(playerHand.length === 1, 'Player have cards in hand');

    });

});