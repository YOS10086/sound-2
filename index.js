$(function() {
    var video = $('video')[0];
    $('button').click(function() {
        if( video.paused ) {
            video.play();
        }
        else {
            video.pause();
        }
    });
});