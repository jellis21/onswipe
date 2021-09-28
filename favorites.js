
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
document.querySelector('#jobs-list').innerHTML = renderJobs(favlist);
/* jobs-container is a div where our selected jobs will show up,
renderJobs passing in fav-list returns a string, innerHTML needs a string to render HTML,

*/

function renderJobs(jobs){
    const html = jobs.map(function(job, jobId) {
        // job is our object, it is iterating over an array and it is rendering the data from the keys that belong on the object
         return `
            <li class='job-item'> 
                <h2 id="${jobId}">${job.company}</h2>
                <p>Job Title: ${job.position}</p>
                <p>Job Level: ${job.level}</p>
            </li>
        `
     });
    
     return html.join('');
     /* converts array into a string, .innerHTML has to be a string,
      that is why we convert the array of objects to a string*/
 }


const clearFavlist = document.getElementById('clear-favlist');
clearFavlist.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.clear();
  document.querySelector('.jobs-container').innerHTML = 
  `<div class='d-flex mx-auto mt-5'>
  <p>Add some jobs!</p>
  </div>`
})

/*Modal placed here by Keysha*/

const jobs = document.getElementById('jobs-list');
jobs.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName === 'H2') {
        const target = e.target.getAttribute('id');
        renderDetail(favlist[target].description);
    }
}

function renderDetail(description) {
    let modal = document.getElementById('modal');

    if (modal) {
        modal.remove();
    }

modal = document.createElement('div');
modal.id = "modal";
modal.className = 'modal';
modal.innerHTML = `<span class='cancel' id='cancel')&times;</span>
<div class = "modal_container">
<p>${description}</p> 
</div>
`;

jobs.append(modal);
renderCancelBtn(modal);
}


function closeModal() {
    const modal = document.getElementById('modal');
    modal.removeEventListener('click', closeModal);
    modal.remove();
}

    function renderCancelBtn(parentEl) {
        const button = document.createElement('span');
        button.addEventListener('click', closeModal);
        button.className = 'cancel';
        button.innerHTML = '&times;';
        parentEl.append(button);
      }
      
    