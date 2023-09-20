import { accountType } from './../../Typedefs/accounts/AccountType';
import { canelaAccountsDB } from './../../../index';
import { GraphQLList, GraphQLString } from 'graphql';
import { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLEnumType} from 'graphql'

export const GET_ALL_ACCOUNTS = {
    type: new GraphQLList(accountType),
    async resolve() {
        const sql = `SELECT * FROM accounts_db.accounts`
        const values = (await canelaAccountsDB.query(sql))
        const jsonValue = JSON.parse(JSON.stringify(values))
        return jsonValue[0]
    }
}

export const GET_ACCOUNT_BY_ID = {
    type: accountType,
    args: {
        id: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const id = args.id
        const sql = `SELECT * from accounts_db.accounts WHERE id='${id}'`
        const values = (await canelaAccountsDB.query(sql))
        const jsonValue = JSON.parse(JSON.stringify(values))
        return jsonValue[0][0]
    }
}

export const GET_ACCOUNTS_BY_USER = {
    type: new GraphQLList(accountType),
    args: {
        user_document: {type: GraphQLString},
        user_document_type: {type: GraphQLInt}
    },
    async resolve(parent: any, args: any) {
        const {user_document, user_document_type} = args
        const sql = `SELECT * from accounts_db.accounts WHERE user_id='${user_document}' AND user_document_type=${user_document_type}`
        const values = (await canelaAccountsDB.query(sql))
        const jsonValue = JSON.parse(JSON.stringify(values))
        return jsonValue[0]
    }
}