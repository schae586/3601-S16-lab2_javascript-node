// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.numChecker = function(int){
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

exports.calculateGPA = function(credit1, grade1, credit2, grade2, credit3, grade3){
    var gradeOne = gradeLetterConverter(grade1);
    var gradeTwo = gradeLetterConverter(grade2);
    var gradeThree = gradeLetterConverter(grade3);
    //return "Grade1 " + gradeOne + "Grade2 " + gradeTwo + "Grade3 " + gradeThree + "Credit1 " + credit1 + "Credit2 " + credit2 + "Credit3 " + credit3;
    return "Actual GPA " + (((gradeOne * parseInt(credit1)) + (gradeTwo * parseInt(credit2)) + (gradeThree * parseInt(credit3))) / (parseInt(credit1) + parseInt(credit2) + parseInt(credit3))).toFixed(2);

}
