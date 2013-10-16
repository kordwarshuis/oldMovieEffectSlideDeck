/*
 * Copyright 2013 Kor Dwarshuis <kor@dwarshuis.com>
 * Released under the MIT license.
 */

(function createAudioElement(args) { // background sound
    "use strict";
    var fragment = document.createDocumentFragment();
    var audio = fragment.appendChild(document.createElement('audio'));
    audio.setAttribute("loop", true);
    var source = (document.createElement('source'));
    source.setAttribute("src", args.path + ".mp3");
    source.setAttribute("type", "audio/mpeg");
    var source2 = (document.createElement('source'));
    source2.setAttribute("src", args.path + ".ogg");
    source2.setAttribute("type", "audio/ogg");
    audio.appendChild(source);
    audio.appendChild(source2);
    document.getElementsByTagName('body').item(0).appendChild(fragment);
    audio.volume = 0.5;
    audio.play();
}({
    path: "sound/16997__incarnadine__modulated-radio-static-modified"
}));



(function(args) {
    "use strict";
    var allSlides = document.querySelectorAll(args.element);
    var i = allSlides.length-1;
    var keepLastSlideVisisble;
    args.keepLastSlideVisisble ? keepLastSlideVisisble = 0 : keepLastSlideVisisble = -1;

    setTimeout(k, args.pause);
    function k(){
        if (i > keepLastSlideVisisble) {
            allSlides[i].style.display = "none";
            i--;
            setTimeout(k, args.pause);
        } else {
            document.body.className = ""; // stop animation
        }
    }
})(config);
