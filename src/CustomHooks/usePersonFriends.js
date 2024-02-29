import { useQuery, gql } from "@apollo/client";

const GET_FRIENDS = gql`query ($id: ID!) {
  getPersonById(id: $id) {
    friends {
      firstName
      lastName
      img
    }
  }
}`;

export const usePersonFriends = (id) => {
 
  const { error, loading, data } = useQuery(GET_FRIENDS, {
    variables: { id },
  });

  return {
    error,
    loading,
    data,
  };
};


