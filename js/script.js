var userName = prompt('Enter Your name please');
var myName = 'ahmad alhrthani';
var myAge = 33;
var myGender = 'male';
var myFavColor = 'red';
var myEducationDegree = 'master';



var name;
var age;
var gender;
var favColor;
var educationDegree;

var nameValid = false;

var ageValid = false;
var genderValid = false;
var favColorValid = false;
var educationDegreeValid = false;


// var educationDegreeValid = false;

// educationDegree
// var genderChar;
// var quantityValid = false;
// var quantity = '';

var correctAnswersCount = 0

var nameAnswer = false;
var ageAnswer = false;
var genderAnswer = false;
var favColorAnswer = false;
var educationDegreeAnswer = false;


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






// if (name == 'yes' || name == 'y' ) {
//     correctAnswersCount++;
//     nameAnswer=true;
// }else{
//     alert('Sory, You should remeber my name, I am Ahmad Alhrthani');
// }

// if (age == 'no' || age == 'n') {
//     correctAnswersCount++;
//     ageAnswer=true;}else{
//         alert('Sory, You should remeber my age, I am 33');

//     }

// if (gender == 'yes' || gender == 'y' ) {
//     correctAnswersCount++;
//     genderAnswer=true;}else{
//         alert('Sory, You should remeber my gender, I am Male');

//     }

// if ( favColor == 'no' || favColor == 'n') {
//     correctAnswersCount++;
//     favColorAnswer=true;}else{
//         alert('Sory, You should remeber my Fvourite color, It is Red');

//     }

//     if (educationDegree == 'yes' || educationDegree == 'y') {
//         correctAnswersCount++;

//         educationDegreeAnswer = true;
//     }else{
//         alert('Sory, You should remeber my Grade, I am a master degree');

//     }


document.getElementById('myName').innerHTML = 'My Name is: ' + myName;
document.getElementById('myAge').innerHTML = 'My Age is: ' + myAge;
document.getElementById('myGender').innerHTML = 'My Gender is: ' + myGender;
document.getElementById('myEducationGrade').innerHTML = 'My Grade is: ' + myEducationDegree;
document.getElementById('myFavColor').innerHTML = 'My Favourite color is: ' + myFavColor;


document.getElementById('correctAnswers').innerHTML = 'Number of correct answers:' + correctAnswersCount;

// document.getElementById('name').innerHTML ='You Entered: '+ name;
// document.getElementById('age').innerHTML ='You Entered: '+ age;
// document.getElementById('gender').innerHTML = 'You Entered: '+gender;
// document.getElementById('educationGrade').innerHTML = 'You Entered: '+educationDegree;
// document.getElementById('favColor').innerHTML = 'You Entered: '+favColor;


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

console.log('You answer ' + correctAnswersCount + ' correctly')



// console.log('User answer for name: ' + nameAnswer);
// console.log('User answer for age: ' + ageAnswer);
// console.log('User answer for education grade : ' + genderAnswer);
// console.log('User answer for favourite color: ' + favColorAnswer);
// console.log('User answer for gender: ' + educationDegreeAnswer);




alert('Wellcome ' + userName + 'You answer ' + correctAnswersCount + ' correctly');






