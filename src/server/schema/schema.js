export default `
  type User {
    id: Int!
    firstName: String
    lastName: String
    fullName: String
  }

  type Product {
    id: Int!
    name: String
    description: String
    price: Int
    url: String
  }

  type CartItem{
    id: Int
    product: Product
    quantity: Int
  }

  type Mutation{
    addToCart(productId: Int): CartItem
  }

  type Query {
    user: User
    products(searchString: String): [Product]
    product(id: Int!): Product
    cartItems: [CartItem]
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
