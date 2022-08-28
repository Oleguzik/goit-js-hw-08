import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const resetBtnRef = document.querySelector('#reset-time');

resetBtnRef.addEventListener('click', onResetClick);
player.on('timeupdate', throttle(onTimeupdate, 1000));

onPageLoad();

function onTimeupdate(data) {
  localStorage.setItem(CURRENT_TIME, data.seconds);
}

function onPageLoad() {
  const savedVideoTime = localStorage.getItem(CURRENT_TIME);
  if (savedVideoTime) {
    player.setCurrentTime(savedVideoTime);
  }
}

function onResetClick() {
  player.pause();
  player.setCurrentTime(0);
  localStorage.removeItem(CURRENT_TIME);
}
