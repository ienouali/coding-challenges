describe('sum-all-numbers-in-a-range', () => {
  it('should sumAll return a number', () => {
    expect(sumAll([5, 10])).toEqual(45);
    expect(sumAll([10, 5])).toEqual(45);
    expect(sumAll([1, 4])).toEqual(10);
  });
});
