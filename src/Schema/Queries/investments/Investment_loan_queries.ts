import { canelaInvestmentsDB } from './../../../index';
import { GraphQLList, GraphQLString, GraphQLInt } from "graphql"
import { InvestmentLoanType } from "../../Typedefs/investments/Investment_loan_type"


export const GET_ALL_INVESTMENT_LOANS = {
    type: new GraphQLList(InvestmentLoanType),
    async resolve() {
        const sql = `SELECT * FROM investments_db.investment_loan`
        const values = (await canelaInvestmentsDB.query(sql))[0]
        return JSON.parse(JSON.stringify(values))
    }
}

export const GET_INVESTMENT_LOAN_BY_ID = {
    type: InvestmentLoanType,
    args: {
        id: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const sql = `SELECT * from investments_db.investment_loan WHERE id=${args.id}`
        const values = (await canelaInvestmentsDB.query(sql))[0]
        const jsonValue = JSON.parse(JSON.stringify(values))
        return jsonValue[0]
    }
}

export const GET_INVESTMENT_LOANS_BY_USER = {
    type: new GraphQLList(InvestmentLoanType),
    args: {
        user_document: {type: GraphQLString},
        user_document_type: {type: GraphQLInt }
    },
    async resolve(parent: any, args: any) {
        const sql = `SELECT * from investments_db.investment_loan WHERE user_id='${args.user_document}' AND user_document_type=${args.user_document_type}`
        const values = (await canelaInvestmentsDB.query(sql))[0]
        const jsonValue = JSON.parse(JSON.stringify(values))
        return jsonValue
    }
}