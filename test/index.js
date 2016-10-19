'use strict'

const titly = require('..')

describe('titly', function () {
  it('get the first \\n if is present', function () {
    titly('hello world\n').should.be.equal('hello world')
  })

  it('get the truncate version of a text', function () {
    titly('hello world this is a long message version truncated')
    .should.be.equal('hello world this is a long message version')
  })
})
