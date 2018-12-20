var game = {
    question: ["1", "2", "3"],
    rAns: ["1", "2", "3"],
    wAns: [["1a", "1b", "1c"], ["2a", "2b", "2c"], ["3a", "3b", "3c"]]

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
    } 
};


///
