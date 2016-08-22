function LogoModule () {

	this.init();

}

LogoModule.prototype = {

	init: function () {

		var delay = 0;
		var containers = document.querySelectorAll('.logo-frmwrks-module > div');
		var i = 0;

		['logo-frmwrks0', 'logo-frmwrks1', 'logo-frmwrks2', 'logo-frmwrks3', 'logo-frmwrks4', 'logo-frmwrks5', 'logo-frmwrks6'].forEach(function (v) {

			(function (delay, i) {

				// delay the calls to see the different animations
				setTimeout(function () {

					containers[i].style.opacity = 1;

					new Vivus(v, {
						type: 'scenario',
						duration: 300,
						pathTimingFunction: Vivus.EASE
					});

				}, delay);

			}(delay, i));

			delay += 2000;
			i += 1;

		});

	}


};

module.exports = LogoModule;