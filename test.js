const baseURL = "https://records.nhl.com/site/api/"
const apiHit = async () => {
    let response = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8475722/stats?stats=yearByYear');
    console.log(response)
};
apiHit();

// Player Stats
// const baseURL = "https://records.nhl.com/site/api/"
// const apiHit = async () => {
//     let response = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8476459/stats?stats=statsSingleSeason&season=20192020');
//     console.log(response)
// };
// apiHit();

// Stats by season (sorted by team)
// const baseURL = "https://records.nhl.com/site/api/"
// const apiHit = async () => {
//     let response = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8475722/stats?stats=yearByYear');
//     console.log(response)
// };
// apiHit();