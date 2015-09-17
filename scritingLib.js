//////////// Polite loading of images using data attribute

function loadImages(){
  var imageTags = expandedContentImgs;
   for(var i=0, length = imageTags.length; i<length; i++){
    var image = imageTags[i];
    image.setAttribute('src', image.getAttribute('data-src'));
  }
}

//////////// Loading script dynamically

function getScript(path, callback) {
  var script;
  script = document.createElement('script');
  script.src = path;
  script.id = path;
  if(script.readyState) {
    script.onreadystatechange = function(){
      if(script.readyState === 'loaded' || script.readyState === 'complete'){
        script.onreadystatechange = null;
        callback();
      }
    };
  }else{
    script.onload = callback;
  }
  document.head.appendChild(script);
}