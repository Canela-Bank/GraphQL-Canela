import { canelaLoansDB } from './../../../index';
import { GraphQLString, GraphQLFloat, GraphQLObjectType, GraphQLInt } from 'graphql';
import { LoanType } from './../../Typedefs/loans/loans_typedef';

export const CREATE_LOAN = {
    type: LoanType,
    args: {
        id: {type: GraphQLString},
        interest_rate: {type: GraphQLFloat},
        min_payment: {type: GraphQLFloat},
        balance: {type: GraphQLFloat},
        payment_date: {type: GraphQLString},
        debt: {type: GraphQLFloat},
        user_id: {type: GraphQLString},
        user_document_type: {type: GraphQLInt}
    },
    async resolve(parent:any, args: any) {
        const sql = `INSERT INTO loans_db.loans (id, interest_rate, min_payment, balance, payment_date, debt, user_id, user_document_type) VALUES
        (${args.id}, ${args.interest_rate}, '${args.min_payment}', '${args.balance}', '${args.payment_date}', '${args.debt}', ${args.user_id}, ${args.user_document_type})
        ON DUPLICATE KEY UPDATE
        interest_rate=${args.interest_rate}, min_payment='${args.min_payment}', balance='${args.balance}', payment_date='${args.payment_date}', debt='${args.debt}', user_id=${args.user_id}, user_document_type=${args.user_document_type}`
        await canelaLoansDB.query(sql)
        return args
    }
}


export const DELETE_LOAN = {
    type: new GraphQLObjectType({
        name: "LoanMutation",
        fields: {
            message: {type: GraphQLString},
            data: {type: LoanType}
        }
    }), 
    args: {
        id: {type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const loan = args.id
        const sql = `DELETE FROM loans_db.loans WHERE id='${loan}'`

        await canelaLoansDB.query(sql)
        return {
            message: "Operation was successful",
            data: args
        }
    }
}