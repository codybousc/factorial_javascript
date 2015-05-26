describe('factorial', function() {
  it("will equal 1 with a factorial of 0", function() {
    expect(factorial(0)).to.equal(1);
  });

  it("will equal 6 with a factorial of 3", function() {
    expect(factorial(3)).to.equal(6);
  });

  it("will equal 24 with a factorial of 4", function() {
    expect(factorial(4)).to.equal(24);
  });
});
