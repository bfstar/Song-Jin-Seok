class Prescription{
    constructor(prescriptionID,patientDisease,patientState,organ,
        medicineNotice){

        this.prescriptionID = prescriptionID;
        this.patientDisease = patientDisease;
        this.patientState = patientState;
        this.organ = organ;
        this.medicineNotice = medicineNotice;

    }
}

module.exports = {
    Prescription,
};
