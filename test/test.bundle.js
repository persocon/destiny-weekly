import { expect } from 'chai';
import sinon from 'sinon';

global.expect = expect;
global.sinon = sinon;
global.apiUrl = 'http://reset.tkrp.net';

var context = require.context('.', true, /.+\.spec\.jsx?$/);
context.keys().forEach(context);
module.exports = context;
