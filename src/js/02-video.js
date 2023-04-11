import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const refs = {
    iframe : document.querySelector('#vimeo-player')
}

const player = new Player(refs.iframe, {
    id: 19231868,
    width: 640
});
console.log(player);

player.on('timeupdate', throttle((timeupdate) => {
    localStorage.setItem("videoplayer-current-time", timeupdate.seconds);
    },1000)
//     function (timeupdate) {
//     
    // }
);

const currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));
console.log(currentTime);

player.setCurrentTime(currentTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});