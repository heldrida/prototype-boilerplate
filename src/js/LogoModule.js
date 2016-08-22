function LogoModule () {

	this.init();

}

LogoModule.prototype = {

	init: function () {

		new Vivus('logo-frmwrks', {
			type: 'scenario',
			duration: 300,
			pathTimingFunction: Vivus.EASE
		});

	}


};

module.exports = LogoModule;