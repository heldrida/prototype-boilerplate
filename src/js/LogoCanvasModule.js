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
				x: 62,
				y: 26
			},
			b: {
				x: 52,
				y: 20
			},
			c: {
				x: 20,
				y: 26
			},
			d: {
				x: 80,
				y: 74
			},
			e: {
				x: 56,
				y: 65
			},
			f: {
				x: 36,
				y: 74
			},
			g: {
				x: 26,
				y: 79
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
			points.b.x += 0.05;
			points.b.y -= 0.05;
			ctx.lineTo(Math.min(points.b.x, 62), Math.max(points.b.y, 10));

			// line c
			// 50, 26
			points.c.x += 0.028;
			points.c.y += 0.05;
			ctx.lineTo(Math.min(points.c.x, 50), Math.min(points.c.y, 26));

			// line d
			// 50, 74
			points.d.x -= 0.041;
			points.d.y += 0.05;
			ctx.lineTo(Math.max(points.d.x, 50), Math.min(points.d.y++, 74));

			// line e
			// 36, 89
			points.e.x -= 0.04;
			points.e.y += 0.04;
			ctx.lineTo(Math.max(points.e.x, 36), Math.min(points.e.y, 89));

			// line f
			// 36, 74
			ctx.lineTo(Math.min(points.f.x++, 36), Math.min(points.f.y++, 74));

			// line g
			// 78, 18
			ctx.lineTo(78, 18);

			// finish path
			ctx.stroke();

			requestAnimationFrame(render);

		}

		// start
		render();

	}
};

module.exports = LogoCanvasModule;