define(function (require, exports, module) {
	var C = require('module/moduleC');
	exports.B = function () {
		console.info("this is module B");
	}
})