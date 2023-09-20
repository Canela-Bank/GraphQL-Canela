import { canelaInvestmentsDB } from './../../../index';
import { GraphQLString, GraphQLBoolean, GraphQLFloat, GraphQLObjectType, GraphQLInt } from "graphql"
import { Trusts_type } from "../../Typedefs/investments/Trusts_type"
 
export const CREATE_TRUST = {
    type: Trusts_type,
    args: {
        id: { type: GraphQLString },
        value: { type: GraphQLFloat },
        start_date: {type: GraphQLString},
        finish_date: {type: GraphQLString},
        rate: {type: GraphQLFloat},
        status: {type: GraphQLBoolean},
        user_id: {type: GraphQLString},
        user_document_type: {type: GraphQLInt}
    },
    async resolve(parent: any, args: any) {
        const sql = `INSERT INTO investments_db.trusts(id, value, start_date, finish_date, rate, status, user_id, user_document_type)
        VALUES ( '${args.id}', ${args.value}, '${args.start_date}', '${args.finish_date}', ${args.rate}, ${args.status}, '${args.user_id}', ${args.user_document_type} )
        ON DUPLICATE KEY UPDATE
        value=${args.value}, start_date='${args.start_date}', finish_date='${args.finish_date}', rate=${args.rate}, status=${args.status}, user_id='${args.user_id}', user_document_type=${args.user_document_type} `
        await canelaInvestmentsDB.query(sql)
        return args
    }
}

export const DELETE_TRUST = {
    type: new GraphQLObjectType({
        name: "TrustMutation",
        fields: {
            message: {type: GraphQLString},
            data: {type: Trusts_type}
        }
    }), 
    args: {
        id: {type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const trust = args.id
        const sql = `DELETE FROM investments_db.trusts WHERE id=${trust}`

        await canelaInvestmentsDB.query(sql)
        return {
            message: "Operation successful",
            data: args
        }
    }
}