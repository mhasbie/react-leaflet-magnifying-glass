# react-leaflet-magnifying-glass

React wrapper of [Leaflet.MagnifyingGlass](https://github.com/bbecquet/Leaflet.MagnifyingGlass)
for [react-leaflet](https://github.com/PaulLeCam/react-leaflet).

This plugin allows you to add a "magnifying glass" effect to a Leaflet map, able to display a portion of the map in a different zoom (and actually display different content).

*Tested with Leaflet 1.3.1 and React-Leaflet 1.8.0*

![Screenshot](https://camo.githubusercontent.com/c5765b8606cae7394c54e3ce9aa01898aaa3e220/68747470733a2f2f7261772e6769746875622e636f6d2f62626563717565742f4c6561666c65742e4d61676e696679696e67476c6173732f6d61737465722f73637265656e73686f742e706e67)

[Demo JSFiddle](https://jsfiddle.net/m_hasbie/jkssn435/)


## Installation

### Install via NPM

```bash
npm install --save react-leaflet-magnifying-glass
```

## Usage example

```javascript
import { Map, TileLayer } from 'react-leaflet';
import MagnifyingGlassControl from 'react-leaflet-magnifying-glass';

const options = {
	position: 'topleft',
	radius: 100,
	zoomOffset: 3
};

<Map center={[2.935403, 101.448205]} zoom={10}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <MagnifyingGlassControl {...options} />
</Map>
```

### Options

Option          | Type      | Default | Description
--------------- | --------- | ------- | -------------
`position`      | `string`  | `topleft`    | Magnifier control position. One of (`topleft`,`topright`,`bottomleft`,`bottomright`).
`radius`        | `Integer` | `100`   | The radius of the magnifying glass, in pixels.
`zoomOffset`    | `Integer` | `3`     | The zoom level offset between the main map zoom and the magnifying glass.
`fixedZoom`     | `Integer` | `-1`    | If different than `-1`, defines a fixed zoom level to always use in the magnifying glass, ignoring the main map zoom and the `zoomOffet` value.


# TODO

- Support magnifying `Leaflet.markercluster` layer


# Credits
Credits goes to [bbecquet](https://github.com/bbecquet) and all the [contributors](https://github.com/bbecquet/Leaflet.MagnifyingGlass/graphs/contributors) for the original work.

# License

MIT License
