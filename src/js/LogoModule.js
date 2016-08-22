function LogoModule () {

	this.init();

}

LogoModule.prototype = {

	init: function () {

		['logo-frmwrks1', 'logo-frmwrks2'].forEach(function (v) {

			console.log(v);

			new Vivus(v, {
				type: 'scenario',
				duration: 300,
				pathTimingFunction: Vivus.EASE
			});

		});

	}


};

module.exports = LogoModule;