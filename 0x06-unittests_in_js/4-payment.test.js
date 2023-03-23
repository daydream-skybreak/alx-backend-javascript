const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
        const consl = sinon.spy(console);
        const dummy = sinon.stub(Utils, 'calculateNumber');

        dummy.returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
        expect(dummy.callCount).to.be.equal(1);
        expect(consl.log.calledWith('The total is: 10')).to.be.true;
        expect(consl.log.callCount).to.be.equal(1);
        dummy.restore();
        consl.log.restore();
    });
});