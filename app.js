'use strict';



// Dependencies
//
var config = require('./config');



function hideInitialScreen () {
	window.document.querySelector('#initialScreen')
	.style.display = 'none';
}



function displayErrorOnSignin () {
	console.log('Error is being called');
	// TODO - display an error message in the screen
}



function connect (username) {
	new window.Peer(username, {key: config.peerjs.key})
	.on('open', hideInitialScreen)
	.on('error', displayErrorOnSignin);
}



function signin () {
	var username = window.document
	.querySelector('input[name="username"]').value;
	connect(username);
	return false;
}