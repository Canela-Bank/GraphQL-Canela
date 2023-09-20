import { canelaInvestmentsDB } from './../../../index';
import { InvestmentLoanType } from "../../Typedefs/investments/Investment_loan_type";
import { GraphQLString, GraphQLBoolean, GraphQLObjectType, GraphQLInt} from "graphql"


export const CREATE_INVESTMENT_LOAN = {
    type: InvestmentLoanType,
    args: {
        id: {type: GraphQLString},
        status: {type: GraphQLBoolean},
        user_id: {type: GraphQLString},
        user_document_type: {type: GraphQLInt}
    },
    async resolve(parent: any, args: any) {
        const sql = `INSERT INTO investments_db.investment_loan(id, status, user_id, user_document_type)
        VALUES ( '${args.id}', ${args.status}, '${args.user_id}', ${args.user_document_type} )
        ON DUPLICATE KEY UPDATE
        status=${args.status}, user_id='${args.user_id}', user_document_type=${args.user_document_type}`
        await canelaInvestmentsDB.query(sql)
        return args
    }
}

export const DELETE_INVESTMENT_LOAN = {
    type: new GraphQLObjectType({
        name: "InvestmentLoanMutation",
        fields: {
            message: {type: GraphQLString},
            data: {type: InvestmentLoanType}
        }
    }),
    args: {
        id: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const il = args.id
        const sql = `DELETE FROM investments_db.investment_loan WHERE id=${il}`

        await canelaInvestmentsDB.query(sql)
        return {
            message: "Operation successful",
            data: args
        }
    }
}