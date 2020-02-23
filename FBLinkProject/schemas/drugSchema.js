const EntitySchema = require('typeorm').EntitySchema;
const Drug = require('../models/drug').Drug;

module.exports = new EntitySchema({
    name: 'drug',
    target: Drug,
    columns: {
       
        drugName: { //처방 약
            type: 'varchar',
            length: 15,
            nullable: false
        },
        
        drugAmount: { //복용갯수
            primary: true,
            type: 'bigint',
            generated: true
        },

        drugId: {//처방전 ID(숫자)
            type: 'bigint',
            length: 15,
            nullable: false,
            
        },
    }
});