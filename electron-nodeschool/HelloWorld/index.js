const picture = require('cat-picture');
const image = require('lightning-image-poly');
const {remote} = require('electron');
const fs = require('fs');
const src = picture.src;

picture.remove();

var viz = new image('#visualization',null, [src], {hullAlgorithm: 'convex'});

function save () {
  function writeFileCB(err, data) {
    if(err)
      alert('error generating pdf! ' + err.message);
    else 
      alert('pdf saved!');
  }

  remote.getCurrentWindow().webContents.printToPDF(
    { portrait: true }, 
    (err, data) => fs.writeFile('annotation.pdf', data, (err) => writeFileCB(err,data))
  )
}

const P = 80;
window.addEventListener('keydown', e => { 
  if(e.keyCode === P) save() 
})
