const EntitySchema = require('typeorm').EntitySchema;
const Personal = require('../models/personal').Personal;

module.exports = new EntitySchema({
    name: 'personal',
    target: Personal,
    columns: {
        userRRNum: {
            primary: true,
            type: 'bigint',
            nullable: false,
        },
        userName: {
            type: 'varchar',
            length: 20,
            nullable: false,
        },
        userCall: {
            type: 'bigint',
            nullable: false,
        },
        userSex: {
            type: 'varchar',
            length: 8,
            nullable: false,
        },
        userAge: {
            type: 'bigint',
            nullable: false,
        },
        userEmail: {
            type: 'varchar',
            length: 40,
            nullable: false,
        },
        userID: {
            type: 'varchar',
            length: 15,
            nullable: false,
        },
        userPassword: {
            type: 'varchar',
            length: 30,
            nullable: false,
        }
    }// Permission은 나눠야되나 말아야되나....
});

/*
primary
type
generated
type
length
nullable
default
*/