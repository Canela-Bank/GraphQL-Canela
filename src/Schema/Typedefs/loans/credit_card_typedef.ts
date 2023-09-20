import { GraphQLObjectType, GraphQLFloat, GraphQLString, GraphQLInt, GraphQLEnumType} from 'graphql'

export const CreditCardType = new GraphQLObjectType({
    name: "Credit_Cards",
    fields: () => ({
        number: {type: GraphQLInt},
        cvv: {type: GraphQLInt},
        exp_date: {type: GraphQLString},
        card_name: {type: GraphQLString},
        debt: {type: GraphQLFloat },
        user_id: {type: GraphQLString},
        user_document_type: {type: GraphQLInt}
    })
})