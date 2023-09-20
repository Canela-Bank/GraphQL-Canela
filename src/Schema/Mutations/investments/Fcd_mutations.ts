import { canelaInvestmentsDB } from './../../../index';
import { FcdType } from "../../Typedefs/investments/Fcd_type";
import { GraphQLString, GraphQLBoolean, GraphQLFloat, GraphQLObjectType, GraphQLInt } from "graphql"
 
export const CREATE_FCD = {
    type: FcdType,
    args: {
        id: { type: GraphQLString },
        value: { type: GraphQLFloat },
        start_date: {type: GraphQLString},
        finish_date: {type: GraphQLString},
        debt: {type: GraphQLFloat},
        status: {type: GraphQLBoolean},
        user_id: {type: GraphQLString},
        user_document_type: {type: GraphQLInt}
    },
    async resolve(parent: any, args: any) {
        const sql = `INSERT INTO investments_db.fcd (id, value, start_date, finish_date, debt, status, user_id, user_document_type) VALUES
        ('${args.id}', ${args.value}, '${args.start_date}', '${args.finish_date}', ${args.debt}, ${args.status}, '${args.user_id}', ${args.user_document_type})
        ON DUPLICATE KEY UPDATE
        value=${args.value}, start_date='${args.start_date}', finish_date='${args.finish_date}', debt=${args.debt}, status=${args.status}, user_id='${args.user_id}', user_document_type=${args.user_document_type}`
        await canelaInvestmentsDB.query(sql)
        return args
    }
}

export const DELETE_FCD = {
    type: new GraphQLObjectType({
        name: "FcdMutation",
        fields: {
            message: {type: GraphQLString},
            data: {type: FcdType}
        }
    }), 
    args: {
        id: {type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const fcd = args.id
        const sql = `DELETE FROM investments_db.fcd WHERE id='${fcd}'`

        await canelaInvestmentsDB.query(sql)
        return {
            message: "Operation successful",
            data: args
        }
    }
}