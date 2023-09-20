import { canelaUsersDB } from './../../../index';
import { GraphQLList } from 'graphql';
import { UserType } from '../../Typedefs/users/UserType';
import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLEnumType} from 'graphql'
import { json } from 'stream/consumers';

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    async resolve() {
        const sql = `SELECT * FROM users_db.users`
        const values = (await canelaUsersDB.query(sql))[0]
        return values
    }
}

export const GET_USER_BY_ID = {
    type: UserType,
    args: {
        document: {type: GraphQLString},
        document_type: {type: GraphQLInt}
    },
    async resolve(parent: any, args: any) {
        const {document, document_type} = args
        const sql = `SELECT * from users_db.users WHERE document='${document}' AND document_type=${document_type}`
        console.log(sql)
        const values = (await canelaUsersDB.query(sql))[0]
        const jsonValue = JSON.parse(JSON.stringify(values))
        return jsonValue[0]

    }
}