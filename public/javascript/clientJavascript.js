// Our javascript for the CLIENT side.
// This will run on the browser.

/**
 * Takes no arguments, and creates a javascript alert in the client's browser.
 */
var sendAlert = function(){
    alert("THIS IS AN ALERT!");
};

/**
 * Used for getting the length of a string. For example only, you won't likely need to use something like this...
 * DIFFERENT FROM THE stringLength function in the server side javascript!!!
 *
 * @param str  - the string to have its length returned
 * @returns {*}  - an integer, the length of the string
 */
var testStringLength = function(str){
    return str.length;
};


/**
 * Takes no arguments, returns the string "kittens"
 *
 * @returns {string}  - returns "kittens"
 */
var returnKittens = function(){
    return "kittens";
};

var returnNotKittens = function(){
    return "Not Kittens!";
};

var numChecker = function(int){
    return "this " + int + " is a number";
}


var gradeLetterConverter = function(str){
    if (str == "A") {
        return 4.00;
    } else if(str == "A-"){
        return 3.67;
    } else if(str == "B+") {
        return 3.33;
    } else if(str == "B") {
        return 3.00;
    } else if(str == "B-") {
        return 2.67;
    } else if(str == "C+") {
        return 2.33;
    } else if(str == "C") {
        return 2.00;
    } else if(str == "C-") {
        return 1.67;
    } else if(str == "D+") {
        return 1.33;
    } else if(str == "D") {
        return 1.00;
    } else if(str == "D-") {
        return 0.67;
    } else if(str == "F") {
        return 0.00;
    } else {
        return "Error, invalid grade entry";
    }

}

var calculateGPA = function(credit1, grade1, credit2, grade2, credit3, grade3){
    var gradeOne = gradeLetterConverter(grade1);
    var gradeTwo = gradeLetterConverter(grade2);
    var gradeThree = gradeLetterConverter(grade3);
    //return "Grade1 " + gradeOne + "Grade2 " + gradeTwo + "Grade3 " + gradeThree + "Credit1 " + credit1 + "Credit2 " + credit2 + "Credit3 " + credit3;
    return "Your GPA is " + (((gradeOne * parseInt(credit1)) + (gradeTwo * parseInt(credit2)) + (gradeThree * parseInt(credit3))) / (parseInt(credit1) + parseInt(credit2) + parseInt(credit3))).toFixed(2);

}

