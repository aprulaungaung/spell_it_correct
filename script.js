let fruitName = "";

let number = "";

let ufo = new Audio("audio/ufo.mp3");

let cheer = new Audio("audio/cheer.mp3");

let negative = new Audio("audio/negative.mp3");

let correct = $(".tickR");

let wrong = $(".tickW");

let keyTone = new Audio("audio/keyTone.mp3");

let body = document.getElementsByTagName("body")[0];

let width = body.clientWidth;

//  when the box is clicked , it will produce a random number and show a relevant picture

$(".dispenser").click(function() {

  number = Math.random() * 10;

  number = Math.floor(number) + 1;

  ufo.volume = 0.2;

  ufo.play();

//  switch statement is used to work accordingly to respective image.

  switch (number) {

    case 1:
      $(".fruit").css("visibility","hidden");

      $(".banana").css("visibility","visible");

    width < 500 ? moveFruitSS($(".banana")) : moveFruit($(".banana"));

      break;

    case 2:

  $(".fruit").css("visibility","hidden");

    $(".strawberry").css("visibility", "visible");

    //  for small screen size of user device ( less than 500 px), the relevant function, moveFruitSS($(".strawberry")), will work

    width < 500 ? moveFruitSS($(".strawberry")) :  moveFruit($(".strawberry"));

      break;

    case 3:

  $(".fruit").css("visibility","hidden");

    $(".grape").css("visibility", "visible");

    width < 500 ? moveFruitSS($(".grape")) :  moveFruit($(".grape"));

      break;

    case 4:

  $(".fruit").css("visibility","hidden");

    $(".pineapple").css("visibility", "visible");

    width < 500 ? moveFruitSS($(".pineapple")) :  moveFruit($(".pineapple"));

      break;

    case 5:

  $(".fruit").css("visibility","hidden");

    $(".watermelon").css("visibility", "visible");

    width < 500 ? moveFruitSS($(".watermelon")) :  moveFruit($(".watermelon"));

      break;

    case 6:

  $(".fruit").css("visibility","hidden");

    $(".avocado").css("visibility", "visible");

    width < 500 ? moveFruitSS($(".avocado")) :  moveFruit($(".avocado"));

      break;

    case 7:

  $(".fruit").css("visibility","hidden");

    $(".orange").css("visibility", "visible");

    width < 500 ? moveFruitSS($(".orange")) :  moveFruit($(".orange"));

      break;

    case 8:

  $(".fruit").css("visibility","hidden");

    $(".apple").css("visibility", "visible");

    width < 500 ? moveFruitSS($(".apple")) :  moveFruit($(".apple"));

      break;

    case 9:

  $(".fruit").css("visibility","hidden");

    $(".guava").css("visibility", "visible");

    width < 500 ? moveFruitSS($(".guava")) :  moveFruit($(".guava"));

      break;

    case 10:

  $(".fruit").css("visibility","hidden");

    $(".coconut").css("visibility", "visible");

    width < 500 ? moveFruitSS($(".coconut")) :  moveFruit($(".coconut"));

      break;

    default:

  }
})

// for users, to type the name of the fruit , a key pad is created and the words typed by user will be display

