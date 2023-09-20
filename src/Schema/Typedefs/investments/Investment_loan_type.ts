import {GraphQLString, GraphQLBoolean, GraphQLObjectType, GraphQLInt} from "graphql"

export const InvestmentLoanType = new GraphQLObjectType({
    name: "InvestmentLoan",
    fields: () => ( {
        id: {type: GraphQLString},
        status: {type: GraphQLBoolean},
        user_id: {type: GraphQLString},
        user_document_type: {type: GraphQLInt}
    })
})