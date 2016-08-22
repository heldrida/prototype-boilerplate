function LogoModule () {

	this.init();

}

LogoModule.prototype = {

	init: function () {

		new Vivus('logo-frmwrks', {
			type: 'oneByOne',
			duration: 200,
			pathTimingFunction: Vivus.EASE_IN
		});

	}


};

module.exports = LogoModule;