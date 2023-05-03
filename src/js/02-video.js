import Player from '@vimeo/player';

const vimeoPlayerEL = document.querySelector('#vimeo-player');
//const player = new Player(vimeoPlayerEL);
const player = new Player(vimeoPlayerEL);
const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

player.on('play', function (e) {
  const videoLocaleCurrentTime = JSON.parse(
    localStorage.getItem(VIDEOPLAYER_CURRENT_TIME)
  );

  player
    .setCurrentTime(
      localStorage.getItem(VIDEOPLAYER_CURRENT_TIME)
        ? videoLocaleCurrentTime.seconds
        : 0
    )
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
});

player.on('timeupdate', function (e) {
  const videoCurrentTime = {
    duration: e.duration,
    percent: e.percent,
    seconds: e.seconds,
  };

  localStorage.setItem(
    VIDEOPLAYER_CURRENT_TIME,
    JSON.stringify(videoCurrentTime)
  );

  if (e.percent === 1) {
    localStorage.removeItem(VIDEOPLAYER_CURRENT_TIME);
  }
});
