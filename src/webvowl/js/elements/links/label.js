var forceLayoutNodeFunctions = require("../forceLayoutNodeFunctions")();


/**
 * A label represents the element(s) which further describe a link.
 * It encapsulates the property and its inverse property.
 * @param _property the property; the inverse is inferred
 * @returns {{}}
 */
module.exports = function (_property) {

	var label = {},
		property = _property;

	label.actualRadius = function () {
		return property.actualRadius();
	};

	label.draw = function (container) {
		return property.draw(container);
	};

	label.inverse = function () {
		return property ? property.inverse() : undefined;
	};

	label.property = function () {
		return property;
	};

	forceLayoutNodeFunctions.addTo(label);

	return label;
};