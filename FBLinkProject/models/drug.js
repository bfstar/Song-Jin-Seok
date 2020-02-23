class Drug {
    constructor(drugName,  drugAmount, drugId) {
        this.drugId = drugId;
        this.drugName = drugName;
        this.drugAmount = drugAmount;
    }
}

module.exports = {
    Drug,
};
