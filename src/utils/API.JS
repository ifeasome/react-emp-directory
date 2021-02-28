import axios from "axios";

// Export an object containing methods we'll use for accessing the Random API.

let APIcalls = {
  getRandomUser: function() {
    return axios.get("https://api.randomuser.me/?lego");
  }
};

export default APIcalls;