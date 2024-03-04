/*write a combination that includes three calculations that equals 10, 40, 39
name my combination comboOne, comboTwo, comboThree
  comboOne = division
  comboTwo = addition
  comboThree = difference
create a variable for the message: "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
*/


//The answer to the combination will be composed of multiple types of sums (addition, subtraction and division). Not in this order.
const comboOne = 50 / 5;
const comboTwo = 25 + 15;
const comboThree = 69 - 30;

const secretCombo = " " + comboOne + ", " + comboTwo + ", " + comboThree;

//Message to the user
const secretMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";

alert(secretMessage + secretCombo);

//I want to get input from the user so that they can enter the combination somewhere

function comboValue()
{
  const getVal = prompt("Enter combination for important vault: ", "Please enter combination");
    if (getVal === 10, 40, 39)
    {
      console.log("Success! Here is $10 off because you entered: " + getVal);
    }
}


