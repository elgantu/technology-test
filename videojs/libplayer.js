(() => {

    window.WSSP = async function WSSP(initialData) {

        if (!initialData) {
            return console.warn('Initialization data was not received');
        }

        const Player = videojs(initialData.playerElement, {
            autoplay: initialData.autoplay || false,
            playsinline: true
        });

        class OperationWithPlayer {
            constructor() {
                this.renderToCanvas = false;
                this.videoPlaying = false;
            }

            async pausePlay() {
                Player.pause();
            }

            startPlay() {
                Player.play();
            }

            setUrlVideo(url) {
                if (url.indexOf('https://www.youtube.com/watch') + 1 === 1 || url.indexOf('https://youtu.be/') + 1 === 1) {
                    Player.src({
                        type: "video/youtube",
                        src: url
                    });
                } else {
                    Player.src({
                        type: "video/mp4",
                        src: url
                    });
                }
            }

            setCurrentTime(time) {
                Player.one('playing', function () {
                    Player.currentTime(time)
                });
            }


            async initialFaceDetector(player) {
                let loader = false;

                if (initialData.loader) {
                    loader = document.getElementById(initialData.loader)
                    loader.style.display = "flex"
                }

                Player.muted(true);
                function onIndex(index) {
                    console.log(index)
                    if (initialData.faceDetectorPlayPause) {
                        if (index.attention) {
                            if (!PC.videoPlaying) {
                                PC.videoPlaying = true;
                                PC.startPlay()
                            }
                        }
                        if (!index.attention) {
                            if (PC.videoPlaying) {
                                PC.videoPlaying = false;
                                PC.pausePlay()
                            }
                        }
                    }
                }

                function onSecondIndex(index) {
                    console.log(index)
                }

                const canvas = document.getElementById(initialData.canvasElementId)

                Player.currentTime(0)
                await window.createFaceDetector(player, { onIndex: onIndex, onSecondIndex: onSecondIndex }, canvas)

                
                Player.muted(false);
                Player.currentTime(0)

                canvas.style.zIndex = 2;

                if (loader) {
                    loader.style.display = "none"
                }

            }

        }

        const PC = new OperationWithPlayer();


        const init = async () => {


            PC.setUrlVideo(initialData.video_url)
        }


        await init();


        if (Player.src().indexOf('https://www.youtube.com/watch') + 1 === 1 || Player.src().indexOf('https://youtu.be/') + 1 === 1) {
            Player.options.youtube = {
                ytControls: 2,
                rel: 1,
                autohide: 0,
                start: initialData.video_currentTime,
                t: initialData.video_currentTime
            }
        }

        Player.on('play', async () => {
            if (initialData.faceDetector && !PC.renderToCanvas) {
                PC.renderToCanvas = true;
                PC.initialFaceDetector(document.getElementById('player__preview_html5_api'))
            }
            let time = Player.currentTime()
            Player.controls(false)
        })


        Player.on('pause', () => {
            let time = Player.currentTime()
        })

    }


})()