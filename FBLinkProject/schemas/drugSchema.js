const EntitySchema = require('typeorm').EntitySchema;
const Drug = require('../models/drug').Drug;

module.exports = new EntitySchema({
    name: 'drug',
    target: Drug,
    columns: {
        id: {
            primary: true,
            type: 'bigint',
            generated: true
        },
        drugName: {
            type: 'varchar',
            length: 15,
            nullable: false
        },
        medicineNum: {
            type: 'bigint',
            nullable: false,
            
        },
    }
});