webpackJsonp(["common"],{

/***/ "../../node_modules/create-html-element/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const stringifyAttributes = __webpack_require__("../../node_modules/stringify-attributes/index.js");
const htmlTags = __webpack_require__("../../node_modules/html-tags/void.js");
const escapeGoat = __webpack_require__("../../node_modules/escape-goat/index.js");

const voidHtmlTags = new Set(htmlTags);

module.exports = options => {
	options = Object.assign({
		name: 'div',
		attributes: {},
		html: ''
	}, options);

	if (options.html && options.text) {
		throw new Error('The `html` and `text` options are mutually exclusive');
	}

	const content = options.text ? escapeGoat.escape(options.text) : options.html;
	let ret = `<${options.name}${stringifyAttributes(options.attributes)}>`;

	if (!voidHtmlTags.has(options.name)) {
		ret += `${content}</${options.name}>`;
	}

	return ret;
};


/***/ }),

/***/ "../../node_modules/escape-goat/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.escape = input => input
	.replace(/&/g, '&amp;')
	.replace(/"/g, '&quot;')
	.replace(/'/g, '&#39;')
	.replace(/</g, '&lt;')
	.replace(/>/g, '&gt;');

exports.unescape = input => input
	.replace(/&gt;/g, '>')
	.replace(/&lt;/g, '<')
	.replace(/&#39;/g, '\'')
	.replace(/&quot;/g, '"')
	.replace(/&amp;/g, '&');

exports.escapeTag = function (input) {
	let output = input[0];
	for (let i = 1; i < arguments.length; i++) {
		output = output + exports.escape(arguments[i]) + input[i];
	}
	return output;
};

exports.unescapeTag = function (input) {
	let output = input[0];
	for (let i = 1; i < arguments.length; i++) {
		output = output + exports.unescape(arguments[i]) + input[i];
	}
	return output;
};


/***/ }),

/***/ "../../node_modules/html-tags/html-tags-void.json":
/***/ (function(module, exports) {

module.exports = ["area","base","br","col","embed","hr","img","input","link","menuitem","meta","param","source","track","wbr"]

/***/ }),

/***/ "../../node_modules/html-tags/void.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__("../../node_modules/html-tags/html-tags-void.json");


/***/ }),

/***/ "../../node_modules/stringify-attributes/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const escapeGoat = __webpack_require__("../../node_modules/escape-goat/index.js");

module.exports = input => {
	const attributes = [];

	for (const key of Object.keys(input)) {
		let value = input[key];

		if (value === false) {
			continue;
		}

		if (Array.isArray(value)) {
			value = value.join(' ');
		}

		let attribute = escapeGoat.escape(key);

		if (value !== true) {
			attribute += `="${escapeGoat.escape(String(value))}"`;
		}

		attributes.push(attribute);
	}

	return attributes.length > 0 ? ' ' + attributes.join(' ') : '';
};


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../node_modules/create-html-element/index.js");


/***/ })

},[0]);