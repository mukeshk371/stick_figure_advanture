/*var curScene = 0;

function changeScene(decision) {
    var message = "";

    if (curScene == 0) {
        curScene = 1;
        message = "Now Your journey begins on road.";
    } else if (curScene == 1) {
        if (decision == 1) {
            curScene = 2;
            message = "You have arrived at a house.";
        } else {
            curScene = 3;
            message = "You are standing on the bridge.";
        }
    } else if (curScene == 2) {
        if (decision == 1) {
            curScene = 4;
            message = "You see a witch inside the house.";
        } else {
            curScene = 5;
            message = "Sorry, a witch lives in the house and you just became part of her stew.";
        }
    } else if (curScene == 3) {
        if (decision == 1) {
            curScene = 6;
            message = "Sorry, a troll lives on the other side of the bridge and you just became his lunch.";
        } else {
            curScene = 7;
            message = "Your stare is interrupted by the arrival of a huge troll.";
        }
    } else if (curScene == 4) {
        if (decision == 1) {
            curScene = 8;
        } else {
            curScene = 5;
            message = "Sorry, you became part of the witch's stew.";
        }
    } else if (curScene == 5) {
        curScene = 0;
    } else if (curScene == 6) {
        curScene = 0;
    } else if (curScene == 7) {
        if (decision == 1) {
            curScene = 6;
            message = "Sorry, you became the troll's tasty lunch.";
        } else {
            curScene = 9;
        }
    } else if (curScene == 8) {

    } else if (curScene == 9) {

    }
    document.getElementById("sceneimg").src = "resources/images/scene" + curScene + ".jpg";
    alert(message);
}
*/


var currentScene = 0;

function changeScene(decision) {
	if(currentScene == 0) {
		currentScene = 1;
	} else if (currentScene == 1 || currentScene == 2 || currentScene == 3 || currentScene == 4) {
		var temp = currentScene;
		if (decision == 1) {
			currentScene = temp * 2;
		} else {
			currentScene = (temp * 2) + 1;
		}
	} else if (currentScene == 5 || currentScene == 6) {
		currentScene = 1;
	} else if (currentScene == 7) {
		if (decision == 1) {
			currentScene = 6;
		} else {
			currentScene = 9;
		}
	}
	document.getElementById("sceneimg").src = "resources/images/scene" + currentScene + ".jpg";
	alert(message[currentScene]);
}

var message = {
	"1": "Now Your journey begins on road.",
	"2": "You have arrived at a house.",
	"3": "You are standing on the bridge.",
	"4": "You see a witch inside the house.",
	"5": "Sorry, a witch lives in the house and you just became part of her stew.",
	"6": "Sorry, a troll lives on the other side of the bridge and you just became his lunch.",
	"7": "Your stare is interrupted by the arrival of a huge troll.",
	"8": "To Be Continued.",
	"9": "To Be Continued."
}