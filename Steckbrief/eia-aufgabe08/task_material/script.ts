window.addEventListener("load", function () {

    var sounds : string[] = ["assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3", "assets/snare.mp3"];
    var order : string[] = [sounds[1], sounds[2], sounds[3], sounds[4]];
    var rngbeat : string[] = [sounds[5], sounds[6], sounds[7], sounds[8]];
    var x : number = 0, recIndex : number = 0, recordIndex : number = 0;
    
    var time : number = setInterval(rythmus, 250);

    function playSample(sounds : string) {
        var time = setInterval(sounds, 250);
        var sound = new Audio(sounds);
        sound.play();
    }

    function delBeat() : void {
        order.length = 0;
    }

    var beat : HTMLAudioElement = new Audio(order[x]);
    var pb : HTMLElement = document.querySelector("#playb");

    function rythmus() : void {
        if (x >= order.length)
            x = 0;
        if (pb.getAttribute("class") == "fas fa-pause-circle") {
            beat = new Audio(order[x]);
            playSample(order[x]);
            x += 1;
            }
    }

    var recorder : HTMLElement = document.querySelector("#recb");

    function beatLayout() : void {
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

    var rec : string[] = [];

    function record() : void {
        order = rec;
        recorder.style.color = "red";
    }

    function calc(recordIndex : number) : boolean {
        return recordIndex % 2 == 0;
    }

    function recBeat() : void {
        if (calc(recordIndex) == true) {
            recordIndex++;
            record();
        }
        else {
            recorder.style.color = "white";
        }
    }

    var max : number = rngbeat.length - 1;

    function rng(max : number): number {
        max = Math.floor(max);
        return Math.floor(Math.random() * (max + 1));
    }

    function remixBeat() : void {
        for (var i : number = 0; i <= rngbeat.length; i++) {
            recorder.style.color = "white";
            order[i] = rngbeat[rng(max)];
            }
    }

    document.querySelector(".blue").addEventListener("click", function () : void { playSample("assets/A.mp3"); rec[recIndex] = "assets/A.mp3"; recIndex++; record(); });
    document.querySelector(".blue2").addEventListener("click", function () : void { playSample("assets/G.mp3"); rec[recIndex] = "assets/G.mp3"; recIndex++; record(); });
    document.querySelector(".blue3").addEventListener("click", function () : void { playSample("assets/F.mp3"); rec[recIndex] = "assets/F.mp3"; recIndex++; record(); });

    document.querySelector(".pink").addEventListener("click", function () : void { playSample("assets/G.mp3"); rec[recIndex] = "assets/G.mp3"; recIndex++; record(); });
    document.querySelector(".pink2").addEventListener("click", function () : void { playSample("assets/hihat.mp3"); rec[recIndex] = "assets/hihat.mp3"; recIndex++; record(); });
    document.querySelector(".pink3").addEventListener("click", function () : void { playSample("assets/kick.mp3"); rec[recIndex] = "assets/kick.mp3"; recIndex++; record(); });
    document.querySelector(".pink4").addEventListener("click", function () : void { playSample("assets/laugh-1.mp3"); rec[recIndex] = "assets/laugh-1.mp3"; recIndex++; record(); });

    document.querySelector(".orange").addEventListener("click", function () : void { playSample("assets/laugh-2.mp3"); rec[recIndex] = "assets/laugh-2.mp3"; recIndex++; record(); });
    document.querySelector(".orange2").addEventListener("click", function () : void { playSample("assets/snare.mp3"); rec[recIndex] = "assets/snare.mp3"; recIndex++; record(); });

    document.querySelector("#playb").addEventListener("click", function () : void { beatLayout(); });
    document.querySelector("#delb").addEventListener("click", function () : void { delBeat(); });
    document.querySelector("#rngb").addEventListener("click", function () : void { remixBeat(); });
    document.querySelector("#recb").addEventListener("click", function () : void { recBeat(); });
});