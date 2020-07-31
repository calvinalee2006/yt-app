import axios from 'axios';

const KEY = 'AIzaSyCShMdGEjiXtXlqErqLF4yYbOWdUn-3oF8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
