import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat, GraphQLEnumType} from 'graphql'

export const movementType = new GraphQLObjectType({
    name: "Movement",
    fields: () => ({
        id: { type: GraphQLString },
        origin_account: { type: GraphQLString },
        destination_account: { type: GraphQLString },
        amount: { type: GraphQLFloat },
        movement_date: { type: GraphQLString }
    })
})