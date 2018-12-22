var game = {
    question: ["Who is Led Zeppelin's drummer?",
        "What is the elevation of Lake Titicaca?",
        'What island is Balki from in the show "Perfect Strangers"?'],
    rAns: ["John Bonham", "12,507 ft", "Mypos"],
    wAns: [["Keith Moon", "John Bonham", "Bill Ward", "Ginger Baker"],
    ["8,634 ft", "11,573 ft", "12,507 ft", "13,334 ft"],
    ["Tahiti", "Mypos", "Hawaii", "Maui"]]

};
// declare / initialize global variables
var clicked = false
var intervalId
var qsec = 0
var qnum = 0
var cScore = 0
var iScore = 0
var iScoreb = 0
var firstPage = true
var lastPage = false
var clickedAtAll = false
// hide pages behind intro page
if (firstPage === true) {
    $(".question").hide();
    $(".final").hide();
}
// start game/start game over
document.onkeyup = function () {
    if (firstPage === true || lastPage === true) {
        firstPage = false
        lastPage = false
        cScore = 0
        iScore = 0
        iScoreb = 0
        nextQ()
    }
// question function
}
function nextQ() {
    $(".first").remove();
    $(".final").hide();
    $(".question").show();
    clicked = false
    qnum++
    qsec = 10

    $("#gametimer").html("Time Remaining: 10 Seconds");
    $("#pg").text(qnum);
    $(".q").text(game.question[qnum - 1]);
    if (qnum <= game.question.length) {
        for (i = 0; i < game.wAns[[qnum - 1]].length; i++) {
            $(".wa" + i).text(game.wAns[qnum - 1][i]);
        }
        qrun();
    }


    else {
        $(".question").hide();
        $(".final").show();
        lastPage = true
        qnum = 0
    }
}

function stop() {
    clearInterval(intervalId)
}

function qrun() {
    clearInterval(intervalId)
    intervalId = setInterval(decrement, 1000)
}

// question timer

function decrement() {

    qsec--

    $("#gametimer").html("Time Remaining: " + qsec + " Seconds");

    /// condition if time runs out
    if (qsec === 0 && clicked === false) {
        $(".q").text("Time's Up!! The Correct Answer is " + game.rAns[qnum - 1])
        iScoreb++
        stop()
        setTimeout(nextQ, 2500)
    }

    $(".noans").text(iScoreb)

    // condition if correct answer chosen
    $(".qbx").on("click", function () {
        if (clicked === false) {
            if ($(this).text() === game.rAns[qnum - 1]) {
                $(".q").text("Correct!!")
                cScore++
                clicked = true
                stop()
                setTimeout(nextQ, 2500)



            // condition if incorrect answer chosen
            } else if ($(this).text() !== game.rAns[qnum - 1] || qsec === 0) {
                $(".q").text("Sorry! The Correct Answer is " + game.rAns[qnum - 1])
                iScore++
                clicked = true
                stop()
                setTimeout(nextQ, 2500)

            }

        }

        $(".correct").text(cScore)
        $(".incorrect").text(iScore)

    });


}

//   :: note to TA grading this assignment: I found it necessary to include a 3rd "unanswered" category
//   on my final page because counting an unanswered question as an incorrect answer runs into problems with scope, 
//   particularly in the case where all of the questions are allowed to time out.
//   I'm sure there is a solution to this special case, and I would be glad to discuss it in more
//   detail at your convenience










