$(document).ready(function () {

    // * There will be four crystals displayed as buttons on the page.
    var crystalRand1 = 0,
        crystalRand2 = 0,
        crystalRand3 = 0,
        crystalRand4 = 0,
        winCt = 0,
        loseCt = 0,
        winningSc = 0,
        totalSc = 0;

    function init() {
        // * When the game begins again, the player should see a new random number. 
        // * The random number shown at the start of the game should be between 19 - 120.
        winningSc = Math.floor(Math.random() * 101 + 19);
        // * The player will be shown a random number at the start of the game.
        $('#winningScore').html(winningSc);

        // Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
        totalSc = 0;
        $('#totalScore').html(totalSc);

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
    $('#gem1').on("click", function () {
        totalSc += crystalRand1;
        $('#totalScore').html(totalSc);
        play();
    });
    $('#gem2').on("click", function () {
        totalSc += crystalRand2;
        $('#totalScore').html(totalSc);
        play();
    });
    $('#gem3').on("click", function () {
        totalSc += crystalRand3;
        $('#totalScore').html(totalSc);
        play();
    });
    $('#gem4').on("click", function () {
        totalSc += crystalRand4;
        $('#totalScore').html(totalSc);
        play();
    });
    
    // crystal click motion
    $('.crystal').on('mousedown', function (){
        $(this).css("transform", "translate(0, 1px)");
        $(this).css("border", "2px solid lightgray");
    });
    $('.crystal').on('mouseup', function (){
        $(this).css("transform", "translate(0, -1px)");
        $(this).css("border", "none");

    });

    function play() {
        // * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
        // * The game restarts whenever the player wins or loses.
        // * The player wins if their total score matches the random number from the beginning of the game.
        if (totalSc == winningSc) {
            winCt++;
            $('#winCount').html(winCt);
            alert("Player won");
            init();
            // * The player loses if their score goes above the random number.
        } else if (totalSc > winningSc) {
            loseCt++;
            $('#loseCount').html(loseCt);
            alert("Player lost");
            init();
        }
    }


});
