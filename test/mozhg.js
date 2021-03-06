var expect = require('expect.js');
var mozhg = require('../lib/mozhg');

var validChangesetRegex = /^[0-9a-z]{12,40}$/;

// TODO: implement pending tests
describe('mozhg', function () {
  this.timeout(15000); // These suites touch the network.

  describe('#isRevisionValid()', function () {
    var validChangeset = '20d90d9a12ce';
    it('should return true when the revision is valid', function (done) {
      mozhg.isRevisionValid(validChangeset, function (err, isValid) {
        expect(isValid).to.be(true);
        done(err);
      });
    });

    it('should return false when the revision is not valid', function (done) {
      var invalidChangeset = 'aaa'; // unlikely to ever be a changeset
      mozhg.isRevisionValid(invalidChangeset, function (err, isValid) {
        expect(isValid).to.be(false);
        done(err);
      });
    });

    it('should return an error when the source is not available');

    it('should return an error when the source is not in the expected format');
  });

  describe('#isRevisionSetValid()', function () {
    var validStart = '20d90d9a12ce';
    var validEnd = 'd8db1845736b';

    it('should return true when the revision set is in nightly', function (done) {
      mozhg.isRevisionSetValid(validStart, validEnd, function (err, isValid) {
        expect(isValid).to.be(true);
        done(err);
      });
    });

    it('should return false when the revision set is not in nightly', function (done) {
      mozhg.isRevisionSetValid(validEnd, validStart, function (err, isValid) {
        expect(isValid).to.be(false);
        done(err);
      });
    });

    it('should return false (quickly) when one revision set is invalid', function (done) {
      var invalidRevision = 'aaa'; // unlikley to ever be a revision.
      mozhg.isRevisionSetValid(invalidRevision, validStart, function (err, isValid) {
        expect(isValid).to.be(false);
        done(err);
      });
    });

    it('should return an error when the source is not available');

    it('should return an error when the source is not in the expected format');
  });

  describe('#getLatestNightlyChangesetId()', function () {
    it('should return a valid changeset when called', function (done) {
      mozhg.getLatestNightlyChangesetId(function (err, changesetId) {
        expect(changesetId).to.be.ok();
        expect(changesetId).to.match(validChangesetRegex)
        done(err);
      });
    });

    it('should return an error when the source is not available');

    it('should return an error when the source is not in the expected format');
  });

});
