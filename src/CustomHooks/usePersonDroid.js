import { useQuery, gql } from "@apollo/client";

const GET_DROID= gql`query ($id: ID!) {
  getPersonById(id: $id) {
    droid {
      type
      name
      owner
      img
    }
  }
}`;

export const usePersonDroid = (id) => {
 
  const { error, loading, data } = useQuery(GET_DROID, {
    variables: { id },
  });

  return {
    error,
    loading,
    data,
  };
};


