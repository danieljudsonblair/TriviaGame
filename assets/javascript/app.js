var game = {
    question: ["Who is Led Zeppelin's drummer?",
        "What is the elevation of Lake Titicaca?",
        'What island is Balki from in the show "Perfect Strangers"?'],
    rAns: ["John Bonham", "12,507 ft", "Mypos"],
    wAns: [["Keith Moon", "John Bonham", "Bill Ward", "Ginger Baker"],
    ["8,634 ft", "11,573 ft", "12,507 ft", "13,334 ft"],
    ["Tahiti", "Mypos", "Hawaii", "Maui"]]

}







//  The stop function
function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}




















var intervalId;
var qsec = 10;
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
    firstPage = false;
}
document.onkeyup = function () {
    $(".first").remove();
    $(".question").show();
    qnum++;
    console.log(qnum);
    if (qnum > game.question.length) {
        qnum = game.question.length;
    }

    $("#pg").text(qnum);

    $(".q").text(game.question[qnum - 1]);

    for (i = 0; i < game.wAns[[qnum - 1]].length; i++) {
        $(".wa" + i).text(game.wAns[qnum - 1][i]);
    }
    qrun();

}
function qrun() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    /// condition if time runs out
    qsec--;
    $("#gametimer").html("Time Remaining: " + qsec + " Seconds");
    if (qsec === 0) {
        $(".q").text("Time's Up!! The Correct Answer is " + game.rAns[qnum - 1]);
        stop();
        iScore++;
        qnum++
        //////////////////////////////////////////////////////////////////////////////////////////////////    
    }
    // condition if correct answer chosen
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
