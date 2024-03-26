let player = document.getElementById('movie_player');
let videoId = document.querySelector('ytd-watch-flexy').getAttribute('video-id');
let youtubeEmbed = 'https://www.youtube.com/embed/' + videoId + '?rel=0&autoplay=1';

let iframeDiv = document.createElement('div');
iframeDiv.id = 'iframe-api';
iframeDiv.style.display = 'flex';
iframeDiv.style.justifyContent = 'center';

let iframe = document.createElement('iframe');
iframe.width = player.clientWidth;
iframe.height = player.clientHeight;
iframe.src = youtubeEmbed;
iframe.frameborder = 0;
iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
iframe.allowfullscreen = true;
iframe.class= 'style-scope ytd-watch-flexy';

let container = player.parentNode;
container.insertBefore(iframeDiv, player.nextSibling);
container.removeChild(player);

let iframeContainer = document.getElementById('iframe-api');
iframeContainer.appendChild(iframe);