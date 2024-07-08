function transportFee() {
    return {
        shift: 'morning',
        result: '',
        transportFee(shift) {
            if (shift === 'morning') {
                return 'R20';
            } else if (shift === 'afternoon') {
                return 'R10';
            } else {
                return 'Free';
            }
        },
        calculateFee() {
            this.result = `The transport fee for the ${this.shift} shift is: ${this.transportFee(this.shift)}`;
        }
    }
}