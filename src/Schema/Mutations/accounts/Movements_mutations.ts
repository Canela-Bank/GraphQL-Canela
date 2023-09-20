import { canelaAccountsDB } from './../../../index';
import { movementType } from './../../Typedefs/accounts/MovementType';
import { GraphQLObjectType, GraphQLFloat, GraphQLString, GraphQLInt, GraphQLEnumType} from 'graphql'

export const CREATE_MOVEMENT = {
    type: movementType,
    args: {
        id: { type: GraphQLString },
        origin_account: { type: GraphQLString },
        destination_account: { type: GraphQLString },
        amount: { type: GraphQLFloat },
        movement_date: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const movement = args
        const sql = `INSERT INTO accounts_db.movements (id, origin_account, destination_account, amount, movement_date)
        VALUES ('${movement.id}', '${movement.origin_account}', '${movement.destination_account}', ${movement.amount}, '${movement.movement_date}')
        ON DUPLICATE KEY UPDATE
        origin_account='${movement.origin_account}', destination_account='${movement.destination_account}', amount=${movement.amount}, movement_date='${movement.movement_date}'`
        await canelaAccountsDB.query(sql)
        return movement
    }
}

export const DELETE_MOVEMENT = {
    type: new GraphQLObjectType({
        name: "MovementMutation",
        fields: {
            message: {type: GraphQLString},
            data: {type: movementType}
        }
    }),
    args: {
        id: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const id = args.id
        const sql = `DELETE FROM accounts_db.movements WHERE id=${id}`
        await canelaAccountsDB.query(sql)
        return {
            message: "Operation was succesful",
            data: args
        }
    }
}