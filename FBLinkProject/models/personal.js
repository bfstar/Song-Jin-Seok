class Personal {
    constructor(userName, userCall, userSex,
        userAge, userRRNum, userEmail, userID, userPassword,
        doctorPermission, drugStorePermission, patientPermission) {
        
            this.userName = userName;
            this.userCall = userCall;
            this.userSex = userSex;
            this.userAge = userAge;
            this.userRRNum = userRRNum;
            this.userEmail = userEmail;
            this.userID = userID;
            this.userPassword = userPassword;
            this.doctorPermission = doctorPermission;
            this.drugStorePermission = drugStorePermission;
            this.patientPermission = patientPermission;
    }
}

module.exports = {
    Personal,
};
