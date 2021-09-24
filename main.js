const searchButton = document.getElementById('search-button');
const jobsContainer = document.getElementById('jobs-container');
let currentIndex = 0;
let rejectedJobs = [];
let savedJobs = [];

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  const selectJob = document.getElementById('select-job').value;
  const location = document.getElementById('location').value;
  const selectJobEncoded = encodeURIComponent(selectJob);
  const locationEncoded = encodeURIComponent(location);

  fetch(`https://www.themuse.com/api/public/jobs?category=${selectJobEncoded}&location=${locationEncoded}&page=1`)
    .then((response) => { return response.json() })
    .then((data) => {
      console.log(data);
      myData = data.results;
      const jobs = renderJob();
      jobsContainer.innerHTML = jobs;
      currentIndex += 1;
      swipeLeft();
      swipeRight();
    })
})

function renderJob() {
  return `<div class="jobs col-12 p-3 d-flex flex-column align-items-center">
  <div class="card bg-info text-white" style="width: 18rem; height: 25rem;">
  <div class="card-body text-center">
  <h5 class="card-title">${myData[currentIndex].company.name}</h5>
  <p class="card-text">${myData[currentIndex].name}</p>
  <p class="card-text">Job Level: ${myData[currentIndex].levels[0].name}</p>
  <a href="#" class="add-button btn btn-primary text job-card" id="left">Swipe Left</a>
  <a href="#" class="add-button btn btn-primary text job-card" id="right">Swipe Right</a>
  </div>
  </div>
  </div>`
};

function swipeLeft() {
  const left = document.getElementById('left');
  left.addEventListener('click', (e) => {
    e.preventDefault();
    const job = formatJobData(myData[currentIndex]);
    rejectedJobs.push(job);
    const jobs = renderJob();
    jobsContainer.innerHTML = jobs;
    currentIndex += 1;
    swipeLeft();
    swipeRight();
    console.log(rejectedJobs);
  })
}

function swipeRight() {
  const right = document.getElementById('right');
  right.addEventListener('click', (e) => {
    e.preventDefault();
    const job = formatJobData(myData[currentIndex]);
    savedJobs.push(job);
    const jobs = renderJob();
    jobsContainer.innerHTML = jobs;
    currentIndex += 1;
    swipeLeft();
    swipeRight();
    console.log(savedJobs);
    saveToFavorites(savedJobs);
  })
}

function formatJobData(job) {
  return {
    company: job.company.name,
    description: job.contents,
    level: job.levels[0].name,
    position: job.name
  }
}

function saveToFavorites(jobs) {
  localStorage.setItem('yourJobs', JSON.stringify(jobs));
}