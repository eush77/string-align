'use strict';

var align = require('..');


it('should convert data to string', function () {
  align(1, 1).should.equal('1');
  align(true, 4).should.equal('true');
});


it('should align center', function () {
  align('foo', 5, 'center').should.equal(' foo ');
  align('foo', 6, 'center').should.equal(' foo  ');
});


it('should align left', function () {
  align('foo', 5, 'left').should.equal('foo  ');
});


it('should align right', function () {
  align('foo', 5, 'right').should.equal('  foo');
});


it('should accept custom placeholder', function () {
  align(7, 3, 'right', 0).should.equal('007');
});


it('should accept options object', function () {
  align('f', {
    width: 3,
    alignment: 'left',
    placeholder: 'o'
  }).should.equal('foo');
});


it('should align center by default', function () {
  align('foo', 6).should.equal(' foo  ');
  align('foo', 6, null, '_').should.equal('_foo__');
  align('foo', { width: 6 }).should.equal(' foo  ');
});
