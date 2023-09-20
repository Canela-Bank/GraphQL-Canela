import { canelaLoansDB } from './../../../index';
import { CreditCardType } from '../../Typedefs/loans/credit_card_typedef';
import { GraphQLObjectType, GraphQLFloat, GraphQLString, GraphQLInt} from 'graphql'

export const CREATE_CREDIT_CARD = {
    type: CreditCardType,
    args: {
        number: {type: GraphQLInt},
        cvv: {type: GraphQLInt},
        exp_date: {type: GraphQLString},
        card_name: {type: GraphQLString},
        debt: {type: GraphQLFloat },
        user_id: {type: GraphQLString},
        user_document_type: {type: GraphQLInt}
    },
    async resolve(parent: any, args: any) {
        const sql = `INSERT INTO loans_db.credit_cards (number, cvv, exp_date, card_name, debt, user_id, user_document_type) VALUES
        (${args.number}, ${args.cvv}, '${args.exp_date}', '${args.card_name}', ${args.debt}, '${args.user_id}', ${args.user_document_type})
        ON DUPLICATE KEY UPDATE
        cvv=${args.cvv}, exp_date='${args.exp_date}', card_name='${args.card_name}', debt=${args.debt}, user_id='${args.user_id}', user_document_type=${args.user_document_type}`
        await canelaLoansDB.query(sql)
        return args
    }
}

export const DELETE_CREDIT_CARD = {
    type: new GraphQLObjectType({
        name: "CreditCardMutation",
        fields: {
            message: {type: GraphQLString},
            data: {type: CreditCardType}
        }
    }),
    args: {
        number: {type: GraphQLInt}
    },
    async resolve(parent: any, args: any) {
        const creditCard = args.number
        const sql = `DELETE FROM loans_db.credit_cards WHERE number='${creditCard}'`

        await canelaLoansDB.query(sql)
        return {
            message: "Operation was succesful",
            data: args
        }
    }
}
