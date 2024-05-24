// playlist = {
//     'w': './sounds/crash.mp3',
//     'a': './sounds/kick-bass.mp3',
//     's': './sounds/snare.mp3',
//     'd': './sounds/tom-1.mp3',
//     'j': './sounds/tom-2.mp3',
//     'k': './sounds/tom-3.mp3',
//     'l': './sounds/tom-4.mp3'
// }



// in this section i know about how to use a element selector by for loop...get element length , event listenr that responds to click



// function odd1(playlist) {
//     var audio = new Audio('');
//     audio.play(); 
// }

// for(var i=0; i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", odd1
//     );
// }


// switch statement

// function odd1(playlist) {
//     var audio = new Audio('');
//     audio.play();
// }

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){


        var buttoninnerhtml= this.innerHTML;


        switch (buttoninnerhtml) {
            case "w": var audio1 = new Audio('./sounds/crash.mp3');
                audio1.play();
                
                break;

            case "a": var audio2 = new Audio('./sounds/kick-bass.mp3');
                audio2.play();
                break; 


            case "s": var audio3 = new Audio('./sounds/snare.mp3');
                audio3.play();
                break;

            case "d": var audio4 = new Audio('./sounds/tom-1.mp3');
                audio4.play();
                break;
            case "j": var audio5 = new Audio('./sounds/tom-2.mp3');
                audio5.play();
                break;
            case "k": var audio6 = new Audio('./sounds/tom-3.mp3');
                audio6.play();
                break;

            case "l": var audio7 = new Audio('./sounds/tom-4.mp3');
                audio7.play();
                break;
                



        
            default: console.log("wrong button ")
                break;
        }
    });
}
