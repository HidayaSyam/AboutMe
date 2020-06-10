"use strict";

var userName = prompt('Enter Your name please');
var myName = 'ahmad alhrthani';
var myAge = 33;
var myGender = 'male';
var myFavColor = 'red';
var myEducationDegree = 'master';
//var myRandomNumber = 150;
var myRandomNumber = Math.floor(Math.random() * (200 - 100)) + 100;
var myBelovedPlaces = ['vienna', 'gaza', 'cairo', 'amman', 'usa', 'uk'];

console.log('myRandomNumber', myRandomNumber);




var name;
var age;
var gender;
var favColor;
var educationDegree;
var randomNumber;
var belovedPlaces;

var nameValid = false;
var ageValid = false;
var genderValid = false;
var favColorValid = false;
var educationDegreeValid = false;
var randomNumberValid = false;
var belovedPlacesValid = false;



var correctAnswersCount = 0;

var nameAnswer = false;
var ageAnswer = false;
var genderAnswer = false;
var favColorAnswer = false;
var educationDegreeAnswer = false;
var randomNumberAnswer = false;
var belovedPlacesAnswer = false;

function Fivequesation() {
    while (!nameValid) {
        name = prompt('My name is Ahmad Alhrthani', 'Yes, Y, No or N').toLocaleLowerCase();
        if (name == 'yes' || name == 'y' || name == 'no' || name == 'n') {
            nameValid = true;
        }
    }

    if (name == 'yes' || name == 'y') {
        correctAnswersCount++;
        nameAnswer = true;
    } else {
        alert('Sory, You should remeber my name, I am Ahmad Alhrthani');
    }

    while (!ageValid) {
        age = prompt('My Age is 22', 'Yes, Y, No or N').toLocaleLowerCase();
        if (age == 'yes' || age == 'y' || age == 'no' || age == 'n') {
            ageValid = true;
        }
    }

    if (age == 'no' || age == 'n') {
        correctAnswersCount++;
        ageAnswer = true;
    } else {
        alert('Sory, You should remeber my age, I am 33');
    }

    while (!genderValid) {
        gender = prompt('My Gender is Male', 'Yes, Y, No or N').toLocaleLowerCase();
        if (gender == 'yes' || gender == 'y' || gender == 'no' || gender == 'n') {
            genderValid = true;
        }
    }

    if (gender == 'yes' || gender == 'y') {
        correctAnswersCount++;
        genderAnswer = true;
    } else {
        alert('Sory, You should remeber my gender, I am Male');
    }

    while (!favColorValid) {
        favColor = prompt('My favourite color is Blue', 'Yes, Y, No or N').toLocaleLowerCase();
        if (favColor == 'yes' || favColor == 'y' || favColor == 'no' || favColor == 'n') {
            favColorValid = true;
        }
    }

    if (favColor == 'no' || favColor == 'n') {
        correctAnswersCount++;
        favColorAnswer = true;
    } else {
        alert('Sory, You should remeber my Fvourite color, It is Red');
    }



    while (!educationDegreeValid) {
        educationDegree = prompt('My education grade is Master', 'Yes, Y, No or N').toLocaleLowerCase();
        if (educationDegree == 'yes' || educationDegree == 'y' || educationDegree == 'no' || educationDegree == 'n') {
            educationDegreeValid = true;
        }
    }


    if (educationDegree == 'yes' || educationDegree == 'y') {
        correctAnswersCount++;
        educationDegreeAnswer = true;
    } else {
        alert('Sory, You should remeber my Grade, I am a master degree');
    }

}

Fivequesation();

var randomNumberAttempt = 0;
function GuessGame() {
    while (!randomNumberValid && randomNumberAttempt < 4) {
        randomNumber = prompt('Chose number Between 100 and 200', 'for example: ' + myRandomNumber);
        randomNumberAttempt++;
        if (randomNumber > 200 || randomNumber < 100) {
            alert('out of range');

        } else {
            if (myRandomNumber == randomNumber) {
                randomNumberValid = true;
                correctAnswersCount++;
                randomNumberAnswer = true;


            }
            else if (randomNumber > myRandomNumber + 10) {
                alert('you entered too high number');
            } else if (randomNumber < myRandomNumber - 10) {
                alert('you entered too low number');
            }
        }


        if (randomNumberAttempt == 4) {
            alert('You have exhausted four attempts, the right answer is: ' + myRandomNumber);
        }
    }

}
GuessGame();
var belovedPlacesAttempt = 0;

function GuessGametwo(){
    
    while (!belovedPlacesValid && belovedPlacesAttempt < 6) {
        belovedPlaces = prompt('Guess one of my beloved places').toLocaleLowerCase();

        for (var i = 0; i < myBelovedPlaces.length; i++) {
            if (myBelovedPlaces[i] == belovedPlaces) {
                //alert('You got it');
                belovedPlacesValid = true;
                correctAnswersCount++;
                belovedPlacesAnswer = true;
            }
            //break;        
        }
        if (belovedPlacesAnswer) {
            alert('You got it');
        } else {
            alert('Wrong Answer');
        }

        // var wrongAnswersCounter=0;
        // for (var j = 0; j < myBelovedPlaces.length; j++) {
        //     if (myBelovedPlaces[i] != belovedPlaces) {
        //         wrongAnswersCounter++;
        //        }
        //        if(wrongAnswersCounter==6){
        //         alert('Wrong Answer');
        //        }
        // }

        belovedPlacesAttempt++;
        if (belovedPlacesAttempt == 6) {
            alert('You have exhausted six attempts, the right answer is: ' + myBelovedPlaces);
        }

    }
}
GuessGametwo();
// if (educationDegree == 'yes' || educationDegree == 'y') {
//     correctAnswersCount++;
//     educationDegreeAnswer = true;
// } else {
//     alert('Sory, You should remeber my Grade, I am a master degree');
// }





document.getElementById('myName').innerHTML = 'My Name is: ' + myName;
document.getElementById('myAge').innerHTML = 'My Age is: ' + myAge;
document.getElementById('myGender').innerHTML = 'My Gender is: ' + myGender;
document.getElementById('myEducationGrade').innerHTML = 'My Grade is: ' + myEducationDegree;
document.getElementById('myFavColor').innerHTML = 'My Favourite color is: ' + myFavColor;

document.getElementById('correctAnswers').innerHTML = 'Number of correct answers:' + correctAnswersCount;

if (name == 'yes' || name == 'y') {
    document.getElementById('myName').style.color = 'green';
}

if (age == 'no' || age == 'n') {
    document.getElementById('myAge').style.color = 'green';
}

if (gender == 'yes' || gender == 'y') {
    document.getElementById('myGender').style.color = 'green';
}

if (favColor == 'no' || favColor == 'n') {
    document.getElementById('myFavColor').style.color = 'green';
}

if (educationDegree == 'yes' || educationDegree == 'y') {
    document.getElementById('myEducationGrade').style.color = 'green';
    myEducationGrade
}

// console.log('User answer for name: ' + nameAnswer);
// console.log('User answer for age: ' + ageAnswer);
// console.log('User answer for education grade : ' + genderAnswer);
// console.log('User answer for favourite color: ' + favColorAnswer);
// console.log('User answer for gender: ' + educationDegreeAnswer);

alert('Wellcome ' + userName + ', You answer ' + correctAnswersCount + ' correctly out of 7');






