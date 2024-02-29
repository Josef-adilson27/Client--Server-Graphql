export const typeDefs = `#graphql

  type Query {
    persons: [Person!]
    getPerson(input:GetPersonInput):Person
    ships:[Ship!]
    getShipById(id:ID!):Ship
    getPersonById(id:ID!):Person
    
  }

  interface Human{
    id:ID!
    firstName: String
    lastName: String
    img:String
  }

  input GetPersonInput{
   firstName:String
   lastName:String
   img:String
  }
  
  type Person implements Human {
    id:ID!
    firstName: String
    lastName: String
    img:String
    ship:[Ship]
    exOwners:[ExOwners]
    friends:[Friend]
    droid:[ Droid]
  }
 
  type Droid{
    owner:String
    type:String
    name:String
    img:String
  }

  type Friend implements Human {
    id:ID!
    firstName: String
    lastName: String
    img:String
  }

  type Ship{
    id:ID!
    owner:String
    brand:String
    release:String
    img:String
  }

  type ExOwners implements Human {
    id:ID!
    firstName:String
    lastName: String
    img:String,
  }

  input FriendInput  {
    id:ID!
    firstName: String
    lastName: String
    img:String
  }

  input CreatePersonInput{
    firstName: String
    lastName: String
  }

  input UpdatePersonInput{
    id:ID
    firstName: String
    lastName: String
  }
  
  type Mutation{
    createPerson(data:CreatePersonInput):Person
    updatePerson(id:ID!, data:UpdatePersonInput):Person
    removePerson(id:ID!):[Person]
  }
`;
