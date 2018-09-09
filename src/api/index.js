const URL = 'http://api.tvmaze.com/schedule?country=US&date=2017-03-13';
export default () => fetch(URL).then(response => Promise.all([response, response.json()]));
