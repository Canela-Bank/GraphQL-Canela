import { canelaInvestmentsDB } from './../../../index';
import { GraphQLList, GraphQLString, GraphQLInt } from "graphql"
import { Trusts_type } from "../../Typedefs/investments/Trusts_type"

export const GET_ALL_TRUSTS = {
    type: new GraphQLList(Trusts_type),
    async resolve() {
        const sql = `SELECT * FROM investments_db.trusts`
        const values = (await canelaInvestmentsDB.query(sql))[0]
        return JSON.parse(JSON.stringify(values))
    }
}

export const GET_TRUST_BY_ID = {
    type: Trusts_type,
    args: {
        id: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const sql = `SELECT * FROM investments_db.trusts WHERE id=${args.id}`
        const values = (await canelaInvestmentsDB.query(sql))[0]
        const jsonValue = JSON.parse(JSON.stringify(values))
        return jsonValue[0]
    }
}

export const GET_TRUSTS_BY_USER = {
    type: new GraphQLList(Trusts_type),
    args: {
        user_document: {type: GraphQLString},
        user_document_type: {type: GraphQLInt }
    },
    async resolve(parent: any, args: any) {
        const {user_document, user_document_type} = args
        const sql = `SELECT * from investments_db.trusts WHERE user_id='${user_document}' AND user_document_type=${user_document_type}`
        const values = (await canelaInvestmentsDB.query(sql))[0]
        const jsonValue = JSON.parse(JSON.stringify(values))
        return jsonValue
    }
}