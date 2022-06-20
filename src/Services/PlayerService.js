import axios from "axios";

//getPlayer
export const getPlayer = (playerId) => {
  return axios.get(`/api/players/${playerId}`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      console.log(error);
    }
  );
};

//getPlayers
export const getPlayers = () => {
  return axios.get("/api/players").then(
    (response) => {
      return response.data;
    },
    (error) => {
      console.log(error);
    }
  );
};

//createPlayer
export const createPlayer = (playerFields) => {
  return axios.post("/api/players", playerFields).then(
    (response) => {
      return response.data;
    },
    (error) => {
      console.log(error);
    }
  );
};

//updatePlayer
export const updatePlayer = (playerId, playerFields) => {
  return axios.patch(`/api/players/${playerId}`, playerFields).then(
    (response) => {
      return response.data;
    },
    (error) => {
      console.log(error);
    }
  );
};
