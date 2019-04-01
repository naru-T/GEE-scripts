//list of featurecollections to one featurecollection
input: input_listFC (list of featurecollections)
output: output

var list2fc = function(list){
 var empty = ee.FeatureCollection([]);
 var fcout = list.iterate(function(feature, result){
    return ee.FeatureCollection(result).merge(feature);
 }, empty);
 return fcout;

};

var output = ee.FeatureCollection(list2fc(input_listFC));
