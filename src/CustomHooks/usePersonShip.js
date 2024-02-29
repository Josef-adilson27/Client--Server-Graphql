import { useQuery, gql } from "@apollo/client";

const GET_SHIP = gql`query ($id: ID!) {
  getPersonById(id: $id) {
    ship {
      id
      owner
      brand
      release
      img
    }
  }
}`;

export const usePersonShip = (id) => {
 
  const { error, loading, data } = useQuery(GET_SHIP, {
    variables: { id },
  });

  return {
    error,
    loading,
    data,
  };
};


