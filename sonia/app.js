(() => {
    const width = 320;    // We will scale the photo width to this
    const height = 0;     // This will be computed based on the input stream

    const streaming = false;

    let video = null;
    let canvas = null;
    let photo = null;
    let startbutton = null;
})
function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('startbutton');
}



