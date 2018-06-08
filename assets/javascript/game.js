$(document).ready(function () {

    // * There will be four crystals displayed as buttons on the page.
    var crystal1 = $('#crystal1'),
        crystal2 = $('#crystal2'),
        crystal3 = $('#crystal3'),
        crystal4 = $('#crystal4'),
        crystalRand1 = 0,
        crystalRand2 = 0,
        crystalRand3 = 0,
        crystalRand4 = 0,
        winCount = $('#winCount'),
        loseCount = $('#loseCount'),
        winCt = 0,
        loseCt = 0,
        winningScore = $('#winningScore'),
        totalScore = $('#totalScore'),
        winningSc = 0,
        totalSc = 0;

    function init() {
        // * When the game begins again, the player should see a new random number. 
        // * The random number shown at the start of the game should be between 19 - 120.
        winningSc = Math.floor(Math.random() * 101 + 19);
        // * The player will be shown a random number at the start of the game.
        winningScore.html(winningSc);

        // Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
        totalSc = 0;
        totalScore.html(totalSc);

        // * Each crystal should have a random hidden value between 1 - 12.
        crystalRand1 = Math.floor(Math.random() * 12 + 1);
        crystalRand2 = Math.floor(Math.random() * 12 + 1);
        crystalRand3 = Math.floor(Math.random() * 12 + 1);
        crystalRand4 = Math.floor(Math.random() * 12 + 1);

        // ******* SHOW ME THE ANSWER *******
        // crystal1.html(crystalRand1);
        // crystal2.html(crystalRand2);
        // crystal3.html(crystalRand3);
        // crystal4.html(crystalRand4);
    }

    init();




    // * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
    // * Your game will hide this amount until the player clicks a crystal.
    // * When they do click one, update the player's score counter.
    crystal1.on("click", function () {
        totalSc += crystalRand1;
        totalScore.html(totalSc);

        // dup 1
        // * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
        // * The game restarts whenever the player wins or loses.
        // * The player wins if their total score matches the random number from the beginning of the game.
        if (totalSc == winningSc) {
            alert("alert");
            winCt++;
            winCount.html(winCt);
            alert("Player won");
            init();
            // * The player loses if their score goes above the random number.
        } else if (totalSc > winningSc) {
            loseCt++;
            loseCount.html(loseCt);
            alert("Player lost");
            init();
        }
    });
    crystal2.on("click", function () {
        totalSc += crystalRand2;
        totalScore.html(totalSc);

        // dup 2
        // * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
        // * The game restarts whenever the player wins or loses.
        // * The player wins if their total score matches the random number from the beginning of the game.
        if (totalSc == winningSc) {
            alert("alert");
            winCt++;
            winCount.html(winCt);
            alert("Player won");
            init();
            // * The player loses if their score goes above the random number.
        } else if (totalSc > winningSc) {
            loseCt++;
            loseCount.html(loseCt);
            alert("Player lost");
            init();
        }
    });
    crystal3.on("click", function () {
        totalSc += crystalRand3;
        totalScore.html(totalSc);

        // dup 3
        // * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
        // * The game restarts whenever the player wins or loses.
        // * The player wins if their total score matches the random number from the beginning of the game.
        if (totalSc == winningSc) {
            alert("alert");
            winCt++;
            winCount.html(winCt);
            alert("Player won");
            init();
            // * The player loses if their score goes above the random number.
        } else if (totalSc > winningSc) {
            loseCt++;
            loseCount.html(loseCt);
            alert("Player lost");
            init();
        }
    });
    crystal4.on("click", function () {
        totalSc += crystalRand4;
        totalScore.html(totalSc);

        // dup 4
        // * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
        // * The game restarts whenever the player wins or loses.
        // * The player wins if their total score matches the random number from the beginning of the game.
        if (totalSc == winningSc) {
            winCt++;
            winCount.html(winCt);
            alert("Player won");
            init();
            // * The player loses if their score goes above the random number.
        } else if (totalSc > winningSc) {
            loseCt++;
            loseCount.html(loseCt);
            alert("Player lost");
            init();
        }
    });
});
