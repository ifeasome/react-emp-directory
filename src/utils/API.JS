import axios from "axios";

// Export an object containing methods we'll use for accessing the Random API

export default {
  getRandomUser: function() {
    return axios.get("https://randomuser.me/api/?lego&results=12&?seed=foobar");
  }
};

