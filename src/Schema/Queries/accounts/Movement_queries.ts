import { movementType } from './../../Typedefs/accounts/MovementType';
import { canelaAccountsDB } from './../../../index';
import { GraphQLList, GraphQLString } from 'graphql';
import { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLEnumType} from 'graphql'

export const GET_ALL_MOVEMENTS = {
    type: new GraphQLList(movementType),
    async resolve() {
        const sql = `SELECT * FROM accounts_db.movements`
        const values = (await canelaAccountsDB.query(sql))
        return JSON.parse(JSON.stringify(values))[0]
    }
}

export const GET_MOVEMENT_BY_ID = {
    type: movementType,
    args: {
        id: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const id = args.id
        const sql = `SELECT * from accounts_db.movements WHERE id='${id}'`
        const values = (await canelaAccountsDB.query(sql))
        return JSON.parse(JSON.stringify(values))[0][0]
    }
}

export const GET_MOVEMENTS_BY_ORIGIN_ACCOUNT = {
    type: new GraphQLList(movementType),
    args: {
        account_id: {type: GraphQLString},
    },
    async resolve(parent: any, args: any) {
        const account_id = args.account_id
        const sql = `SELECT * from accounts_db.movements WHERE origin_account=${account_id} `
        const values = (await canelaAccountsDB.query(sql))
        const jsonValue = JSON.parse(JSON.stringify(values))[0]
        return jsonValue
    }
}

export const GET_MOVEMENTS_BY_DESTINATION_ACCOUNT = {
    type: new GraphQLList(movementType),
    args: {
        account_id: {type: GraphQLString},
    },
    async resolve(parent: any, args: any) {
        const account_id = args.account_id
        const sql = `SELECT * from accounts_db.movements WHERE destination_account=${account_id} `
        const values = (await canelaAccountsDB.query(sql))
        const jsonValue = JSON.parse(JSON.stringify(values))[0]
        return jsonValue
    }
}