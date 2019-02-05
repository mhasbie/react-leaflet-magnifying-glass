/* global describe, expect, it, jest */
import React, { createRef, Component } from 'react';
import { mount } from './enzyme';
import 'jest-enzyme';

import { Map, TileLayer, withLeaflet } from 'react-leaflet';
import MagnifyingGlassControlDefault from '../dist/react-leaflet-magnifying-glass.min.js';
const MagnifyingGlassControl = withLeaflet(MagnifyingGlassControlDefault);


describe('MagnifyingGlassControl', () => {

	it('Render magnifying glass', () => {

		const mapOptions = {
			center: [2.935403, 101.448205],
			zoom: 3,
			minZoom: 1,
			maxZoom: 22,
		};
		const magnifyingGlassOptions = {
			position: 'topleft',
			forceSeparateButton: true,
			radius: 100,
			zoomOffset: 3
		};
		
		const magnifyingGlassControlRef = createRef();
		
		const wrapper = mount(
			<div>
				<Map {...mapOptions}>
					<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
					<MagnifyingGlassControl {...magnifyingGlassOptions} ref={magnifyingGlassControlRef} />
				</Map>
			</div>
		);
		
		expect(wrapper).not.toBeEmptyRender();
		expect(magnifyingGlassControlRef.current.leafletElement.options.position).toEqual('topleft');
	});

})