describe('FizzBuzz', function() {
    var fizzBuzz;

    beforeEach(function() {
    fizzBuzz = new FizzBuzz();
    });

    it('if number divisble by 3, return fizz', function() {
      expect(fizzBuzz(3)).toEqual('Fizz');
    });

    it('if number divisble by 5, return buzz', function() {
      expect(fizzBuzz(5)).toEqual('Buzz');
    });

    it('if passed 7, will return 7', function() {
      expect(fizzBuzz(7)).toEqual(7);
    });

    it('if passed 15, will return FizzBuzz', function() {
      expect(fizzBuzz(15)).toEqual('FizzBuzz');
    });

});
