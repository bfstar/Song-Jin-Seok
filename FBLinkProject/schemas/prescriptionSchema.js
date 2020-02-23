const EntitySchema = require('typeorm').EntitySchema;
const Prescription = require('../models/prescription').Prescription;

module.exports = new EntitySchema({
    name: 'prescription', //처방전
    target: Prescription,
    columns: {
        id: { // ID
            primary: true,
            type: 'bigint',
            nullable: false,
            generated: false,
        },
        patientName: { // 환자이름
            type: 'varchar',
            length: 20,
            nullable: true,
        },
        patientSex: { // 환자성별
            type: 'varchar',
            length: 10,
            nullable: false,
        },
        patientAge: { // 환자나이
            primary: true,
            type: 'bigint',
            nullable: false,
            generated: false,
        },
        prescriptionNum: { // 처방전 고유값(문자열)
            type: 'varchar',
            length: 20,
            nullable: false,
        },
        date:{  //날짜
            type:'varchar',
            length: 15,
            nullable: false,
        }
    }
});
