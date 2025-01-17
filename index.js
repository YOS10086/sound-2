var video;

function setup() {

}

function playvideo() {
    $('button').click(function() {
        if( video.paused ) {
            video.play();
        }else {
            video.pause();
        }
    });
};

playvideo