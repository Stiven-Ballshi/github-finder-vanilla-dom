const github = new Github();
const ui = new UI();
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    github.getProfile(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
// output += `
//         <div class="card card-body mb-2">
//           <div class="row">
//             <div class="col-md-6">
//               <a href="${repo.html_url}" target="_blank">${repo.name}</a>
//             </div>
//             <div class="col-md-6">
//             <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
//             <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
//             <span class="badge badge-success">Forks: ${repo.forms_count}</span>
//             </div>
//           </div>
//         </div>
//       `;
