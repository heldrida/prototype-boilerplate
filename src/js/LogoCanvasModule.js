function LogoCanvasModule () {

	this.init();

}

LogoCanvasModule.prototype = {

	init: function () {

		var frmwrksLogoCanvas1 = document.querySelector('.frmwrks-logo-canvas-1');
		var ctx1 = frmwrksLogoCanvas1.getContext("2d");
		var width = frmwrksLogoCanvas1.width / 2;
		var lineWidth = 3;

		ctx1.translate(0.5, 0.5);

		//draw a circle
		ctx1.beginPath();
		ctx1.arc(width, width, width - lineWidth, 0, Math.PI * 2, false);
		ctx1.lineWidth = lineWidth;

		// line color
		ctx1.strokeStyle = 'black';
		ctx1.stroke();

		// line A
		// ctx1.beginPath();
		ctx1.lineWidth = 3;

		ctx1.moveTo(22, 82);
		ctx1.lineTo(62, 26);

		// line B
		ctx1.lineTo(62, 10);

		// line C
		ctx1.lineTo(50, 26);

		// line d
		ctx1.lineTo(50, 74);

		// line e
		ctx1.lineTo(36, 89);

		// line f
		ctx1.lineTo(36, 74);

		// line g
		ctx1.lineTo(78, 18);

		// finish path
		ctx1.stroke();

	}

};

module.exports = LogoCanvasModule;