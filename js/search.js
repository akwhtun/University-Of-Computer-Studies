//search bar
let searchBar = document.querySelector("#search");
let lecturerContainer = document.querySelector(".lecturer-data");
let lecturers = lecturerContainer.querySelectorAll(".lecturer");
let lecturersArr = Array.from(lecturers);
searchBar.addEventListener("keyup", (e) => {
  let result = lecturersArr.filter((lecturer) => {
    let name = lecturer.querySelectorAll("span")[1].textContent;
    if (name.includes(e.target.value)) {
      return lecturer;
    }
  });
  if (result == "") {
    lecturerContainer.innerHTML =
      "<p style='margin:30px auto;font-size:30px;color:red;'>No Lecturer Found!<p/>";
  } else {
    lecturerContainer.innerHTML = "";
    result.forEach((res) => lecturerContainer.appendChild(res));
  }
});
