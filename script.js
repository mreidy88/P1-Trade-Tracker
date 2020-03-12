// const baseURL = "https://records.nhl.com/site/api/"

// const button = document.querySelector("#team-page");
// const select = document.querySelector("select");



// const selectArizona = async () => {
//     const response = await axios.get("https://statsapi.web.nhl.com/api/v1/people/8475791/stats?stats=yearByYear" , {
//    })
//    response.data.forEach((category) => {
//        select.innerHTML += `
//        <option value= ${category.id}>${category.name}</option>
//        `
//    })
// }
// getArizona();
// const selectArizona = async () => {
//     let AriResponse = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8475791/stats?stats=yearByYear', );
// }
//     AriResponse.data.forEach((category) => {
//         select.innerHTML += `
//         <option value = ${category.id}>${category.name}</option>
//         `
//     })
// selectArizona()


// const skjei = document.getElementById('.skjei');
//  const skjeiStats = async () => {
//     let response = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8476869/stats?stats=yearByYear')
//  console.log(response);
//  }    

// skjeiStats(); 



// const andreasA = document.querySelector('.andreasA');
// const aAstats = async () => {
//     let response = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8476960/stats?stats=yearByYear');
//     console.log(response)
// };
// aAstats();

// const haula = document.querySelector('.haula');
// const haulaStats = async () => {
//     let response = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8475287/stats?stats=yearByYear');
//     console.log(response)
// };
// haulaStats();

// const wallmark = document.querySelector('.wallmark');
// const wallmarkStats = async () => {
//     let response = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8478027/stats?stats=yearByYear');
//     console.log(response)
// };
// wallmarkStats();

// const jgp = document.querySelector('.jgp');
// const jgpStats = async () => {
//     let response = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8476419/stats?stats=yearByYear');
//     console.log(response)
// };

// jgpStats();


// const blake = document.querySelector('.blake');
// const blakeStats = async () => {
//     let response = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8476399/stats?stats=yearByYear');
//     console.log(response)
// };

// blakeStats();

// // // const foote = async () => {
// // //     let response = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8476419/stats?stats=yearByYear');
// // //     console.log(response)
// // // };


// const zucker = document.querySelector('.zucker');
// const zuckerStats = async () => {
//     let response = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8475722/stats?stats=yearByYear');
//     console.log(response)
// };

// zuckerStats();


// const alexG = document.querySelector('.alexG');
// const alexGstats = async () => {
//     let response = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8476851/stats?stats=yearByYear');
//     console.log(response)
// };

// alexGstats();

// // const addison = async () => {
// //     let response = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8476419/stats?stats=yearByYear');
// //     console.log(response)
// // };


// const hall = document.querySelector('.hall');
// const hallStats = async () => {
//     let response = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8475791/stats?stats=yearByYear');
//     console.log(response)
// };

// hallStats();

// 'https://statsapi.web.nhl.com/api/v1/people/8476869/stats?stats=statsSingleSeason&season=20182019'


// const trocheck = document.querySelector('.trocheck');
// const trocheckStats = async () => {
//         let response = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8476389/stats?stats=yearByYear', {
//             params: {
//                 stats: ''
//             }
//         })
//         .then(({
//           response
//         }) => (
//           console.log(response)
        
//         ));
// trocheckStats();

const skjei = document.getElementById('.skjei');
 const skjeiStats = async () => {
    let response = await axios.get('https://statsapi.web.nhl.com/api/v1/standings')
 console.log(response);
 }    

skjeiStats(); 
