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
                this.videoPlayingFromButton = false;
                this.loader = true;
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
                Player.currentTime(0)
                await window.createFaceDetector(player, { onIndex: onIndex, onSecondIndex: onSecondIndex }, canvas)


                setTimeout(() => {

                    Player.muted(false);
                    Player.currentTime(0)

                    if (loader) {
                        loader.style.display = "none"
                    }

                }, 100)
            }


            async initialFaceDetectorWebcam(player) {
                await player.play()
                if (!this.loader) {
                    this.loader = true;
                    let loader = false;
                    let loaderWebcam = false;

                    if (initialData.loader) {
                        loader = document.getElementById(initialData.loader)
                        loader.style.display = "flex"
                    }
                    if (initialData.loaderWebcam) {
                        loaderWebcam = document.getElementById(initialData.loaderWebcam)
                        loaderWebcam.style.display = "flex"
                    }
                }

                Player.muted(true);
                function onIndex(index) {
                    if (initialData.faceDetectorPlayPauseWebcam) {
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

                const canvas = document.getElementById(initialData.canvasWebcamElementId)
                canvas.style.zIndex = 2;
                Player.currentTime(0)
                await window.createFaceDetector(player, { onIndex: onIndex, onSecondIndex: onSecondIndex }, canvas)


                setTimeout(() => {

                    Player.muted(false);
                    Player.currentTime(0)

                    if (PC.loader) {
                        const loader = document.getElementById(initialData.loader)
                        const loaderWebcam = document.getElementById(initialData.loaderWebcam)
                        loader.style.display = "none"
                        loaderWebcam.style.display = "none"
                    }

                }, 100)
                return true
            }


            async streamFromWebcam() {
                this.loader = true;
                let loader = false;
                let loaderWebcam = false;

                if (initialData.loader) {
                    loader = document.getElementById(initialData.loader)
                    loader.style.display = "flex"
                }
                if (initialData.loaderWebcam) {
                    loaderWebcam = document.getElementById(initialData.loaderWebcam)
                    loaderWebcam.style.display = "flex"
                }

                let mediaStream;
                const video = document.getElementById(initialData.webcamVideoElementId)


                if (navigator.mediaDevices.getUserMedia) {
                    navigator.mediaDevices.getUserMedia({ video: true }).then(async function (stream) {
                        video.srcObject = stream;
                        mediaStream = stream;
                        // await video.play();
                        return true
                    }).catch(function (error) {
                        console.error('Error accessing the webcam:', error);
                    });
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

            // if (initialData.faceDetector && !PC.renderToCanvas) {
            //     PC.renderToCanvas = true;
            //     PC.initialFaceDetector(document.getElementById('player__preview'))
            // }


            if (initialData.faceDetectorWebcam && !PC.videoPlayingFromButton) {
                PC.videoPlayingFromButton = true
                await PC.streamFromWebcam()
                await PC.initialFaceDetectorWebcam(document.getElementById(initialData.webcamVideoElementId))
            }

            let time = Player.currentTime()
            Player.controls(false)
        })


        Player.on('pause', () => {
            // PC.videoPlaying = false
            let time = Player.currentTime()
        })

    }


})()