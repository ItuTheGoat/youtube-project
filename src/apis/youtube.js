import Axios from 'axios';

const KEY = "AIzaSyB97P4RWVTSYceo3K8adgboQZDm2kfWuyk";

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: 
    {
        part: 'snippet',
        maxResults: 5,
        key: KEY 
    }
});