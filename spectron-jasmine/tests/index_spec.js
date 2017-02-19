
describe('sample test', function () {

  describe('passing test', function () {

    it('should sum an array of numbers', function () {
      const sum = [1, 2, 3, 4, 5].reduce((x, y) => x + y);
      expect(sum).toBe((5 * 6) / 2);
    });
  });

  describe('failing test', function () {
    it('should fail', function () {
      expect(true).toBe(false);
    })
  });
})