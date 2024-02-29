import {  gql, useMutation } from "@apollo/client";

const UPDATE_PERSON = gql`
mutation($id: ID!, $data: UpdatePersonInput){
updatePerson(id: $id,data: $data) {
  firstName
  lastName
 }
}`;


 export const useUpdate = () => {

 const [updatePerson] = useMutation(UPDATE_PERSON, {
     onCompleted: () => {
       window.location.reload();
     },
 });

  const onUpdate = (id,data) =>{
    updatePerson({variables:{id,data}})  
  }
   return {
    onUpdate}
  }
  
 
  