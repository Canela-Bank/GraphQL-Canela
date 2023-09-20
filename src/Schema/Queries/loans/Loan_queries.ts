import { LoanType } from '../../Typedefs/loans/loans_typedef';
import { GraphQLList, GraphQLString, GraphQLInt } from 'graphql';
import { canelaLoansDB } from '../../..';

export const GET_ALL_LOANS = {
    type: new GraphQLList(LoanType),
    async resolve() {
        const sql = `SELECT * FROM loans_db.loans`
        const values = (await canelaLoansDB.query(sql))[0]
        return JSON.parse(JSON.stringify(values))
    }
}

export const GET_LOAN_BY_ID = {
    type: LoanType,
    args: {
        id: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const {id} = args
        const sql = `SELECT * from loans_db.loans WHERE id=${id}`
        const values = (await canelaLoansDB.query(sql))[0]
        const jsonValue = JSON.parse(JSON.stringify(values))
        return jsonValue[0]
    }
}

export const GET_LOAN_BY_USER = {
    type: new GraphQLList(LoanType),
    args: {
        user_document: {type: GraphQLString},
        user_document_type: {type: GraphQLInt}
    },
    async resolve(parent: any, args: any) {
        const {user_document, user_document_type} = args
        const sql = `SELECT * from loans_db.loans WHERE user_id='${user_document}' AND user_document_type=${user_document_type}`
        const values = (await canelaLoansDB.query(sql))[0]
        const jsonValue = JSON.parse(JSON.stringify(values))
        return jsonValue
    }
}