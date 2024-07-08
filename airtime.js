function enoughAirtime() {
    return {
        usage: '',
        airtime: 0,
        result: '',
        enoughAirtime(projectedUsage, airtimeAvailable) {
            const usageArray = projectedUsage.split(',');
            let totalCost = 0;
            for (const item of usageArray) {
                if (item.trim() === 'call') {
                    totalCost += 1.88;
                } else if (item.trim() === 'sms') {
                    totalCost += 0.75;
                } else if (item.trim() === 'data') {
                    totalCost += 12;
                }
            }
            const airtimeLeft = airtimeAvailable - totalCost;
            return airtimeLeft > 0 ? 'R' + airtimeLeft.toFixed(2) : 'R0.00';
        },
        calculateAirtime() {
            this.result = this.enoughAirtime(this.usage, parseFloat(this.airtime));
        }
    }
}