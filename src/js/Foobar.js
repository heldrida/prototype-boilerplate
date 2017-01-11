function Foobar () {

	this.init();

}

Foobar.prototype = {

	init: function () {

		console.log('Foobar init!');

	}


};

module.exports = Foobar;