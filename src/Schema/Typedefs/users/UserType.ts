import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLEnumType} from 'graphql'

export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        document: { type: GraphQLString },
        document_type: { type: GraphQLInt },
        name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        birth_date: { type: GraphQLString },
        address: { type: GraphQLString },
        phone_number: { type: GraphQLString },
        email: { type: GraphQLString },
    })
})