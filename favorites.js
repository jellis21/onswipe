
let favlistJSON = localStorage.getItem('yourJobs');
let favlist = JSON.parse(favlistJSON);
// parse JSON is turning it into an object or an array
// when you use local storage it can only store a string - takes string and turns into array
if (!favlist) {
    favlist = []
}
// if there is not anything in the fav list make sure it is an array so favHTML does not fail
/* 
*/
document.querySelector('.jobs-container').innerHTML = renderJobs(favlist);
/* jobs-container is a div where our selected jobs will show up,
renderJobs passing in fav-list returns a string, innerHTML needs a string to render HTML,

*/

function renderJobs(jobs){
    const html = jobs.map(function(job) {
        // job is our object, it is iterating over an array and it is rendering the data from the keys that belong on the object
         return `
            <div class='d-flex flex-column mx-auto'> 
                <h2>${job.company}</h2>
                <p>Job Title: ${job.position}</p>
                <p>Job Level: ${job.level}</p>
            <div>
        `
     });
    
     return html.join('');
     /* converts array into a string, .innerHTML has to be a string,
      that is why we convert the array of objects to a string*/
 }


// function removeMovie(imdbID) {
//     console.log(watchlist, imdbID)
//     let results = watchlist.filter(movie => movie.imdbID !== imdbID)
//     watchlist = results
//     document.querySelector('.movies-container').innerHTML = renderMovies(results);
//     watchlistJSON = JSON.stringify(results);
//     localStorage.setItem('watchlist', watchlistJSON);
// }

const clearFavlist = document.getElementById('clear-favlist');
clearFavlist.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.clear();
  document.querySelector('.jobs-container').innerHTML = 
  `<div class='d-flex mx-auto mt-5'>
  <p>Add some jobs!</p>
  </div>`
})