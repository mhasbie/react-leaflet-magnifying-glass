import { MapControl } from 'react-leaflet';
import L from 'leaflet';
import './leaflet.magnifyingglass';
import './L.MagnifyingGlass.Control';

export default class MagnifyingGlassControl extends MapControl {
	createLeafletElement(props) {
		const { position = 'topleft', forceSeparateButton = false, radius = 100, zoomOffset = 3, fixedZoom = -1 } = props;
		const controlOptions = {
			position,
			forceSeparateButton
		};

		const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
		const tileOptions = {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		};
		const magnifyingGlass = L.magnifyingGlass({
			radius,
			zoomOffset,
			fixedZoom,
			layers: [
				L.tileLayer(tileUrl, tileOptions)
			]
		});

		return L.control.magnifyingglass(magnifyingGlass, controlOptions);
	}

	componentDidMount() {
		const { map } = this.context;
		console.log(this.context);
		this.leafletElement.addTo(map);
	}
}
