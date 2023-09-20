import { canelaLoansDB } from './../../../index';
import { CreditCardType } from './../../Typedefs/loans/credit_card_typedef';
import { GraphQLList, GraphQLInt, GraphQLString } from 'graphql';

export const GET_ALL_CREDIT_CARDS = {
    type: new GraphQLList(CreditCardType),
    async resolve() {
        const sql = `SELECT * FROM loans_db.credit_cards`
        const values = (await canelaLoansDB.query(sql))[0]
        return JSON.parse(JSON.stringify(values))
    }
}

export const GET_CREDIT_CARD_BY_NUMBER = {
    type: CreditCardType,
    args: {
        number: {type: GraphQLInt}
    },
    async resolve(parent: any, args: any) {
        const number = args.number
        const sql = `SELECT * from loans_db.credit_cards WHERE number=${number}`
        const values = (await canelaLoansDB.query(sql))[0]
        const jsonValue = JSON.parse(JSON.stringify(values))
        return jsonValue[0]
    }
}

export const GET_CREDIT_CARDS_BY_USER = {
    type: new GraphQLList(CreditCardType),
    args: {
        user_document: {type: GraphQLString},
        user_document_type: {type: GraphQLInt}
    },
    async resolve(parent: any, args: any) {
        const {user_document, user_document_type} = args
        const sql = `SELECT * from loans_db.credit_cards WHERE user_id='${user_document}' AND user_document_type=${user_document_type}`
        const values = (await canelaLoansDB.query(sql))[0]
        const jsonValue = JSON.parse(JSON.stringify(values))
        return jsonValue
    }
}