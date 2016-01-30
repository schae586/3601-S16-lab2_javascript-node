// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.numChecker = function(int){
    return "this " + int + " is a number"
}


exports.gradeLetterConverter = function(str){
    if (str == "A") {
        return 4.00 % 1;
    } else if(str == "A-"){
        return 3.67 % 1;
    } else if(str == "B+") {
        return 3.33 % 1;
    } else if(str == "B") {
        return 3.00 % 1;
    } else if(str == "B-") {
        return 2.67 % 1;
    } else if(str == "C+") {
        return 2.33 % 1;
    } else if(str == "C") {
        return 2.00 % 1;
    } else if(str == "C-") {
        return 1.67 % 1;
    } else if(str == "D+") {
        return 1.33 % 1;
    } else if(str == "D") {
        return 1.00 % 1;
    } else if(str == "D-") {
        return 0.67 % 1;
    } else if(str == "F") {
        return 0.00 % 1;
    } else {
        return "Error, invalid grade entry";
    }

}