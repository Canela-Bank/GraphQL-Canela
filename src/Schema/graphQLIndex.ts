import { CREATE_MOVEMENT, DELETE_MOVEMENT } from './Mutations/accounts/Movements_mutations';
import { CREATE_ACCOUNT, DELETE_ACCOUNT } from './Mutations/accounts/Accounts_mutations';
import { CREATE_USER, DELETE_USER } from './Mutations/users/User_mutations';
import {GraphQLSchema, GraphQLObjectType} from "graphql"
import { GET_ALL_USERS, GET_USER_BY_ID } from './Queries/users/User_queries';
import { GET_ACCOUNTS_BY_USER, GET_ACCOUNT_BY_ID, GET_ALL_ACCOUNTS } from './Queries/accounts/Account_queries';
import { GET_ALL_MOVEMENTS, GET_MOVEMENTS_BY_DESTINATION_ACCOUNT, GET_MOVEMENTS_BY_ORIGIN_ACCOUNT, GET_MOVEMENT_BY_ID } from './Queries/accounts/Movement_queries';
import { CREATE_CREDIT_CARD, DELETE_CREDIT_CARD } from './Mutations/loans/CreditCard_mutations';
import { CREATE_LOAN, DELETE_LOAN } from './Mutations/loans/Loan_mutations';
import { GET_ALL_LOANS, GET_LOAN_BY_ID, GET_LOAN_BY_USER } from './Queries/loans/Loan_queries';
import { GET_ALL_CREDIT_CARDS, GET_CREDIT_CARDS_BY_USER, GET_CREDIT_CARD_BY_NUMBER } from './Queries/loans/CreditCard_queries';
import { GET_ALL_TRUSTS, GET_TRUSTS_BY_USER, GET_TRUST_BY_ID } from './Queries/investments/Trusts_queries';
import { GET_ALL_FCDS, GET_FCD_BY_ID, GET_FCDS_BY_USER } from './Queries/investments/Fcd_queries';
import { GET_ALL_INVESTMENT_LOANS, GET_INVESTMENT_LOAN_BY_ID, GET_INVESTMENT_LOANS_BY_USER } from './Queries/investments/Investment_loan_queries';
import { CREATE_FCD, DELETE_FCD } from './Mutations/investments/Fcd_mutations';
import { CREATE_INVESTMENT_LOAN, DELETE_INVESTMENT_LOAN } from './Mutations/investments/Investment_loan_mutations';
import { CREATE_TRUST, DELETE_TRUST } from './Mutations/investments/Trusts_mutation';


const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    //Put all the queries for the application here
    //Queries readings to the database
    fields: {
        getAllUsers: GET_ALL_USERS,
        getUserById: GET_USER_BY_ID,

        getAllAccounts: GET_ALL_ACCOUNTS,
        getAccountById: GET_ACCOUNT_BY_ID,
        getAccountsByUser: GET_ACCOUNTS_BY_USER,

        getAllCreditCards: GET_ALL_CREDIT_CARDS,
        getCreditCardByNumber: GET_CREDIT_CARD_BY_NUMBER,
        getCreditCardsByUser: GET_CREDIT_CARDS_BY_USER,

        getAllLoans: GET_ALL_LOANS,
        getLoanById: GET_LOAN_BY_ID,
        getLoansByUser: GET_LOAN_BY_USER,

        getAllTrusts: GET_ALL_TRUSTS,
        getTrustById: GET_TRUST_BY_ID,
        getTrustsByUser: GET_TRUSTS_BY_USER,

        getAllInvestmentLoans: GET_ALL_INVESTMENT_LOANS,
        getInvestmentLoanById: GET_INVESTMENT_LOAN_BY_ID,
        getInvestmentsByUser: GET_INVESTMENT_LOANS_BY_USER,

        getAllFcds: GET_ALL_FCDS,
        getFcdById: GET_FCD_BY_ID,
        getFcdByUser: GET_FCDS_BY_USER,

        getAllMovements: GET_ALL_MOVEMENTS,
        getMovementByID: GET_MOVEMENT_BY_ID,
        getMovementsByDestinationAccount: GET_MOVEMENTS_BY_DESTINATION_ACCOUNT,
        getMovementsByOriginAccount: GET_MOVEMENTS_BY_ORIGIN_ACCOUNT
    },
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    //Put all the mutations for the application here
    //Mutations are all kinds of updates to the database including insert, delete, update
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,

        createAccount: CREATE_ACCOUNT,
        deleteAccount: DELETE_ACCOUNT,

        createCreditCard: CREATE_CREDIT_CARD,
        deleteCreditCard: DELETE_CREDIT_CARD,

        createLoan: CREATE_LOAN,
        deleteLoan: DELETE_LOAN,

        createTrust: CREATE_TRUST,
        deleteTrust: DELETE_TRUST,

        createInvestmentLoan: CREATE_INVESTMENT_LOAN,
        deleteInvestmentLoan: DELETE_INVESTMENT_LOAN,

        createFcd: CREATE_FCD,
        deleteFcd: DELETE_FCD,

        createMovement: CREATE_MOVEMENT,
        deleteMovement: DELETE_MOVEMENT
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})