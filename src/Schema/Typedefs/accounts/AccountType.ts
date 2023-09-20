import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat, GraphQLInt} from 'graphql'

export const accountType = new GraphQLObjectType({
    name: "Account",
    fields: () => ({
        id: { type: GraphQLString },
        balance: { type: GraphQLFloat },
        user_id: { type: GraphQLString },
        user_document_type: {type: GraphQLInt}
    })
})