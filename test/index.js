var Testwords = require("../testwords.js");
var testwords = new Testwords();

var chai = require("chai"); 
var expect = chai.expect;

describe('Testwords Results', function() {  
  
  describe("#isSATword('convivial')", function() {
    it('should return true', function() {
      expect(testwords.isSATword('vindication')).to.be.equal(true) 
    }); 
  });
  
  describe("#isTOEFLword('convivial')", function() {
    it('should return false', function() {
      expect(testwords.isTOEFLword('vindication')).to.equal(false)
    });
  });
  
  describe("#isTestword('convivial')", function() {
    it('should return true', function() {
      expect(testwords.isTestword('vindication')).to.equal(true)
    });
  });
  
});
 
describe('Testwords Objects', function() {  
  describe("#testwords.sat ", function() {
    it('should be an object', function() {
      expect(testwords.sat).to.be.an('object')
    });
  });
  describe("#testwords.sat ", function() {
    it('should have a length of 597', function() {
      expect(Object.keys(testwords.sat).length).to.equal(597)
    });
  });  
  describe("#testwords.sat ", function() {
    it('should have a length of 518', function() {
      expect(Object.keys(testwords.toefl).length).to.equal(518)
    });
  }); 
});

  
