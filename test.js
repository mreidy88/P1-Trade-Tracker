const baseURL = "https://records.nhl.com/site/api/"
const apiHit = async () => {
    let response = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8476459/?stats=yearByyear');
    console.log(response)
};
apiHit();
