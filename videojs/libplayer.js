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
                canvas.style.zIndex = 2;

                PC.setCurrentTime(0)
                await window.createFaceDetector(player, { onIndex: onIndex, onSecondIndex: onSecondIndex }, canvas)

            
                if (loader) {
                    loader.style.display = "none"
                }


                Player.muted(false);
                PC.setCurrentTime(1)
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
            let time = Player.currentTime()
            // if(time > 1){
            //     if (initialData.faceDetector && !PC.renderToCanvas) {
            //         PC.renderToCanvas = true;
            //         PC.initialFaceDetector(Player.children_[0])
            //     }
            // }
            Player.controls(false)
        })

        Player.on('timeupdate', async () => {
            let time = Player.currentTime()
            console.log(time)
            if(time > 0){
                if (initialData.faceDetector && !PC.renderToCanvas) {
                    PC.renderToCanvas = true;
                    PC.initialFaceDetector(Player.children_[0])
                }
            }
        })

        Player.on('pause', () => {
            let time = Player.currentTime()
        })

    }


})()