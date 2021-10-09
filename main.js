Webcam.set({

    width: 350,

    height: 300,

    image_format: 'png',

    png_quality: 90

});

console.log("ml5 version : ", ml5.version);

Webcam.attach("#camera");

function capture() {

    Webcam.snap(function (cam_pic) {

        document.getElementById("result").innerHTML = '<img id="taken_pic" src="' + cam_pic + '">';


    });


}

