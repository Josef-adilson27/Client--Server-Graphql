import {  gql, useMutation } from "@apollo/client";

const DELETE_PERSON = gql`
mutation ($id: ID!){
removePerson(id: $id) {
  id
}
}
`;


 export const UseRemove = () => {

 const [removePerson] = useMutation(DELETE_PERSON, {
     onCompleted: () => {
       window.location.reload();
     },
   });

  const onDelete = (id) =>{
    removePerson({variables:{id}}) 
  }
  

   return {onDelete}
      
  
  }
  
 
  