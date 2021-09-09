import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
import throttle from 'lodash.throttle';
const storage = 'videoplayer-current-time';
player.on('play', onPlay);
player.on('timeupdate', throttle(OnTimeUpdate, 500));
player.on('seeked', OnTimeUpdate);
function OnTimeUpdate() {
  player.getCurrentTime().then(seconds => localStorage.setItem(storage, seconds));
}
function onPlay() {
  player.setCurrentTime(localStorage.getItem(storage));
}