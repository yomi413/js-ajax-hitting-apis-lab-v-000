// your code here

function displayCommits() {
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(r => '<li>'  + r.commit.author.name + ' - ' + r.author.login + ' - ' + r.commit.message).join('') + '</li>'}</ul>`

  document.getElementById('details').innerHTML = commitsList
}

function displayBranches() {
  const branches = JSON.parse(this.responseText)
  const branchList = `<ul>${branches.map(branch => '<li>' + branch.name) + '</li>'}</ul>`

  document.getElementById('details').innerHTML = branchList
}

function displayRepositories() {
  const repos = JSON.parse(this.responseText)
  const repoList = `<ul>${repos.map(r => '<li>' + 'https://github.com' + '/' + r.full_name).join('') + '</li>'}</ul>`

  document.getElementById('repositories').innerHTML = repoList
}

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories)
  req.open('GET', 'https://api.github.com/users/octocat/repos')
  req.send()
}

function getCommits() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits)
  req.open('GET', 'https://api.github.com/repos/octocat/Spoon-Knife/commits')
  req.send()
}

function getBranches() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayBranches)
  req.open('GET', 'https://api.github.com/repos/octocat/Spoon-Knife/branches')
  req.send()
}
