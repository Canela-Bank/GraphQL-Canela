import { canelaUsersDB } from './../../../index';
import { UserType } from '../../Typedefs/users/UserType';
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLEnumType} from 'graphql'

export const CREATE_USER = {
    type: UserType,
    args: { 
        document: { type: GraphQLString },
        document_type: { type: GraphQLInt },
        name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        birth_date: { type: GraphQLString },
        address: { type: GraphQLString },
        phone_number: { type: GraphQLString },
        email: { type: GraphQLString },
    },
    async resolve(parent:any, args: any) {
        const new_user = args
        const sql = `INSERT INTO users_db.users (document, document_type, name, last_name, birth_date, address, phone_number, email) VALUES
         ('${new_user.document}', ${new_user.document_type}, '${new_user.name}', '${new_user.last_name}', '${new_user.birth_date}', '${new_user.address}', '${new_user.phone_number}', '${new_user.email}')
         ON DUPLICATE KEY UPDATE
         name='${new_user.name}', last_name='${new_user.last_name}', birth_date='${new_user.birth_date}', address='${new_user.address}', phone_number='${new_user.phone_number}',  email='${new_user.email}'`
        console.log(sql)
        //await Users.save(new_user)
        await canelaUsersDB.query(sql)
        return args
        //return await (await canelaUsersDB).execute()
    }
}

export const DELETE_USER = {
    type: new GraphQLObjectType({
        name: "UserMutation",
        fields: {
            message: {type: GraphQLString},
            data: {type: UserType}
        }
    }),
    args: {
        document: {type: GraphQLString},
        document_type: {type: GraphQLInt}
    },
    async resolve(parent: any, args: any) {
        const user = args
        const sql = `DELETE FROM users_db.users WHERE document='${user.document}' AND document_type='${user.document_type}'`
        
        await canelaUsersDB.query(sql)
        return {
            message: "Operation was successful",
            data: args
        }
    }
}