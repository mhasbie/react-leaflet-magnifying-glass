'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactLeaflet = require('react-leaflet');

var _leaflet = require('leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

require('./leaflet.magnifyingglass');

require('./L.MagnifyingGlass.Control');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MagnifyingGlassControl = function (_MapControl) {
	_inherits(MagnifyingGlassControl, _MapControl);

	function MagnifyingGlassControl() {
		_classCallCheck(this, MagnifyingGlassControl);

		return _possibleConstructorReturn(this, (MagnifyingGlassControl.__proto__ || Object.getPrototypeOf(MagnifyingGlassControl)).apply(this, arguments));
	}

	_createClass(MagnifyingGlassControl, [{
		key: 'createLeafletElement',
		value: function createLeafletElement(props) {
			var _props$position = props.position,
			    position = _props$position === undefined ? 'topleft' : _props$position,
			    _props$forceSeparateB = props.forceSeparateButton,
			    forceSeparateButton = _props$forceSeparateB === undefined ? false : _props$forceSeparateB,
			    _props$radius = props.radius,
			    radius = _props$radius === undefined ? 100 : _props$radius,
			    _props$zoomOffset = props.zoomOffset,
			    zoomOffset = _props$zoomOffset === undefined ? 3 : _props$zoomOffset,
			    _props$fixedZoom = props.fixedZoom,
			    fixedZoom = _props$fixedZoom === undefined ? -1 : _props$fixedZoom;

			var controlOptions = {
				position: position,
				forceSeparateButton: forceSeparateButton
			};

			var tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
			var tileOptions = {
				attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			};
			var magnifyingGlass = _leaflet2.default.magnifyingGlass({
				radius: radius,
				zoomOffset: zoomOffset,
				fixedZoom: fixedZoom,
				layers: [_leaflet2.default.tileLayer(tileUrl, tileOptions)]
			});

			return _leaflet2.default.control.magnifyingglass(magnifyingGlass, controlOptions);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var map = this.context.map;

			console.log(this.context);
			this.leafletElement.addTo(map);
		}
	}]);

	return MagnifyingGlassControl;
}(_reactLeaflet.MapControl);

exports.default = MagnifyingGlassControl;