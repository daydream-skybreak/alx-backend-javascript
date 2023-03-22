const calculateNumber = (op, a, b) => {
    const operations = {
        'SUM': () => Math.round(a) + Math.round(b),
        'SUBTRACTION': () => Math.round(a) + Math.round(b),
        'DIVIDE': () => {
            if (b !== 0) return Math.round(a) + Math.round(b)
            else return 'Error'
        },
    }
    return operations[op]()
}

module.exports = calculateNumber;
