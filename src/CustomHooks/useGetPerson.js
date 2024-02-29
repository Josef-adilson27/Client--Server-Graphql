import { useQuery, gql } from "@apollo/client";

const GET_PERSON = gql`
  query ($id: ID!) {
    getPersonById(id: $id) {
      firstName
      lastName
      img
    }
  }
`;

export const useGetPerson = (id) => {
  const { error, loading, data } = useQuery(GET_PERSON, {
    variables: { id },
  });

  return {
    error,
    loading,
    data,
  };
};

export default useGetPerson;
