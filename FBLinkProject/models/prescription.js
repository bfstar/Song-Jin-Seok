class Prescription{
    constructor(id,patientName,patientSex,patientAge,
        prescriptionNum,date){

        this.id = id;
        this.patientName = patientName;
        this.patientSex = patientSex;
        this.patientAge = patientAge;
        this.prescriptionNum = prescriptionNum;
        this.date = date;

    }
}

module.exports = {
    Prescription,
};
