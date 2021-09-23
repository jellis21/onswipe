import {renderJobs} from "./main.js"

document.addEventListener("DOMContentLoaded", (e) => {
    const favListJSON = localStorage.getItem("favlist");
    const favList = JSON.parse(favListJSON);
    renderJobList(favList);
  });