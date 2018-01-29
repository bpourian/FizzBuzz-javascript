describe('FizzBuzz', function() {
    var fizzBuzz;

    beforeEach(function() {
    fizzBuzz = new FizzBuzz();
    });

    it('if number divisble by 3, return fizz', function() {
      expect(fizzBuzz(3)).toEqual('Fizz');
    });

});
