const Utils = require('./utils')
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    let result = Utils.calculateNumber('SUM', totalAmount, totalShipping)
    console.log(`the total is: ${result}`)
}

module.exports = sendPaymentRequestToApi
