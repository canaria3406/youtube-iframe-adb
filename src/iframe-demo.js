let player = document.getElementById('movie_player');

let iframeApi = document.createElement('div');
iframeApi.id = 'iframe-api';
iframeApi.style.display = 'flex';
iframeApi.style.justifyContent = 'center';

let videoId = window.location.search.match(/[?&]v=([^&]+)/)[1];
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