$(".alphabet").click(function() {

  keyTone.play();

  let innerText = $(this).text();
//  when user type the fruit's name by using key pad , the name will be append to <p> tag.

  $("p").append("<span>" + innerText + "</span>");

  let answer = $("span").text();

  $(".enter").click(function() {

    fruitName = $("p").text();

    switch (number) {

      case 1:

        if (fruitName === "BANANA") {

          $("h1").remove();

          // when answer is correct, it will say "congratulation" and if not "Try again"

          $(".letter-box").prepend("<h1>Congratulation</h1>");

        correct.css("display", "inline-block");

          cheer.play();

        } else {

          $("h1").remove();

          $(".letter-box").prepend("<h1>Try Again</h1>");

          wrong.css("display", "inline-block");

          negative.play();

        }

        break;

      case 2:

        if (fruitName === "STRAWBERRY") {

          $("h1").remove();

          $(".letter-box").prepend("<h1>Congratulation</h1>");

         correct.css("display", "inline-block");

            cheer.play();

        } else {

          $("h1").remove();

          $(".letter-box").prepend("<h1>Try Again</h1>");

            wrong.css("display", "inline-block");

            negative.play();
        }

        break;

      case 3:

        if (fruitName === "GRAPE") {

          $("h1").remove();

          $(".letter-box").prepend("<h1>Congratulation</h1>");

          correct.css("display", "inline-block");

            cheer.play();

        } else {

          $("h1").remove();

          $(".letter-box").prepend("<h1>Try Again</h1>");

            wrong.css("display", "inline-block");

            negative.play();
        }
        break;

      case 4:
        if (fruitName === "PINEAPPLE") {

          $("h1").remove();

          $(".letter-box").prepend("<h1>Congratulation</h1>");

          correct.css("display", "inline-block");

            cheer.play();

        } else {

          $("h1").remove();

        $(".letter-box").prepend("<h1>Try Again</h1>");

          wrong.css("display", "inline-block");

          negative.play();

        }

        break;

      case 5:

        if (fruitName === "WATERMELON") {

          $("h1").remove();

          $(".letter-box").prepend("<h1>Congratulation</h1>");

          correct.css("display", "inline-block");

            cheer.play();

        } else {

          $("h1").remove();

        $(".letter-box").prepend("<h1>Try Again</h1>");


        wrong.css("display", "inline-block");

          negative.play();

        }

        break;

      case 6:

        if (fruitName === "AVOCADO") {

          $("h1").remove();

        $(".letter-box").prepend("<h1>Congratulation</h1>");

        correct.css("display", "inline-block");

          cheer.play();

        } else {

          $("h1").remove();

          $(".letter-box").prepend("<h1>Try Again</h1>");

          wrong.css("display","inline-block");

            negative.play();
        }

        break;

      case 7:

        if (fruitName === "ORANGE") {

          $("h1").remove();

          $(".letter-box").prepend("<h1>Congratulation</h1>");

          correct.css("display", "inline-block");

            cheer.play();

        } else {

          $("h1").remove();

        $(".letter-box").prepend("<h1>Try Again</h1>");

          wrong.css("display","inline-block");

          negative.play();
        }

        break;

      case 8:

        if (fruitName === "APPLE") {

          $("h1").remove();

          $(".letter-box").prepend("<h1>Congratulation</h1>");

          correct.css("display", "inline-block");

            cheer.play();

        } else {

          $("h1").remove();

          $(".letter-box").prepend("<h1>Try Again</h1>");

          wrong.css("display", "inline-block");

            negative.play();
        }

        break;

      case 9:

        if (fruitName === "GUAVA") {

          $("h1").remove();

        $(".letter-box").prepend("<h1>Congratulation</h1>");

        correct.css("display", "inline-block");

          cheer.play();

        } else {

          $("h1").remove();

          $(".letter-box").prepend("<h1>Try Again</h1>");

          wrong.css("display", "inline-block");

            negative.play();
        }

        break;

      case 10:

        if (fruitName === "COCONUT") {

          $("h1").remove();

        $(".letter-box").prepend("<h1>Congratulation</h1>");

        correct.css("display", "inline-block");

          cheer.play();

        } else {

          $("h1").remove();

          $(".letter-box").prepend("<h1>Try Again</h1>");

          wrong.css("display", "inline-block");

            negative.play();
        }
        break;

      default:

    }
  })

// when 'back key ' is clicked the letters typed will be deleted and right or wrong icon will be disappeared

  $(".back").click(function() {

    $("p span:last-child").remove();

    $("h1").remove();

    correct.css("display", "none");

    wrong.css("display", "none");

  });
});

//  when 'reset key ' is clicked , the page will be reloaded.

$(".reset").click(function(){

location.reload();

});

// this function will animate the images.(for large screen > 500 px)

function moveFruit(element){

  element.css('transform','translate(0,-100px) rotate(360deg) scale(4)')

         .css('transition-duration','5s')

         .animate({marginLeft:'350px'},1000)

         .animate({marginTop:'150px'},1000);

}

// this function will animate the images.(for small screen < 500 px)

function moveFruitSS(element){

  element.css('transform','translate(0,-100px) rotate(360deg) scale(4)')

         .css('transition-duration','5s')

         .animate({marginLeft:'150px'},1000)
         
         .animate({marginTop:'130px'},1000);

}
