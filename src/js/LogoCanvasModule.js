function LogoCanvasModule () {

	this.init();

}

LogoCanvasModule.prototype = {

	init: function () {

		var canvas = document.querySelector('.frmwrks-logo-canvas-1');
		var ctx = canvas.getContext("2d");
		var width = canvas.width / 2;
		var lineWidth = 3;
		var points = {
			a: {
				x: -50,
				y: 100
			},
			b: {
				x: 10,
				y: 50
			},
			c: {
				x: 0,
				y: -110
			},
			d: {
				x: 50,
				y: 150
			},
			e: {
				x: -50,
				y: 50
			},
			f: {
				x: -100,
				y: 100
			},
			g: {
				x: -50,
				y: -10
			}
		};


		var render = function () {
			ctx.clearRect(0, 0, 100, 100);

			//draw a circle
			ctx.beginPath();
			ctx.arc(width, width, width - lineWidth, 0, Math.PI * 2, false);
			ctx.lineWidth = lineWidth;

			// line color
			ctx.strokeStyle = 'black';
			ctx.stroke();

			// line a
			ctx.beginPath();
			ctx.lineWidth = lineWidth;

			ctx.moveTo(22, 82);
			// 62, 26
			ctx.lineTo(Math.min(points.a.x++, 62), Math.min(points.a.y++, 26));

			// line b
			// 62, 10;
			ctx.lineTo(Math.min(points.b.x++, 62), Math.min(points.b.y++, 10));

			// line c
			// 50, 26
			ctx.lineTo(Math.min(points.c.x++, 50), Math.min(points.c.y++, 26));

			// line d
			// 50, 74
			ctx.lineTo(Math.min(points.d.x++, 50), Math.min(points.d.y++, 74));

			// line e
			// 36, 89
			ctx.lineTo(Math.min(points.e.x++, 36), Math.min(points.e.y++, 89));

			// line f
			// 36, 74
			ctx.lineTo(Math.min(points.f.x++, 36), Math.min(points.f.y++, 74));

			// line g
			// 78, 18
			ctx.lineTo(Math.min(points.g.x++, 78), Math.min(points.g.y++, 18));

			// finish path
			ctx.stroke();

			requestAnimationFrame(render);

		}

		// start
		render();

	}
};

module.exports = LogoCanvasModule;