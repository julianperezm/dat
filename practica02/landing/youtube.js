
  'use strict'
  let tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player, player2, player3;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('mi_reproductor', {
      height: '300',
      width: '300',
      videoId: 'D-3Qg4pf-E4',
      events: {
        'onReady': onPlayerReady,
      }
    });
    player2 = new YT.Player('mi_reproductor2', {
      height: '300',
      width: '300',
      videoId: 'oZ0HaaT51yI',
      events: {
        'onReady': onPlayerReady,
      }
    });
    player3 = new YT.Player('mi_reproductor3', {
      height: '300',
      width: '300',
      videoId: 'SXxNPuDyIxs',
      events: {
        'onReady': onPlayerReady,
      }
    });
  }

  // El API llama a esta función cuando el reproductor esté listo
  function onPlayerReady(event) {
    event.target.playVideo();
  }
