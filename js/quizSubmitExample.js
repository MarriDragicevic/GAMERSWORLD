//wait for DOMReady! using $(function(){});
$(function() {
  //when the quiz submit button is clicked, 
  //figure out which result to return using if statements!
  $(".quizBtn").click(function() {
    //find my quiz components, in case I need them later
    var thisQuizBtn = $(this);
    var thisQuiz = $(".quizBody");
    var thisQuizOptions = $(".quizOptions");

    //find all my quiz checkbox values using jQuery.prop()
    var firstCheckBox = $(".quizOptions ul li .option1").prop("checked");
    var secondCheckBox = $(".quizOptions ul li .option2").prop("checked");
    var thirdCheckBox = $(".quizOptions ul li .option3").prop("checked");
    var fourthCheckBox = $(".quizOptions ul li .option4").prop("checked");
    
    //my quiz result is an empty div we can append results to
    var quizResult = "<div/>";
        //must be a jQuery object if we want to use .append()
        quizResult = $(quizResult)

    //if first result is checked
    if (firstCheckBox) {
      //if the first checkbox was checked, 
      //create its result in an <h1> tag!
      var quizResultOne = "<h1>option1 result</h1>";
      quizResultOne = $(quizResultOne);

      //and make the result bright red
      $(quizResultOne).css(
        {
          "color": "red"
        }
      );

      //do even more stuff with my result

      //and add the result to our <div> that we will send back to .quizResultArea
      $(quizResult).append(quizResultOne);
    }

    //if second result is checked, only if 
    //thirdCheckBox is not(!) checked

    // && stands for "and" in programming logic
    // || stands for "or" in programming logic
    if (secondCheckBox && !thirdCheckBox) {
      //if the first checkbox was checked, create its result in an <h1> tag!
      var quizResultTwo = "<h1>option2 result</h1>";
      quizResultTwo = $(quizResultTwo);

      //and make the result bright red
      $(quizResultTwo).css(
        {
          "color": "red"
        }
      );

      //and add the result to our <div> that 
      //we will send back to .quizResultArea
      $(quizResult).append(quizResultTwo);
    }

    //if third result is checked, only if 
    //secondCheckBox is not(!) checked

    // && stands for "and" in programming logic
    // || stands for "or" in programming logic
    if (thirdCheckBox && !secondCheckBox) {
      //if the first checkbox was checked, create its result in an <h1> tag!
      var quizResultThree = "<h1>option3 result</h1>";
      quizResultThree = $(quizResultThree);

      //and make the result bright red
      $(quizResultThree).css(
        {
          "color": "red"
        }
      );

      //and add the result to our <div> that 
      //we will send back to .quizResultArea
      $(quizResult).append(quizResultThree);
    }

    //if second AND third result is checked

    // && stands for "and" in programming logic
    // || stands for "or" in programming logic
    if (secondCheckBox && thirdCheckBox) {
      //if the first checkbox was checked, 
      //create its result in an <h1> tag!
      var quizResultTwoAndThree = "<h1>option2&3 result</h1>";
      quizResultTwoAndThree = $(quizResultTwoAndThree);

      //and make the result bright red
      $(quizResultTwoAndThree).css(
        {
          "color": "blue"
        }
      );

      //and add the result to our <div> that we 
      //will send back to .quizResultArea
      $(quizResult).append(quizResultTwoAndThree);
    }

    //if fourth result is checked
    if (fourthCheckBox) {
      //if the first checkbox was checked, 
      //create its result in an <h1> tag!
      var quizResultFour = "<h1>option4 result</h1>";
      quizResultFour = $(quizResultFour);

      //and make the result bright red
      $(quizResultFour).css(
        {
          "color": "red"
        }
      );

      //and add the result to our <div> that we 
      //will send back to .quizResultArea
      $(quizResult).append(quizResultFour);
    }

    //add result to .quizResultArea using jQuery.html()
    //.html() REPLACES all html inside .quizResultArea
    $(".quizResultArea").html(quizResult);
  });
});









