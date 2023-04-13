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

let currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));

if (!currentTime) {
    currentTime = 0;
} else {
    player.setCurrentTime(currentTime);
}




// .then(function(seconds) {
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             break;
//         default:
//             break;
//     }
// });