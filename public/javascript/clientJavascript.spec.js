    it('this test should pass!', function(){
        expect(returnNotKittens()).toBe("Not Kittens!");
    });
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    ////this test should fail.
    it('this test should pass!', function(){
        expect(returnNotKittens()).toBe("Not Kittens!");
    });

    //Tests for GPA Calculator

    it('credits Are Numbers', function(){
        expect(returnNotKittens()).toBe("Not Kittens!");
    });

    it('gradeLetterConverterTest', function(){
        expect(gradeLetterConverter("A")).toEqual(4.00);
        expect(gradeLetterConverter("A-")).toEqual(3.67);
        expect(gradeLetterConverter("B+")).toEqual(3.33);
        expect(gradeLetterConverter("B")).toEqual(3.00);
        expect(gradeLetterConverter("B-")).toEqual(2.67);
        expect(gradeLetterConverter("C+")).toEqual(2.33);
        expect(gradeLetterConverter("C")).toEqual(2.00);
        expect(gradeLetterConverter("C-")).toEqual(1.67);
        expect(gradeLetterConverter("D+")).toEqual(1.33);
        expect(gradeLetterConverter("D")).toEqual(1.00);
        expect(gradeLetterConverter("D-")).toEqual(0.67);
        expect(gradeLetterConverter("F")).toEqual(0.00);
    });


    it('test GPA Calculator accuracy', function(){
        expect(calculateGPA(1, "A", 1, "A", 1, "A")).toBe("Actual GPA 4.00");
        expect(calculateGPA(1, "A-", 1, "A-", 1, "A-")).toBe("Actual GPA 3.67");
        expect(calculateGPA(1, "B+", 1, "B+", 1, "B+")).toBe("Actual GPA 3.33");
        expect(calculateGPA(1, "B", 1, "B", 1, "B")).toBe("Actual GPA 3.00");
        expect(calculateGPA(1, "B-", 1, "B-", 1, "B-")).toBe("Actual GPA 2.67");
        expect(calculateGPA(1, "C+", 1, "C+", 1, "C+")).toBe("Actual GPA 2.33");
        expect(calculateGPA(1, "C", 1, "C", 1, "C")).toBe("Actual GPA 2.00");
        expect(calculateGPA(1, "C-", 1, "C-", 1, "C-")).toBe("Actual GPA 1.67");
        expect(calculateGPA(1, "D+", 1, "D+", 1, "D+")).toBe("Actual GPA 1.33");
        expect(calculateGPA(1, "D", 1, "D", 1, "D")).toBe("Actual GPA 1.00");
        expect(calculateGPA(1, "D-", 1, "D-", 1, "D-")).toBe("Actual GPA 0.67");
        expect(calculateGPA(1, "F", 1, "F", 1, "F")).toBe("Actual GPA 0.00");
        //Testing a few random ones
        expect(calculateGPA(4, "B+", 5, "C", 2, "C+")).toBe("Actual GPA 2.53");
        expect(calculateGPA(2, "A", 2, "B", 4, "F")).toBe("Actual GPA 1.75");
        expect(calculateGPA(3, "A-", 3, "D-", 4, "C")).toBe("Actual GPA 2.12");
        expect(calculateGPA(4, "D", 1, "F", 7, "D+")).toBe("Actual GPA 1.09");
        expect(calculateGPA(2, "B+", 3, "C-", 1, "B-")).toBe("Actual GPA 2.40");
    });

});

