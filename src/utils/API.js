import axios from "axios";

export default {
    getUsers: function () {
        // Return Data from Randomuser API 
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};