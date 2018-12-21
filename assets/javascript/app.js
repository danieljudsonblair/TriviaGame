var game = {
    question: ["Who is Led Zeppelin's drummer?",
        "What is the elevation of Lake Titicaca?",
        'What island is Balki from in the show "Perfect Strangers"?'],
    rAns: ["John Bonham", "12,507 ft", "Mypos"],
    wAns: [["Keith Moon", "John Bonham", "Bill Ward", "Ginger Baker"],
    ["8,634 ft", "11,573 ft", "12,507 ft", "13,334 ft"],
    ["Tahiti", "Mypos", "Hawaii", "Maui"]]

}

// set up a variable to increment/keep track of our "pages"
// var page = 0;
var qnum = 0;
var cScore = 0;
var iScore = 0;
// set up a keyup function to advance from our opening page
var firstPage = true;
if (firstPage === true) {
    // hide all pages to come after the opening page
    $(".question").hide();
    $(".rans").hide();
    $(".wans").hide();
    $(".final").hide();
}
    document.onkeyup = function () {
 
        qnum++;
        $(".first").remove();
        $(".question").show();
        if (qnum > game.question.length) {
            qnum = game.question.length;
        }
        $("#pg").text(qnum);
        $(".gametimer").text("Time Remaining: " + "Seconds");
        $(".q").text(game.question[qnum - 1]);

        for (i = 0; i < game.wAns[[qnum - 1]].length; i++) {
            $(".wa" + i).text(game.wAns[qnum - 1][i]);
        }

        $(".qbx").on("click", function () {
            if ($(this).text() === game.rAns[qnum - 1]) {
                $(".q").text("Correct!!");
                cScore++;
            } else if ($(this).text() !== game.rAns[qnum - 1]) {
                $(".q").text("Sorry! The Correct Answer is " + game.rAns[qnum - 1]);
                iScore++;
            }

        });

     
    }



///
