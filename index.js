
window.onload = function() {
    repo('my-first-repo', 'https://github.com/Jabinator1/my-first-repo', '', 'HTML')
    repo('my-second-repo', 'https://github.com/Jabinator1/my-second-repository', '', 'HTML')
    repo('html-layout', 'https://github.com/Jabinator1/html-layout', 'Forked from DevMountain/html-layout', 'CSS')
    repo('javascript-1-afternoon', 'https://github.com/Jabinator1/javascript-1-afternoon', 'Forked from DevMountain/javascript-1-afternoon', 'JavaScript')
    repo('javascript-2-afternoon-project', 'https://github.com/Jabinator1/javascript-2-afternoon-project', 'Forked from DevMountain/javascript-2-afternoon-project', 'JavaScript')
    repo('javascript-3-afternoon-project', 'https://github.com/Jabinator1/javascript-3-afternoon-project', 'Forked from DevMountain/javascript-3-afternoon-project', 'JavaScript')

}

function repo(title, link, paragraph, language) {
    let latestRepos = document.getElementById("latest-repos")
    console.log(latestRepos)
    //repo div container that has border
    let repoNumDiv = document.createElement("li")
    //content container
    let repoInfoDiv = document.createElement("div")
    //inside content divs
    let repoTitle = document.createElement("a")
    let repoParagraph = document.createElement("div")
    let repoLanguage = document.createElement("div")

    //appending all children
    latestRepos.appendChild(repoNumDiv)
    repoNumDiv.appendChild(repoInfoDiv)

    repoInfoDiv.appendChild(repoTitle)
    repoInfoDiv.appendChild(repoParagraph)
    repoInfoDiv.appendChild(repoLanguage)

    //adding classes
    repoNumDiv.classList.add("repo-container")
    repoInfoDiv.classList.add("repo-info")

    repoTitle.classList.add("repo-title")
    repoParagraph.classList.add("repo-paragraph")
    repoLanguage.classList.add("repo-language")


    //setting the innerText
    repoTitle.innerText = title
    repoTitle.href = link
    repoParagraph.innerText = paragraph
    repoLanguage.innerText = language
}