import { MapControl } from 'react-leaflet';
import L from 'leaflet';
import cloneLayer from 'leaflet-clonelayer';
import values from 'lodash/values';
import some from 'lodash/some';
import has from 'lodash/has';
import './leaflet.magnifyingglass';
import './L.MagnifyingGlass.Control';
import './leaflet.magnifyingglass.css';
import './Control.MagnifyingGlass.css';

export default class MagnifyingGlassControl extends MapControl {
	createLeafletElement(props) {
		const {
			map
		} = props.leaflet || this.context;
		const { 
			position = 'topleft',
			forceSeparateButton = false
		} = props;
		this.layers = {};
		this.mounted = false;
		
		map.on('layeradd', (e) => {
			this._addLayer(e);
		});
		map.on('layerremove', (e) => {
			this._removeLayer(e);
		});
		map.on('unload', (e) => {
			this.mounted = false;
		});
		const controlOptions = {
			position,
			forceSeparateButton: true // forced to use separate button otherwise the entire grouped button will be removed during update
		};
		return L.control.magnifyingglass(null, controlOptions);
	}

	componentDidMount() {
		this.mounted = true;
		this._updateMagnifyingGlass();
	}

	componentWillUnmount() {
		this.mounted = false;
		this._updateMagnifyingGlass();
	}

	_addLayer(e) {
		const { layer } = e;
		if (layer.options.isMagnifyingGlassLayer) return; // Do not add the magnifying glass layer to the list
		const nested = (option) => {
			const allOptions = values(option);
			return some(allOptions, (opt) => opt instanceof L.Layer);
		};
		if (!has(layer, '_layers') && !nested(layer.options) && has(layer, '_leaflet_id') && !layer.options.isMagnifyingGlassLayer)
			this.layers[layer._leaflet_id] = cloneLayer(layer);
		this._updateMagnifyingGlass();
	}

	_removeLayer(e) {
		const { layer } = e;
		if (layer.options.isMagnifyingGlassLayer) return; // Ignore the magnifying glass layer events
		delete this.layers[layer._leaflet_id];
		this._updateMagnifyingGlass();
	}
	
	_updateMagnifyingGlass() {
		if (!this.mounted) return;
		
		const {
			map
		} = this.props.leaflet || this.context;
		
		const {
			position = 'topleft',
			forceSeparateButton = false,
			radius = 100,
			zoomOffset = 3,
			fixedZoom = -1
		} = this.props;
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
			layers: values(this.layers)
		});
		this.leafletElement = L.control.magnifyingglass(this.magnifyingGlass, controlOptions);
		this.leafletElement.addTo(map);
		if (magnifying) this.magnifyingGlass.addTo(map);
	}
}
