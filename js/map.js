var map;

map	= new L.map('map-container', { zoomControl:false }).setView([40.7153604,-73.9837349], 11);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {attribution: 'Positron'}).addTo(map);

/*var allLayers = 'https://nycem.carto.com/u/imorey/api/v2/viz/217510a8-447a-11e6-81f4-0e05a8b3e3d7/viz.json';*/

//var allLayers = 'https://nycem.carto.com/u/nycem-1/builder/febefa52-0052-11e7-8d10-0e233c30368f/viz.json';

var allLayers = 'https://nycem.carto.com/u/nycem-1/api/v2/viz/febefa52-0052-11e7-8d10-0e233c30368f/viz.json';

cartodb.createLayer(map, allLayers, {https: true})
	.addTo(map)
	.on('done', function(layer) {
		libraries = layer.getSubLayer(0);
	})
	.on('error', function() {
    //log the error
	alert("some error occurred: " + err);
    });