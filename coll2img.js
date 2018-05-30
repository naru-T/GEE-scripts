//This is a function to convert an ImageCollection with 1 bands time series to an image with multiple bands

//https://groups.google.com/d/msg/google-earth-engine-developers/nKSVGUD9Bb0/ueYWKFTWBQAJ


var coll2img = function(Input_col){
  var empty = ee.Image().select();
  var multiband = Input_col.iterate(function(image, result) {
     return ee.Image(result).addBands(image);
  }, empty);
  return multiband;
};
