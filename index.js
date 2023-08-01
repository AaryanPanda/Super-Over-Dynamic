const sButton = document.getElementById("strike");
const rButton = document.getElementById("reset");
const team1Score = document.getElementById("team1-score");
const team1Wickets = document.getElementById("team1-wickets");
const team2Score = document.getElementById("team2-score");
const team2Wickets = document.getElementById("team2-wickets");

const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

let numOfBalls = 0
let numOfWickets1 = 0
let numOfWickets2 = 0
let scoreOfteam1 = 0
let scoreOfteam2 = 0
function updateValue(type, team, score) {
    if (type === "wicket") {
        const teamScoreElement = document.getElementById(`team${team}-wickets`)
        teamScoreElement.innerHTML = score
    }
    else {
        const teamScoreElement = document.getElementById(`team${team}-score`)
        teamScoreElement.innerHTML = score
    }
}

sButton.addEventListener("click", handleSButton)
function handleSButton() {
    strikeAudio.pause();
    strikeAudio.currentTime = 0;
    strikeAudio.play();

    var randomNum = Math.floor(Math.random() * 7) + 1

    var ballElement = document.getElementsByClassName("balls")
    var paraelement = document.createElement("p")
    if (numOfBalls < 12) {
        if (randomNum == 7) {
            paraelement.innerText = "W"
            if (numOfBalls < 6) {
                numOfWickets1 += 1
                updateValue("wicket", 1, numOfWickets1)
            }
            else {
                numOfWickets2 += 1
                updateValue("wicket", 2, numOfWickets2)
            }
        }
        else {
            paraelement.innerText = randomNum
            if (numOfBalls < 6) {
                scoreOfteam1 += randomNum
                updateValue("score", 1, scoreOfteam1)
            }
            else {
                scoreOfteam2 += randomNum
                updateValue("score", 2, scoreOfteam2)
            }
        }

        ballElement[numOfBalls].appendChild(paraelement)
    }

    numOfBalls += 1

    // if (numOfWickets1 === 2) {
    //     numOfBalls = 6
    // }
    // else if (numOfWickets2 === 2) {
    //     numOfBalls = 12
    // }

    if (numOfBalls >= 12) {
        if (team1Score > team2Score) {
            alert("Team 1 Wins!")
        }
        else {
            alert("Team 2 Wins!")
        }
    }


}

rButton.addEventListener("click", handleRButton)
function handleRButton() {
    window.location.reload()
}
