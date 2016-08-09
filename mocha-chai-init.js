#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../../node_modules/.bin/ts-node "$0" "$@"

const Mocha = require('mocha')
const chai = require('chai')
const sinon_chai = require('sinon-chai')
const chai_as_promised = require("chai-as-promised")

// expose chai.expect as a global variable
expect = chai.expect

chai.use(sinon_chai)
chai.use(chai_as_promised);

console.log('* Starting tests...')
