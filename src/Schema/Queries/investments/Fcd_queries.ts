import { canelaInvestmentsDB } from './../../../index';
import { GraphQLList, GraphQLString, GraphQLInt } from "graphql"
import { FcdType } from "../../Typedefs/investments/Fcd_type" 

export const GET_ALL_FCDS = {
    type: new GraphQLList(FcdType),
    async resolve() {
        const sql = `SELECT * FROM investments_db.fcd`
        const values = (await canelaInvestmentsDB.query(sql))[0]
        return JSON.parse(JSON.stringify(values))
    }
}

export const GET_FCD_BY_ID = {
    type: FcdType,
    args: {
        id: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const id = args.id
        const sql = `SELECT * from investments_db.fcd WHERE id=${id}`
        const values = (await canelaInvestmentsDB.query(sql))[0]
        const jsonValue = JSON.parse(JSON.stringify(values))
        return jsonValue[0]
    }
}

export const GET_FCDS_BY_USER = {
    type: new GraphQLList(FcdType),
    args: {
        user_document: {type: GraphQLString},
        user_document_type: {type: GraphQLInt }
    },
    async resolve(parent: any, args: any) {
        const sql = `SELECT * from investments_db.fcd WHERE user_id='${args.user_document}' AND user_document_type=${args.user_document_type}`
        const values = (await canelaInvestmentsDB.query(sql))[0]
        const jsonValue = JSON.parse(JSON.stringify(values))
        return jsonValue
    }
}