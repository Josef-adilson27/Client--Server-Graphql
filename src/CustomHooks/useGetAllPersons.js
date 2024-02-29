import { useQuery, gql } from "@apollo/client";

const GET_PERSONS = gql`
query{
    persons {
    id
    firstName
    lastName
    img
    
  }  
}
 `;

export const UseAllPersons = () => {

const { error, loading, data } = useQuery(GET_PERSONS);

    return { 
        error, 
        loading, 
        data,
       
    }
      
}

