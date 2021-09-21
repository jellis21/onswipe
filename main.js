const searchButton = document.getElementById('search-button');
const jobsContainer = document.getElementById('movies-container');

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  const selectJob = document.getElementById('select-job').value;
  const location = document.getElementById('location').value;

  const selectJobEncoded = encodeURIComponent(selectJob);
  const locationEncoded = encodeURIComponent(location);

  fetch(`https://www.themuse.com/api/public/jobs?category=${selectJobEncoded}&location=${locationEncoded}&page=1`)
    .then((response) => { return response.json() })
    .then((data) => {
      console.log(selectJobEncoded);
      console.log(locationEncoded);
      console.log(data);
      const jobs = renderJobs(data.results);
      jobsContainer.innerHTML = jobs;

      // **Test** Makes it so only one job card shows
      const singleJob = document.getElementsByClassName('movieJob');
      console.log(singleJob);
      function showOneJob() {
      for (let i = 1; i < singleJob.length; i++) {
        singleJob.item(i).classList.add('d-none');
      }
    }
    showOneJob();
    })
})

// **Test** This is a placeholder for Max's movie card and function
function renderJobs(jobArray) {
  const jobHtmlArray = jobArray.map(function (currentJob) {
    return `<div class="movieJob col p-3">
<div class="card bg-secondary text-light" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${currentJob.company.name}</h5>
  <p class="card-text">${currentJob.name}</p>
  <a href="#" class="add-button btn btn-warning text job-card">Test</a>
</div>
</div>
</div>`
  })
  return jobHtmlArray.join('');
}

// **Test** Need to keep working on this
jobsContainer.addEventListener('click', (e) => {
  e.preventDefault();
  const jobCard = document.getElementsByClassName('job-card');
  nextJob(singleJob, 0);

})
function nextJob(arr, index) {
  // index n disappears
  // index m appears
  arr.item(index).classList.add('d-none');
  arr.item(index + 1).classList.remove('d-none');
}




