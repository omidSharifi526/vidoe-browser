import axios from 'axios';

const KEY='AIzaSyBIYvMuWQhYer1Tmwup2WrzHsC2u0bGk2Q';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY

    }
})


