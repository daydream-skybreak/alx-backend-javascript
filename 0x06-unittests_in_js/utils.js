Utils = {
    calculateNumber: (op, a, b) => {
        const operations = {
            'SUM': () => Math.round(a) + Math.round(b),
            'SUBTRACT': () => Math.round(a) - Math.round(b),
            'DIVIDE': () => {
                if (Math.round(b) !== 0) return Math.round(a) / Math.round(b)
                else return 'Error'
            },
        }
        return operations[op]()
    }
}

module.exports = Utils
