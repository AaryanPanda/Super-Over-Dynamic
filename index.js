const sButton = document.getElementById("strike");
const rButton = document.getElementById("reset");
const team1Score = document.getElementById("team1-score");
const team1Wickets = document.getElementById("team1-wickets");
const team2Score = document.getElementById("team2-score");
const team2Wickets = document.getElementById("team2-wickets");

const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

let numberOfBalls=0
let numOfWickets1 = 0
let numOfWickets2 = 0
let runsOfteam1 = 0
let runsOfteam2 = 0

// we are updating the wickets here

function updateWickets(team, wickets) {
     const teamWicketsElement = document.getElementById(`team${team}-wickets`)
     teamWicketsElement.innerHTML = wickets
}

//we are updating the runs here
function updateRuns(team, runs) {
    const teamRunsElement = document.getElementById(`team${team}-runs`)
    teamRunsElement.innerHTML = runs
}
let flag1 = true
let flag2 = true

sButton.addEventListener("click", handleSButton)
function handleSButton() {
    strikeAudio.pause();
    strikeAudio.currentTime = 0;
    strikeAudio.play();

    var randomNum = Math.floor(Math.random() * 7) + 1

    var ballElement = document.getElementsByClassName("balls")
    var paraelement = document.createElement("p")

    if (numberOfBalls < 12) {
        if (randomNum == 7) {
            paraelement.innerText = "W"
            if (numberOfBalls < 6) {
                numOfWickets1 += 1
                updateWickets( 1, numOfWickets1)
            }
            else {
                numOfWickets2 += 1
                updateWickets( 2, numOfWickets2)
            }
        }
        else  {
            paraelement.innerText = randomNum
            if (numberOfBalls < 6) {
                runsOfteam1 += randomNum
                updateRuns( 1, runsOfteam1)
            }
            else {
                runsOfteam2 += randomNum
                updateRuns( 2, runsOfteam2)
            }
        }

        ballElement[numberOfBalls].appendChild(paraelement)
    }

    numberOfBalls += 1

    if (numOfWickets1 === 2 && flag1==true) {
        flag1 = false
        numberOfBalls = 6
    }
    else if (numOfWickets2 === 2 && flag2==true) {
        flag2 = false
        numberOfBalls = 12
    }

    if (numberOfBalls > 12) {
        if (runsOfteam1 > runsOfteam2) {
            alert("Team 1 Wins!")
        }
        else if (runsOfteam1 < runsOfteam2) {
            alert("Team 2 Wins!")
        }
        else if (runsOfteam1 === runsOfteam2) {
            alert("Match Draw!")
        }
    }


}

rButton.addEventListener("click", handleRButton)
function handleRButton() {
    window.location.reload()
}
