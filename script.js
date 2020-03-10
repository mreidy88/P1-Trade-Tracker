const baseURL = "https://records.nhl.com/site/api/"
const apiHit = async () => {
    let response = await axios.get('https://statsapi.web.nhl.com/api/v1/teams/3/?expand=team.stats');
    console.log(response)
};
apiHit();