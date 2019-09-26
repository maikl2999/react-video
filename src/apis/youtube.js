//   'npm install axios@0.18.1';
import axios from 'axios';

const KEY = 'AIzaSyDCPl-DVCPAazRKELD-YO5EMen00lBqnts';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY,
    }
});