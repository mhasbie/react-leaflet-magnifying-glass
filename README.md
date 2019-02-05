# react-leaflet-magnifying-glass

[![version](https://img.shields.io/npm/v/react-leaflet-magnifying-glass.svg?style=plastic)](http://npm.im/react-leaflet-magnifying-glass)
[![react-leaflet compatibility](https://img.shields.io/npm/dependency-version/react-leaflet-magnifying-glass/peer/react-leaflet.svg?style=plastic)](https://github.com/mhasbie/react-leaflet-magnifying-glass)
[![travis build](https://img.shields.io/travis/mhasbie/react-leaflet-magnifying-glass.svg?style=plastic)](https://travis-ci.org/mhasbie/react-leaflet-magnifying-glass)
[![dependencies](https://img.shields.io/david/mhasbie/react-leaflet-magnifying-glass.svg?style=plastic)](https://david-dm.org/mhasbie/react-leaflet-magnifying-glass)
[![peer dependencies](https://img.shields.io/david/peer/mhasbie/react-leaflet-magnifying-glass.svg?style=plastic)](https://david-dm.org/mhasbie/react-leaflet-magnifying-glass?type=peer)
[![issues](https://img.shields.io/github/issues/mhasbie/react-leaflet-magnifying-glass.svg?style=plastic)](https://github.com/mhasbie/react-leaflet-magnifying-glass/issues)
[![downloads](https://img.shields.io/npm/dt/react-leaflet-magnifying-glass.svg?style=plastic)](http://npm-stat.com/charts.html?package=react-leaflet-magnifying-glass&from=2018-01-01)
[![MIT License](https://img.shields.io/npm/l/react-leaflet-magnifying-glass.svg?style=plastic)](http://opensource.org/licenses/MIT)


React wrapper of [Leaflet.MagnifyingGlass](https://github.com/bbecquet/Leaflet.MagnifyingGlass)
for [react-leaflet](https://github.com/PaulLeCam/react-leaflet).

This plugin allows you to add a "magnifying glass" effect to a Leaflet map, able to display a portion of the map in a different zoom (and actually display different content).


![Screenshot](https://camo.githubusercontent.com/c5765b8606cae7394c54e3ce9aa01898aaa3e220/68747470733a2f2f7261772e6769746875622e636f6d2f62626563717565742f4c6561666c65742e4d61676e696679696e67476c6173732f6d61737465722f73637265656e73686f742e706e67)

*Tested with Leaflet 1.4.0 and React-Leaflet 1.9.1, React-Leaflet 2.2.0*


## Demos

| Version	| Demo	|
| ---		| ---	|
| react-leaflet@1.9.1 | [`CodePen`](https://codepen.io/m_hasbie/full/bzoGym/) |
| react-leaflet@2.x | [`CodePen`](https://codepen.io/m_hasbie/full/zeExOr/) |


## Installation

### Install via NPM

```bash
npm install --save react-leaflet-magnifying-glass
```

## Usage example for `react-leaflet` **v1**

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

## Usage example for `react-leaflet` **v2**

```javascript
import { Map, TileLayer, withLeaflet } from 'react-leaflet';
import MagnifyingGlassControlDefault from 'react-leaflet-magnifying-glass';

// wrap `MagnifyingGlassControl` component with `withLeaflet` HOC
const MagnifyingGlassControl = withLeaflet(MagnifyingGlassControlDefault);

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



## Options

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
