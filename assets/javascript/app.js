var game = {
    question: ["Who is Led Zeppelin's drummer?", "2", "3"],
    rAns: ["John Bonham", "2", "3", "4"],
    wAns: [["Keith Moon", "Bill Ward", "Ginger Baker"], ["2a", "2b", "2c"], ["3a", "3b", "3c"]]

}

// set up a variable to increment/keep track of our "pages"
var page = 0;
// set up a keyup function to advance from our opening page
var firstPage = true;
if (firstPage === true) {
    $(".question").hide();
    $(".rans").hide();
    $(".wans").hide();
    $(".final").hide();
    document.onkeyup = function () {
        firstPage = false;
        page++;
        $(".first").remove();
        $(".question").show();
        $("#pg").text(page);
        $(".gametimer").text("Time Remaining: " + "Seconds");
        $(".q").text(game.question[page - 1]);
    }
};


///
