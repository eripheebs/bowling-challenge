describe ("Game", function() {

  beforeEach(function(){
    game = new Game();
  })

  it("should start with a score of 0", function(){
    expect(game.score).toEqual(0)
  })

})
