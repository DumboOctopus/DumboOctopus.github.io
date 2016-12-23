var moveToNext = false;


function makeQuestion(problem, outputLabel, userAns, checkBtn) {
    var num = Math.ceil(50 * Math.random());
    if (typeof(Storage) !== undefined) {
        sessionStorage.numToSquare = num;
        problem.html(num + "<sup>2</sup>");
        outputLabel.html( "");
        userAns.html( "");
        checkBtn.html( "Check");
    } else {
        problem.innerHTML = "Sorry your broswer does not support local storage\nidk look up how to fix that";
    }
}

$(function () {
    var outputLabel = $("#outputLabel");
    var checkBtn = $("#checkBtn");
    var problem = $("#problem");
    var userAns = $("#userAns");
    makeQuestion(problem, outputLabel, userAns, checkBtn);
    checkBtn.click(function () {
        if(moveToNext)
        {
            makeQuestion(problem, outputLabel, userAns, checkBtn);
            moveToNext = false;
        } else {
            //BROKEN :( just that one line:
            var userAnsAsNumber = Number(document.getElementById("userAns").innerHTML);

            if(userAnsAsNumber === sessionStorage.numToSquare*sessionStorage.numToSquare)
            {
                //outputLabel.addClass("text-success");
                outputLabel.html( "Correct, click for next Question");
                checkBtn.html( "Next Question");
                moveToNext = true;
            } else
            {
                outputLabel.html( "Incorrect, click for to try again");

            }
        }
    });

    $("#showAnsBtn").click(function () {
        outputLabel.html("Answer is "+(sessionStorage.numToSquare*sessionStorage.numToSquare));
        checkBtn.html( "Next Question");
        moveToNext = true;
    });
});

