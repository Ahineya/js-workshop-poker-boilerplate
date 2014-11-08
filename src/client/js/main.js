(function() {
    console.log("Boilerplate works");

    window.socket = io();

    socket.on('hand', function(playerData) {
        console.log('hand', playerData);
    });

})();