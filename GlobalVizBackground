var elv = ee.Image('NOAA/NGDC/ETOPO1');
var Ter = elv.select(0).gte(0);
var shade = ee.Terrain.hillshade(elv.select(0)).mask(Ter);
Map.addLayer(shade, {min:170, max:300, gamma:1.5}, 'hillshade');

var style = {
  'Deep': [{
      featureType: 'all',
      stylers: [{ color: '#708090'}]
  }]
};
Map.setOptions(null, style);
Map.setCenter(0, 30, 2);
