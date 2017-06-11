 

 var color = ["blue", "cyan", "green", "pink", "gray", "brown", "orange", "red", "black", "yellow"];
     color = color.sort();
     var target_index = Math.random() * 10;
     target_index = Math.floor(target_index);
     var target = color[target_index];
     //document.write(target);
     //console.log(target);
     var check = false;
     var guess = 0;
     
     
function do_game()
     {
         while (!check)
         {
            guess_input = prompt("I am thinking of one of these colors:" + "\n" + "black,blue,brown,cyan,gray,green,orange,pink,red,yellow \n What color am I thinking of? ");
            guess++;
            check = check_guess();
        }
            document.body.style.backgroundColor = guess_input;
            alert("It took you " + guess + " guesses to finish the game! \n you can see the color in the background");
     }
function check_guess()
     {
        if (present(guess_input))
        {
            alert("I do not recognize that color! \n Please try again.");
            return false;
        }
        if (target > guess_input) {
            alert("Sorry,your guess is not correct \n Hint:Your input is alphabetically lower than mine! \n Please try again.");
            return false;
        }
        if (guess_input > target) {
            alert("Sorry,your guess is not correct \n Hint:Your input is alphabetically higher than mine! \n Please try again.");
            return false;
        } 
        else 
        {
            alert("Congratulations! You have guessed the color!\n");
            return true;
        }
     }

function present(guess_input) 
     {
        for (i = 0; i < color.length; i++)
        {
            if (color[i] == guess_input) 
                return false;
        }
            return true;
     }
