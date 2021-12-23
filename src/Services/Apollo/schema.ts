import { gql } from "apollo-server"

const schema = gql`
  type Transaction {
    label: String
    account: String
    date: date
    category: String
    amount: Int
  }

  type Query {
    transactions: [Transaction]
  }
`