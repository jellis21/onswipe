const searchButton = document.getElementById('search-button');

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
      // renderData fn will go here
      // should onswipe fn go here? we only want 1 card loaded until swiped. 
      // another event listener needed? 
    })

})
