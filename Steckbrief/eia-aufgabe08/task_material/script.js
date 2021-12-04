window.addEventListener("load", function () {
    var sounds = ["assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3", "assets/snare.mp3"];
    var order = [sounds[1], sounds[2], sounds[3], sounds[4]];
    var rngbeat = [sounds[5], sounds[6], sounds[7], sounds[8]];
    var x = 0, recIndex = 0, recordIndex = 0;
    var time = setInterval(rythmus, 250);
    function playSample(sounds) {
        var time = setInterval(sounds, 250);
        var sound = new Audio(sounds);
        sound.play();
    }
    function delBeat() {
        order.length = 0;
    }
    var beat = new Audio(order[x]);
    var pb = document.querySelector("#playb");
    function rythmus() {
        if (x >= order.length)
            x = 0;
        if (pb.getAttribute("class") == "fas fa-pause-circle") {
            beat = new Audio(order[x]);
            playSample(order[x]);
            x += 1;
        }
    }
    var recorder = document.querySelector("#recb");
    function beatLayout() {
        if (pb.getAttribute("class") == "fas fa-pause-circle") {
            pb.setAttribute("class", "fas fa-play-circle");
            rythmus();
        }
        else {
            pb.setAttribute("class", "fas fa-pause-circle");
            recorder.style.color = "white";
            if (pb.getAttribute("class") == "fas fa-play-circle") {
                beat.pause();
            }
        }
    }
    var rec = [];
    function record() {
        order = rec;
        recorder.style.color = "red";
    }
    function calc(recordIndex) {
        return recordIndex % 2 == 0;
    }
    function recBeat() {
        if (calc(recordIndex) == true) {
            recordIndex++;
            record();
        }
        else {
            recorder.style.color = "white";
        }
    }
    var max = rngbeat.length - 1;
    function rng(max) {
        max = Math.floor(max);
        return Math.floor(Math.random() * (max + 1));
    }
    function remixBeat() {
        for (var i = 0; i <= rngbeat.length; i++) {
            recorder.style.color = "white";
            order[i] = rngbeat[rng(max)];
        }
    }
    document.querySelector(".blue").addEventListener("click", function () { playSample("assets/A.mp3"); rec[recIndex] = "assets/A.mp3"; recIndex++; record(); });
    document.querySelector(".blue2").addEventListener("click", function () { playSample("assets/G.mp3"); rec[recIndex] = "assets/G.mp3"; recIndex++; record(); });
    document.querySelector(".blue3").addEventListener("click", function () { playSample("assets/F.mp3"); rec[recIndex] = "assets/F.mp3"; recIndex++; record(); });
    document.querySelector(".pink").addEventListener("click", function () { playSample("assets/G.mp3"); rec[recIndex] = "assets/G.mp3"; recIndex++; record(); });
    document.querySelector(".pink2").addEventListener("click", function () { playSample("assets/hihat.mp3"); rec[recIndex] = "assets/hihat.mp3"; recIndex++; record(); });
    document.querySelector(".pink3").addEventListener("click", function () { playSample("assets/kick.mp3"); rec[recIndex] = "assets/kick.mp3"; recIndex++; record(); });
    document.querySelector(".pink4").addEventListener("click", function () { playSample("assets/laugh-1.mp3"); rec[recIndex] = "assets/laugh-1.mp3"; recIndex++; record(); });
    document.querySelector(".orange").addEventListener("click", function () { playSample("assets/laugh-2.mp3"); rec[recIndex] = "assets/laugh-2.mp3"; recIndex++; record(); });
    document.querySelector(".orange2").addEventListener("click", function () { playSample("assets/snare.mp3"); rec[recIndex] = "assets/snare.mp3"; recIndex++; record(); });
    document.querySelector("#playb").addEventListener("click", function () { beatLayout(); });
    document.querySelector("#delb").addEventListener("click", function () { delBeat(); });
    document.querySelector("#rngb").addEventListener("click", function () { remixBeat(); });
    document.querySelector("#recb").addEventListener("click", function () { recBeat(); });
});
//# sourceMappingURL=script.js.map