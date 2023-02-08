import gql from "graphql-tag";
//mutation queries are taken from graphql playground/localhost query tester and pasted here
const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password){
            token
                user{
                    _id
                    username
                    email
                    bookCount
                    savedBooks{
                        bookId
                        title
                        description
                        authors
                        link
                        image
                    }
                }
        }
    }
`;
const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password){
            token
                user{
                    _id
                    username
                    email
                    bookCount
                    savedBooks{
                        bookId
                        title
                        description
                        authors
                        link
                        image
                }
            }
        }
    }
`;
const SAVE_BOOK = gql`
    mutation saveBook($input: bookInput!){
        saveBook(input: $input){
            _id
            username
            email
            savedBooks{
                bookId
                title
                description
                authors
                link
                image
            }
        }
    }
`;
const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!){
        removeBook(bookId: $bookId){
            _id
            username
            email
            bookCount
            savedBooks{
                bookId
                title
                description
                authors
                link
                image
            }
        }
    }
`;
module.exports = {LOGIN_USER, ADD_USER, SAVE_BOOK, REMOVE_BOOK};