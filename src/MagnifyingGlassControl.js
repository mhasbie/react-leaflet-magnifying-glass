import { MapControl } from 'react-leaflet';
import L from 'leaflet';
// import cloneLayer from 'leaflet-clonelayer';
import _ from 'underscore';
import cloneLayer from './cloneLayer';
import './leaflet.magnifyingglass';
import './L.MagnifyingGlass.Control';
import './leaflet.magnifyingglass.css';
import './Control.MagnifyingGlass.css';

export default class MagnifyingGlassControl extends MapControl {
	createLeafletElement(props) {
		const { map } = this.context;
		const { position = 'topleft', forceSeparateButton = false } = props;
		this.layers = {};
		
		map.on('layeradd', (e) => {
			this._addLayer(e);
		});
		map.on('layerremove', (e) => {
			this._removeLayer(e);
		});
		const controlOptions = {
			position,
			forceSeparateButton: true // forced to use separate button otherwise the entire grouped button will be removed during update
		};
		return L.control.magnifyingglass(null, controlOptions);
	}

	_addLayer(e) {
		const { layer } = e;
		if (layer.options.isMagnifyingGlassLayer) return;
		const nested = (option) => {
			const allOptions = _.values(option);
			return _.some(allOptions, (opt) => opt instanceof L.Layer);
		};
		if (!_.has(layer, '_layers') && !nested(layer.options) && _.has(layer, '_leaflet_id') && !layer.options.isMagnifyingGlassLayer) this.layers[layer._leaflet_id] = cloneLayer(layer);
		this._updateMagnifyingGlass();
	}

	_removeLayer(e) {
		const { layer } = e;
		if (layer.options.isMagnifyingGlassLayer) return;
		delete this.layers[layer._leaflet_id];
		this._updateMagnifyingGlass();
	}
	
	_updateMagnifyingGlass() {
		const { map } = this.context;
		const { position = 'topleft', forceSeparateButton = false, radius = 100, zoomOffset = 3, fixedZoom = -1 } = this.props;
		const magnifying = map.hasLayer(this.magnifyingGlass);
		if (magnifying) map.removeLayer(this.magnifyingGlass);
		map.removeControl(this.leafletElement);
		
		const controlOptions = {
			position,
			forceSeparateButton: true // forced to use separate button otherwise the entire grouped button will be removed during update
		};
		this.magnifyingGlass = L.magnifyingGlass({
			radius,
			zoomOffset,
			fixedZoom,
			isMagnifyingGlassLayer: true,
			layers: _.values(this.layers)
		});
		this.leafletElement = L.control.magnifyingglass(this.magnifyingGlass, controlOptions);
		this.leafletElement.addTo(map);
		if (magnifying) this.magnifyingGlass.addTo(map);
	}
}
