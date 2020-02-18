const EntitySchema = require('typeorm').EntitySchema;
const Prescription = require('../models/prescription').Prescription;

module.exports = new EntitySchema({
    name: 'prescription',
    target: Prescription,
    columns: {
        prescriptionID: { // 처방전 ID
            primary: true,
            type: 'bigint',
            nullable: false,
            generated: true,
        },
        patientDisease: { // 병명
            type: 'varchar',
            length: 20,
            nullable: false,
        },
        patientState: { // 증상
            type: 'varchar',
            length: 20,
            nullable: false,
        },
        organ: { // 기관명
            type: 'varchar',
            length: 15,
            nullable: false,
        },
        medicineNotice: { // 복약안내 및 주의사항 등의 코멘트
            type: 'varchar',
            length: 40,
            nullable: false,
        },
    }
});
