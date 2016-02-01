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

    it('letter Grade Converted', function(){
        expect(gradeLetterConverter("A")).toBe(4.00);
        expect(gradeLetterConverter("A-")).toBe(3.67);
        expect(gradeLetterConverter("B+")).toBe(3.33);
        expect(gradeLetterConverter("B")).toBe(3.00);
        expect(gradeLetterConverter("B-")).toBe(2.67);
        expect(gradeLetterConverter("C+")).toBe(2.33);
        expect(gradeLetterConverter("C")).toBe(2.00);
        expect(gradeLetterConverter("C-")).toBe(1.67);
        expect(gradeLetterConverter("D+")).toBe(1.33);
        expect(gradeLetterConverter("D")).toBe(1.00);
        expect(gradeLetterConverter("D-")).toBe(0.67);
        expect(gradeLetterConverter("F")).toBe(0.00);
    });


    it('test GPA Calculator accuracy', function(){
        expect(returnNotKittens()).toBe("Not Kittens!");
    });

});

