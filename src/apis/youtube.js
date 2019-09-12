import axios from 'axios';

const KEY = 'AIzaSyD8Ts73rwtkM-JiFxExkVmGyxsrNREERN8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})