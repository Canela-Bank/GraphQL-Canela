import { GraphQLObjectType, GraphQLFloat, GraphQLString, GraphQLInt} from 'graphql'

export const LoanType = new GraphQLObjectType({
    name: "Loans",
    fields: () => ({
        id: {type: GraphQLString},
        interest_rate: {type: GraphQLFloat},
        min_payment: {type: GraphQLFloat},
        balance: {type: GraphQLFloat},
        payment_date: {type: GraphQLString},
        debt: {type: GraphQLFloat},
        user_id: {type: GraphQLString},
        user_document_type: {type: GraphQLInt}
    })
})