var currentDate = new Date(2020, 11, 29);
var elements = [{
        date: new Date(2020, 11, 01),
        name: 'there are 29 days until Arrival',
        icon: 'icon-love'
    },
    {
        date: new Date(2020, 11, 10),
        name: 'there are 20 days until Arrival',
        icon: 'icon-chemia'
    },
    {
        date: new Date(2020, 11, 15),
        name: 'there are 15 days until Arrival',
        icon: 'icon-mlotek'
    },
    {
        date: new Date(2020, 11, 20),
        name: 'there are 10 days until Arrival',
        icon: 'icon-learn'
    },
    {
        date: new Date(2020, 11, 30),
        name: 'Congratulations arrived at the destination after 30 days!',
        icon: 'icon-puchar'
    }
];

function getAllDaysFromMonth() {
    var date = currentDate,
        y = date.getFullYear(),
        m = date.getMonth();
    return new Date(y, m + 1, 0).getDate();
}
var daysInMonth = getAllDaysFromMonth() - 1;

function getCurrentDay() {
    var currentDay = currentDate.getDate();
    return ((currentDay - 1) * 100) / daysInMonth;
}
var progressBar = document.getElementById('progress-bar');
progressBar.style.width = getCurrentDay() + '%';

var displayData = function() {
    var counter = 1;
    var progress = document.getElementById('date');
    for (i = 0; i < elements.length; i++) {
        var day = elements[i].date.getDate();
        var month = elements[i].date.getMonth();
        var year = elements[i].date.getFullYear();
        var procent = ((day - 1) * 100) / daysInMonth;
        if (getCurrentDay() > procent) {
            var color = 'bg-blue'
        } else {
            var color = ''
        }

        progress.innerHTML +=
            "<div class='" + color + " circle circle-" + counter + "' style='left: calc(" + procent + "% - 15px)'><div class='" + elements[i].icon + "'></div><div class='info'><span class='data'>" + day + "." + month + "." + year + "</span><span class='name'>" + elements[i].name + "</span></div></div>";

        counter++;
    }
};
displayData();