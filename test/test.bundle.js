import { expect } from 'chai';
import sinon from 'sinon';

global.expect = expect;
global.sinon = sinon;

var context = require.context('.', true, /.+\.spec\.jsx?$/);
context.keys().forEach(context);
module.exports = context;
