document.addEventListener('DOMContentLoaded', function () {

    let favlistJSON = localStorage.getItem('favlist');
    console.log(favlistJSON);
  
    let favlist = JSON.parse(favlistJSON);
    console.log(favlist);
  
    const jobcardsContainer = document.querySelector('.jobcards-container');
  
    jobcardsContainer.innerHTML = renderJobs(favlist)
  
    // Event listener to clear the favlist  
    const clearFavlist = document.getElementById('clear-favlist');
  
    clearWatchlist.addEventListener('click', () => {
      localStorage.clear();
      jobcardsContainer.innerHTML = '<div></div>'
      const container = document.getElementById('container');
      const newDiv = document.createElement('div');
      newDiv.classList = 'row'
      newDiv.innerHTML = `<div class="col-12 header mt-4 text-center">
        <p><strong>You need to add some jobs!</strong></p>
      </div>`
      container.append(newDiv);
    })
  
  })
  
  
  
  function renderJobs(jobArray) {
  
    // "If" statement for if there's nothing in the favlist
    if (movieArray == null) {
      const container = document.getElementById('container');
      const newDiv = document.createElement('div');
      newDiv.classList = 'row'
      newDiv.innerHTML = `<div class="col-12 header mt-4 text-center">
        <p><strong>You need to add some movies!</strong></p>
      </div>`
      container.append(newDiv);
    }

    // job cards need work based off of api categorys
    const jobHtmlArray = movieArray.map(function (currentJobcard) {
      return `<div class="job col p-3">
  <div class="card bg-secondary text-light" style="width: 18rem;">
  <img src=${currentJobcard.Logo} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${currentJobcard.Title}</h5>
    <p class="card-text">${currentJobcard.Year}</p>
    <a href="#" class="add-button btn btn-warning text" data-imdbid=${currentJobcard.imdbID}>Add to favlist</a>
  </div>
  </div>
  </div>`

/*still need 2 buttons - Lp html forms for button types -
need add to favlist and location button
*/
    })
    return jobHtmlArray.join(''); //Why do we need this? Because HTML can only read strings, and the above is JS. So you need the .join('') to convert to a string.
  }