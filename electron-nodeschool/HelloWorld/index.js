const picture = require('cat-picture');
const image = require('lightning-image-poly');

const { src } = picture;

picture.remove();

var viz = new image('#visualization',null, [src], {hullAlgorithm: 'convex'});


