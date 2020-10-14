
window.onload = function() {
    repo('my-first-repo', 'https://github.com/Jabinator1/my-first-repo', '', '', 'HTML')
    repo('my-second-repo', 'https://github.com/Jabinator1/my-second-repository', '', '', 'HTML')
    repo('html-layout', 'https://github.com/Jabinator1/html-layout', 'Forked from DevMountain/html-layout', '', 'CSS')
    repo('javascript-1-afternoon', 'https://github.com/Jabinator1/javascript-1-afternoon', 'Forked from DevMountain/javascript-1-afternoon', 'An afternoon project to help students solidify the fundamentals.', 'JavaScript')
    repo('javascript-2-afternoon-project', 'https://github.com/Jabinator1/javascript-2-afternoon-project', 'Forked from DevMountain/javascript-2-afternoon-project', '', 'JavaScript')
    repo('javascript-3-afternoon-project', 'https://github.com/Jabinator1/javascript-3-afternoon-project', 'Forked from DevMountain/javascript-3-afternoon-project', '', 'JavaScript')

}

function repo(title, link, Fork, description, language) {
    let latestRepos = document.getElementById("latest-repos")
    //repo div container that has border
    let repoNumDiv = document.createElement("li")
    //content container
    let repoInfoDiv = document.createElement("div")
    //inside content divs
    let repoTitle = document.createElement("a")
    let repoFork = document.createElement("p")
    let repoDescription = document.createElement("p")
    let repoLanguage = document.createElement("div")

    let circle = document.createElement("span")
    let repoLang = document.createElement("span")

    //appending all children
    latestRepos.appendChild(repoNumDiv)
    repoNumDiv.appendChild(repoInfoDiv)

    repoInfoDiv.appendChild(repoTitle)
    repoInfoDiv.appendChild(repoFork)
    repoInfoDiv.appendChild(repoDescription)
    repoInfoDiv.appendChild(repoLanguage)

    //Language and color divs
    repoLanguage.appendChild(circle)
    repoLanguage.appendChild(repoLang)


    //adding classes
    repoNumDiv.classList.add("repo-container")
    repoInfoDiv.classList.add("repo-info")

    repoTitle.classList.add("repo-title")
    repoFork.classList.add("repo-fork")
    repoDescription.classList.add("repo-description")
    repoLanguage.classList.add("repo-language")
    circle.classList.add("language-circle")


    //setting the innerText
    repoTitle.innerText = title
    repoTitle.href = link
    repoFork.innerText = Fork
    repoDescription.innerText = description
    repoLang.innerText = language

    let cStyle = circle.style

    if (language === "HTML") {
        cStyle.backgroundColor = "#e34c26"
    } else if (language === "CSS") {
        cStyle.backgroundColor = "#563d7c"
    } else if (language === "JavaScript") {
        cStyle.backgroundColor = "#f1e05a"
    }
    //use style.backgroundColor to set the color of the language circle
}