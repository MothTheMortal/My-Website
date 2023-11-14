function dayDifference(xDateStr) {
    const xDate = new Date(xDateStr)
    const today = new Date()
    return Math.floor((xDate - today) / (1000 * 60 * 60 * 24));
}


function decideDay() {
    const studyDay = "2023-11-14"
    if (dayDifference(studyDay) % 2 === 0) {
        document.getElementById("displayImg").src = "resources/Study.png"
        document.getElementById("blurImg").style.backgroundImage = "url('resources/Study.png')"
        document.getElementById("displayImg").alt = "Study Day"
    }
    else {
        document.getElementById("blurImg").style.backgroundImage = "url('resources/20231114_112741_0000.png')"
        document.getElementById("displayImg").src = "resources/20231114_112741_0000.png"
        document.getElementById("displayImg").alt = "Programming Day"

    }
}

decideDay()