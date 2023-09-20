import { canelaAccountsDB } from './../../../index';
import { accountType } from "../../Typedefs/accounts/AccountType"
import { GraphQLString, GraphQLFloat, GraphQLObjectType, GraphQLInt } from "graphql"

export const CREATE_ACCOUNT = {
    type: accountType,
    args: {
        id: { type: GraphQLString },
        balance: { type: GraphQLFloat },
        user_id: { type: GraphQLString },
        user_document_type: {type: GraphQLInt}
    },
    async resolve(parent: any, args: any) {
        const account  = args
        const sql = `INSERT INTO accounts_db.accounts (id, balance, user_id, user_document_type) VALUES ('${account.id}', ${account.balance}, '${account.user_id}', '${account.user_document_type}')
        ON DUPLICATE KEY UPDATE balance=${account.balance}, user_id='${account.user_id}', user_document_type='${account.user_document_type}'`
        await canelaAccountsDB.query(sql)
        return args
    }
}


export const DELETE_ACCOUNT = {
    type: new GraphQLObjectType({
        name: "AccountMutation",
        fields: {
            message: {type: GraphQLString},
            data: {type: accountType}
        }
    }),
    args: {
        id: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const account = args.id
        const sql = `DELETE FROM accounts_db.accounts WHERE id=${account}`
        await canelaAccountsDB.query(sql)
        return {
            message: "Operation successful",
            data: account
        }
    }
}