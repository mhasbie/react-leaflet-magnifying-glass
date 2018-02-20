'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactLeaflet = require('react-leaflet');

var _leaflet = require('leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _cloneLayer = require('./cloneLayer');

var _cloneLayer2 = _interopRequireDefault(_cloneLayer);

require('./leaflet.magnifyingglass');

require('./L.MagnifyingGlass.Control');

require('./leaflet.magnifyingglass.css');

require('./Control.MagnifyingGlass.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import cloneLayer from 'leaflet-clonelayer';


var MagnifyingGlassControl = function (_MapControl) {
	_inherits(MagnifyingGlassControl, _MapControl);

	function MagnifyingGlassControl() {
		_classCallCheck(this, MagnifyingGlassControl);

		return _possibleConstructorReturn(this, (MagnifyingGlassControl.__proto__ || Object.getPrototypeOf(MagnifyingGlassControl)).apply(this, arguments));
	}

	_createClass(MagnifyingGlassControl, [{
		key: 'createLeafletElement',
		value: function createLeafletElement(props) {
			var _this2 = this;

			var map = this.context.map;
			var _props$position = props.position,
			    position = _props$position === undefined ? 'topleft' : _props$position,
			    _props$forceSeparateB = props.forceSeparateButton,
			    forceSeparateButton = _props$forceSeparateB === undefined ? false : _props$forceSeparateB;

			this.layers = {};

			map.on('layeradd', function (e) {
				_this2._addLayer(e);
			});
			map.on('layerremove', function (e) {
				_this2._removeLayer(e);
			});
			var controlOptions = {
				position: position,
				forceSeparateButton: true // forced to use separate button otherwise the entire grouped button will be removed during update
			};
			return _leaflet2.default.control.magnifyingglass(null, controlOptions);
		}
	}, {
		key: '_addLayer',
		value: function _addLayer(e) {
			var layer = e.layer;

			if (layer.options.isMagnifyingGlassLayer) return;
			var nested = function nested(option) {
				var allOptions = _underscore2.default.values(option);
				return _underscore2.default.some(allOptions, function (opt) {
					return opt instanceof _leaflet2.default.Layer;
				});
			};
			if (!_underscore2.default.has(layer, '_layers') && !nested(layer.options) && _underscore2.default.has(layer, '_leaflet_id') && !layer.options.isMagnifyingGlassLayer) this.layers[layer._leaflet_id] = (0, _cloneLayer2.default)(layer);
			this._updateMagnifyingGlass();
		}
	}, {
		key: '_removeLayer',
		value: function _removeLayer(e) {
			var layer = e.layer;

			if (layer.options.isMagnifyingGlassLayer) return;
			delete this.layers[layer._leaflet_id];
			this._updateMagnifyingGlass();
		}
	}, {
		key: '_updateMagnifyingGlass',
		value: function _updateMagnifyingGlass() {
			var map = this.context.map;
			var _props = this.props,
			    _props$position2 = _props.position,
			    position = _props$position2 === undefined ? 'topleft' : _props$position2,
			    _props$forceSeparateB2 = _props.forceSeparateButton,
			    forceSeparateButton = _props$forceSeparateB2 === undefined ? false : _props$forceSeparateB2,
			    _props$radius = _props.radius,
			    radius = _props$radius === undefined ? 100 : _props$radius,
			    _props$zoomOffset = _props.zoomOffset,
			    zoomOffset = _props$zoomOffset === undefined ? 3 : _props$zoomOffset,
			    _props$fixedZoom = _props.fixedZoom,
			    fixedZoom = _props$fixedZoom === undefined ? -1 : _props$fixedZoom;

			var magnifying = map.hasLayer(this.magnifyingGlass);
			if (magnifying) map.removeLayer(this.magnifyingGlass);
			map.removeControl(this.leafletElement);

			var controlOptions = {
				position: position,
				forceSeparateButton: true // forced to use separate button otherwise the entire grouped button will be removed during update
			};
			this.magnifyingGlass = _leaflet2.default.magnifyingGlass({
				radius: radius,
				zoomOffset: zoomOffset,
				fixedZoom: fixedZoom,
				isMagnifyingGlassLayer: true,
				layers: _underscore2.default.values(this.layers)
			});
			this.leafletElement = _leaflet2.default.control.magnifyingglass(this.magnifyingGlass, controlOptions);
			this.leafletElement.addTo(map);
			if (magnifying) this.magnifyingGlass.addTo(map);
		}
	}]);

	return MagnifyingGlassControl;
}(_reactLeaflet.MapControl);

exports.default = MagnifyingGlassControl;