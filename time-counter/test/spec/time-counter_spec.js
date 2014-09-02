describe("TimeCounter", function() {

  describe("_getDateEnd", function() {
    it("when is given a valid date, returns that date", function() {
      var $element = document.createElement('time');
      $element.setAttribute('data-end', '2014-09-01-22-51-01');

      expect(_getDateEnd($element)).toEqual(new Date('2014', '08', '01', '22', '51', '01'));
    });

    it("when invalid date, returns today", function() {
      var $element = document.createElement('time');
      $element.setAttribute('data-end', '');

      expect(_getDateEnd($element)).toEqual(new Date());
    });
  });


  describe("_timePad", function() {
    it("when `0`, returns `00`", function() {
      expect(_timePad(0)).toEqual('00');
    });

    it("when `9`, returns `09`", function() {
      expect(_timePad(9)).toEqual('09');
    });

    it("when `11`, returns `11`", function() {
      expect(_timePad('11')).toEqual('11');
    });
  });


  describe("_timeLeft", function() {
    it("when `now` is equal to `end`, returns `Tempo esgotado`", function() {
      expect(_timeLeft(new Date(), new Date())).toEqual('Tempo esgotado!!!!');
    });
  });
});
