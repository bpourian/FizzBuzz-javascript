describe('FizzBuzz', function() {
    // var fizzBuzz;

    // beforeEach(function() {
    // fizzBuzz = new FizzBuzz();
    // });

    it('if number divisble by 3, return fizz', function() {
      expect(FizzBuzz(3)).toEqual('fizz');
    });

    it('if number divisble by 5, return buzz', function() {
      expect(FizzBuzz(5)).toEqual('buzz');
    });

    it('if passed 7, will return 7', function() {
      expect(FizzBuzz(7)).toEqual(7);
    });

    it('if passed 15, will return FizzBuzz', function() {
      expect(FizzBuzz(15)).toEqual('fizzbuzz');
    });

});
