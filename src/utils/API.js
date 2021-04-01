import axios from 'axios';

export default {
  // Retrieve 20 random users
  search: function () {
    return axios.get('https://randomuser.me/api/?results=20&nat=us');
  },
};
