window.addEventListener("load", function () {

    document.querySelector("#b1").addEventListener("click", function () { playSample(["assets/kick.mp3"]); });
    document.querySelector("#b2").addEventListener("click", function () { playSample("assets/hihat.mp3"); });
    document.querySelector("#b3").addEventListener("click", function () { playSample("assets/snare.mp3"); });

    document.querySelector("#b4").addEventListener("click", function () { playSample("assets/A.mp3"); });
    document.querySelector("#b5").addEventListener("click", function () { playSample("assets/C.mp3"); });
    document.querySelector("#b6").addEventListener("click", function () { playSample("assets/F.mp3"); });
    document.querySelector("#b7").addEventListener("click", function () { playSample("assets/G.mp3"); });

    document.querySelector("#b8").addEventListener("click", function () { playSample("assets/laugh-1.mp3"); });
    document.querySelector("#b9").addEventListener("click", function () { playSample("assets/laugh-2.mp3"); });
    document.querySelector("#playb").addEventListener("click", play);
});

function playSample(samples) {
    var sounds = new Audio(samples);
    sounds.play();
};

function play() {
    var time = setInterval(Beat, 250);
    var beat = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/laugh-2.mp3",];
    let i = 0;

    function Beat() {
        var order = new Audio(beat[i]);
        order.play();
        
        i += 1;

        if (i > beat.length) {
            i = 0;
        }
    };
};