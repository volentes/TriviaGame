$(document).ready(function() {
//Before the game begins,hide the "done" button
$("#done").hide();
$("#counter").hide();
$("#numbercorrect").hide();
$("#numberincorrect").hide();
$(".tally").hide();
var isDone = false;
var num = 90;
var intervalId;


//Array of questions and answers
var content ={
  qanda:
    [{
      question: "Who hit number one in 2009 with Right Round?",
      answera: "Chris Brown",
      answerb: "Jay-Z",
      answerc:  "Bruno Mars",
      answerd:  "Flo Rida",
      correctans: "Flo Rida"
      },

      {
      question: "London born singer Miss Adkins is better known by what name?",
      answera: "Leona Lewis",
      answerb: "Adele",
      answerc: "Kim Wilde",
      answerd: "Laurie London",
      correctans: "Adele"
      //answer is b
      },
      {
      question: "Who rose to fame in 2008 with the release of the single I Kissed a Girl?",
      answera: "Katy Perry",
      answerb: "Lorde",
      answerc: "Banks",
      answerd: "Miley Cyrus",
      correctans: "Katy Perry"
      //answer is a
    },
      {
      question: "Sean John Combs is better known by what stage name?",
      answera: "Kanye West",
      answerb: "J Cole",
      answerc: "P Diddy",
      answerd: "Jay-Z",
      correctans: "P Diddy"
      //answer is c

    }]
}

//Timer count down function
function countDown () {
  num--;
  $("#counter").html("You have"+ " " + num + " " + "seconds remaining!");
  if (num === 0) {
    stopTimer();
    alert("Your time has expired!");
    if (!isDone) {
      isDone = true;
      checkAnswer();
    }
  }
}

//Timer stop function
function stopTimer() {
            clearInterval(intervalId);
}

//Game begins "on click" of start button
$("#start").click(function() {
//Hide the start button and instructions and show done button:
    $("#start" ).hide();
    $(".instructions" ).hide();
    $("#done").show();
//Display the "Countdown"
    $("#counter").show();
    intervalId = setInterval(countDown, 1000);

//Display the questions and answer options

  for (var i = 0; i < content.qanda.length; i++)
  {
    $("#question").append("<br><div>" + content.qanda[i].question + "</div>"
    + "<div><input type = 'radio' name = " + i + " value = " + "'" + content.qanda[i].answera + "'" + "> " + content.qanda[i].answera + "</div>"
    + "<div><input type = 'radio' name = " + i + " value = " + "'" + content.qanda[i].answerb + "'" + "> " + content.qanda[i].answerb + "</div>"
    + "<div><input type = 'radio' name = " + i + " value = " + "'" + content.qanda[i].answerc + "'" + "> " + content.qanda[i].answerc + "</div>"
    + "<div><input type = 'radio' name = " + i + " value = " + "'" + content.qanda[i].answerd + "'" + "> " + content.qanda[i].answerd + "</div><br>");
  }

  });

//Registering the user's selection
  $("#done").click(function() {
    stopTimer();
    if (!isDone) {
      isDone = true;
      checkAnswer();
    }
  });


    function checkAnswer(){
      var numcorrect = 0;
      var numincorrect = 0;
      var i = 0;
        $("input").each(function(index){
          // console.log($(this).val());
          if ($(this).is(':checked')) {
            i = parseInt($(this).attr('name'));
            if ($(this).val() === content.qanda[i].correctans){
              numcorrect++;
            }
            else {
              numincorrect++;
            }
          }
        });
          $("#numbercorrect").html("Number correct: " + numcorrect);
          $("#numberincorrect").html("Number incorrect " + numincorrect);
          $("#done").hide();
          $("#counter").hide();
          $("#question").hide();
          $(".tally").show();
          $("#numbercorrect").show();
          $("#numberincorrect").show();
    }



});
