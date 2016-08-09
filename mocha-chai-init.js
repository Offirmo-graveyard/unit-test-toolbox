"use strict";

const Mocha = require('mocha')
const chai = require('chai')
const sinon_chai = require('sinon-chai')
const chai_as_promised = require("chai-as-promised")
const chai_subset = require('chai-subset')


// expose chai.expect as a global variable
expect = chai.expect

chai.use(sinon_chai)
chai.use(chai_as_promised);
chai.use(chai_subset);

console.log('* Starting tests...')
