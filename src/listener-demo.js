function getvideoID(){
  let videoString = '';
  if (window.location.pathname == '/watch'){
    videoString = window.location.search.match(/[?&]v=([^&]+)/)[1];
  }
  return videoString;
}

function checkPathname() {
  let newPathname = getvideoID();
  if (newPathname !== currentPathname) {
    currentPathname = newPathname;
    console.log('Pathname changed:', currentPathname);
  }
}

let currentPathname = getvideoID();
setInterval(checkPathname, 1000);
