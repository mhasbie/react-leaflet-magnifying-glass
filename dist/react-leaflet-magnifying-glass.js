(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-leaflet"), require("leaflet"));
	else if(typeof define === 'function' && define.amd)
		define(["react-leaflet", "leaflet"], factory);
	else if(typeof exports === 'object')
		exports["ReactLeafletMagnifyingGlass"] = factory(require("react-leaflet"), require("leaflet"));
	else
		root["ReactLeafletMagnifyingGlass"] = factory(root["ReactLeaflet"], root["L"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _MagnifyingGlassControl = __webpack_require__(1);

	var _MagnifyingGlassControl2 = _interopRequireDefault(_MagnifyingGlassControl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _MagnifyingGlassControl2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactLeaflet = __webpack_require__(2);

	var _leaflet = __webpack_require__(3);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	__webpack_require__(4);

	__webpack_require__(5);

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	L.MagnifyingGlass = L.Layer.extend({
	  options: {
	    radius: 100,
	    zoomOffset: 3,
	    layers: [],
	    fixedPosition: false,
	    latLng: [0, 0],
	    fixedZoom: -1
	  },

	  initialize: function initialize(options) {
	    L.Util.setOptions(this, options);
	    this._fixedZoom = this.options.fixedZoom != -1;
	    this._mainMap = null;
	    this._glassMap = null;
	  },

	  getMap: function getMap() {
	    return this._glassMap;
	  },

	  _createMiniMap: function _createMiniMap(elt) {
	    return new L.Map(elt, {
	      layers: this.options.layers,
	      zoom: this._getZoom(),
	      maxZoom: this._mainMap.getMaxZoom(),
	      minZoom: this._mainMap.getMinZoom(),
	      crs: this._mainMap.options.crs,
	      fadeAnimation: false,
	      // disable every controls and interaction means
	      attributionControl: false,
	      zoomControl: false,
	      boxZoom: false,
	      touchZoom: false,
	      scrollWheelZoom: false,
	      doubleClickZoom: false,
	      dragging: false,
	      keyboard: false
	    });
	  },

	  _getZoom: function _getZoom() {
	    return this._fixedZoom ? this.options.fixedZoom : this._mainMap.getZoom() + this.options.zoomOffset;
	  },

	  _updateZoom: function _updateZoom() {
	    this._glassMap.setZoom(this._getZoom());
	  },

	  setRadius: function setRadius(radius) {
	    this.options.radius = radius;
	    if (this._wrapperElt) {
	      this._wrapperElt.style.width = this.options.radius * 2 + 'px';
	      this._wrapperElt.style.height = this.options.radius * 2 + 'px';
	    }
	  },

	  setLatLng: function setLatLng(latLng) {
	    this.options.latLng = latLng;
	    this._update(latLng);
	  },

	  _updateFromMouse: function _updateFromMouse(evt) {
	    this._update(evt.latlng, evt.layerPoint);
	  },

	  _updateFixed: function _updateFixed() {
	    this._update(this.options.latLng);
	  },

	  _update: function _update(latLng, layerPoint) {
	    // update mini map view, forcing no animation
	    this._glassMap.setView(latLng, this._getZoom(), {
	      pan: { animate: false }
	    });

	    // update the layer element position on the main map,
	    // using the one provided or reprojecting it
	    layerPoint = layerPoint || this._mainMap.latLngToLayerPoint(latLng);
	    this._wrapperElt.style.left = layerPoint.x - this.options.radius + 'px';
	    this._wrapperElt.style.top = layerPoint.y - this.options.radius + 'px';
	  },

	  /**
	  As defined by ILayer
	  */
	  onAdd: function onAdd(map) {
	    this._mainMap = map;
	    // create a wrapper element and a container for the map inside it
	    this._wrapperElt = L.DomUtil.create('div', 'leaflet-magnifying-glass');
	    var glassMapElt = L.DomUtil.create('div', '', this._wrapperElt);
	    // Webkit border-radius clipping workaround (see CSS)
	    if (L.Browser.webkit) L.DomUtil.addClass(glassMapElt, 'leaflet-magnifying-glass-webkit');
	    // build the map
	    this._glassMap = this._createMiniMap(glassMapElt);

	    // forward some DOM events as Leaflet events
	    L.DomEvent.addListener(this._wrapperElt, 'click', this._fireClick, this);

	    var opts = this.options;

	    this.setRadius(opts.radius);
	    this.setLatLng(opts.latLng);

	    this._glassMap.whenReady(function () {
	      if (opts.fixedPosition) {
	        this._mainMap.on('zoomend', this._updateFixed, this);
	        // for now, hide the elements during zoom transitions
	        L.DomUtil.addClass(this._wrapperElt, 'leaflet-zoom-hide');
	      } else {
	        this._mainMap.on('mousemove', this._updateFromMouse, this);
	        if (!this._fixedZoom) {
	          this._mainMap.on('zoomend', this._updateZoom, this);
	        }
	      }
	    }, this);

	    // add the magnifying glass as a layer to the top-most pane
	    map.getPanes().popupPane.appendChild(this._wrapperElt);

	    // needed after the element has been added, otherwise tile loading is messy
	    this._glassMap.invalidateSize();

	    return this;
	  },

	  _fireClick: function _fireClick(domMouseEvt) {
	    this.fire('click', domMouseEvt);
	    L.DomEvent.stopPropagation(domMouseEvt);
	  },

	  /**
	  As defined by ILayer
	  */
	  onRemove: function onRemove(map) {
	    map.off('viewreset', this._updateFixed, this);
	    map.off('mousemove', this._updateFromMouse, this);
	    map.off('zoomend', this._updateZoom, this);
	    // layers must be explicitely removed before map destruction,
	    // otherwise they can't be reused if the mg is re-added
	    for (var i = 0, l = this.options.layers.length; i < l; i++) {
	      this._glassMap.removeLayer(this.options.layers[i]);
	    }
	    this._glassMap.remove();
	    L.DomEvent.removeListener(this._wrapperElt, 'click', this._fireClick);
	    map.getPanes().popupPane.removeChild(this._wrapperElt);
	    this._mainMap = null;

	    return this;
	  }
	});

	L.magnifyingGlass = function (options) {
	  return new L.MagnifyingGlass(options);
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	L.Control.MagnifyingGlass = L.Control.extend({

		_magnifyingGlass: false,

		options: {
			position: 'topleft',
			title: 'Toggle Magnifying Glass',
			forceSeparateButton: false
		},

		initialize: function initialize(magnifyingGlass, options) {
			this._magnifyingGlass = magnifyingGlass;
			// Override default options
			for (var i in options) {
				if (options.hasOwnProperty(i) && this.options.hasOwnProperty(i)) this.options[i] = options[i];
			}
		},

		onAdd: function onAdd(map) {
			var className = 'leaflet-control-magnifying-glass',
			    container;

			if (map.zoomControl && !this.options.forceSeparateButton) {
				container = map.zoomControl._container;
			} else {
				container = L.DomUtil.create('div', 'leaflet-bar');
			}

			this._createButton(this.options.title, className, container, this._clicked, map, this._magnifyingGlass);
			return container;
		},

		_createButton: function _createButton(title, className, container, method, map, magnifyingGlass) {
			var link = L.DomUtil.create('a', className, container);
			link.href = '#';
			link.title = title;

			L.DomEvent.addListener(link, 'click', L.DomEvent.stopPropagation).addListener(link, 'click', L.DomEvent.preventDefault).addListener(link, 'click', function () {
				method(map, magnifyingGlass);
			}, map);

			return link;
		},

		_clicked: function _clicked(map, magnifyingGlass) {
			if (!magnifyingGlass) {
				return;
			}

			if (map.hasLayer(magnifyingGlass)) {
				map.removeLayer(magnifyingGlass);
			} else {
				magnifyingGlass.addTo(map);
			}
		}
	});

	L.control.magnifyingglass = function (magnifyingGlass, options) {
		return new L.Control.MagnifyingGlass(magnifyingGlass, options);
	};

/***/ })
/******/ ])
});
;