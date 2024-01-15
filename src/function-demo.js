function createIframe(){
  let player = document.getElementById('movie_player');
  let iframeApi = document.createElement('div');
  iframeApi.id = 'iframe-api';
  iframeApi.style.display = 'flex';
  iframeApi.style.justifyContent = 'center';

  let videoId = getvideoID();
  let youtubeEmbed = 'https://www.youtube.com/embed/' + videoId + '?rel=0&autoplay=1';

  let iframe = document.createElement('iframe');
  iframe.id = 'iframe_player';
  iframe.width = '100%';
  iframe.height = player.clientHeight;
  iframe.src = youtubeEmbed;
  iframe.frameborder = 0;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowfullscreen = true;
  iframe.class = 'style-scope ytd-watch-flexy';

  let parentNode = player.parentNode;
  parentNode.insertBefore(iframeApi, player.nextSibling);
  parentNode.removeChild(player);

  let iframeContainer = document.getElementById('iframe-api');
  iframeContainer.appendChild(iframe);
}

function removeIframe(){
  let iframe_player = document.getElementById('iframe_player') || '';
  if (!iframe_player) return;
  let iframe_api = document.getElementById('iframe-api') || '';
  if (!iframe_api) return;

  let iframe_player_parentNode = iframe_player.parentNode;
  iframe_player_parentNode.removeChild(iframe_player);
  let iframe_api_parentNode = iframe_api.parentNode;
  iframe_api_parentNode.removeChild(iframe_api);
}

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
    if (currentPathname == ''){
      removeIframe();
    }
    else{
      removeIframe();
      createIframe();
    }
    console.log('Pathname changed:', currentPathname);
  }
}

let currentPathname = getvideoID();
createIframe();
setInterval(checkPathname, 1000);