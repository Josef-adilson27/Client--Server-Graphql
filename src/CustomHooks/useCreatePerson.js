import { useMutation, gql } from "@apollo/client";

const CREATE_PERSON = gql`
mutation($data: CreatePersonInput){
  createPerson(data: $data) {
    firstName
    lastName
  }
}
`;

export const UseCreatePerson = () => {

    const [createPerson] = useMutation(CREATE_PERSON, {
        onCompleted: () => {
          window.location.reload();
        }
    });


    const createNewPerson = (data) =>{
        createPerson({variables:{data}})  
      }

    return { 
        createNewPerson 
    }
      
}