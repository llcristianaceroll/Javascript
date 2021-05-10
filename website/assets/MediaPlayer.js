     /*
      const video = document.querySelector("video");
      const button = document.querySelector("button");

      function MediaPlayer (config) {
        this.media = config.el;
      }

      MediaPlayer.prototype.play = function () {
        this.media.play();
      };

      MediaPlayer.prototype.pause = function() {
        this.media.pause();
      }

      const player = new MediaPlayer({el : video});
      
      button.onclick = () => player.media.paused ? player.play() : player.pause();
      */
/*
      class MediaPlayer {
        constructor (config) {
          const {element} = config;
          this.media = element;
          }
         play() {
          this.media.play();
         }

         pause() {
          this.media.pause();
         }
      }

      const player = new MediaPlayer({element: video});

      button.onclick = () => video.paused ? player.play() : player.pause();
*/
   
function MediaPlayer (config) {
    this.media = config.el;
  }

  MediaPlayer.prototype.play = function () {
    this.media.play();
  };

  MediaPlayer.prototype.pause = function() {
    this.media.pause();
  }

  MediaPlayer.prototype.togglePlay =  function() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }; 

  export default MediaPlayer;