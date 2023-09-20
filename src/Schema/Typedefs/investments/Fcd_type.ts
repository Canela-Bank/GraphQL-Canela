import { GraphQLObjectType, GraphQLFloat, GraphQLString, GraphQLBoolean, GraphQLInt } from 'graphql'

export const FcdType = new GraphQLObjectType({
    name: "Fcd",
    fields: () => ({
        id: { type: GraphQLString },
        value: { type: GraphQLFloat },
        start_date: {type: GraphQLString},
        finish_date: {type: GraphQLString},
        debt: {type: GraphQLFloat},
        status: {type: GraphQLBoolean},
        user_id: {type: GraphQLString},
        user_document_type: {type: GraphQLInt}
    })
})