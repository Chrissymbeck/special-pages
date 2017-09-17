var school = [
    ["Trinity", 230],
    ["Pratt", 50]
];

var ethnicity = [
    ["White", 117],
    ["African American/Black", 26],
    ["Hispanic/Latinx", 34],
    ["Native American or Alaska Native", 2],
    ["Asian", 87],
    ["Native Hawaiian or Pacific Islander", 0, "Other", 14]
];

var testing = [
    ["SAT", 151],
    ["ACT", 190]
]

var scores = {
    "SAT": { "minimum": 1260, "maximum": 1600, "mean": 1492.94, "std-dev": 81.18, "count": 126 },
    "ACT": { "minimum": 26, "maximum": 36, "std-dev": 2.07, "count": 177, "mean": 33.25 }
};

var schoolType = [
    ["Private", 62],
    ["Public", 180],
    ["Home", 3],
    ["Other", 3]
];

var income = [
    ["Below $40,000", 30],
    ["$40,000 - $80,000", 37],
    ["$80,000-$125,000", 39],
    ["$125,000-$250,000", 60],
    ["$250,000 - $500,000", 50],
    ["Above $500,000", 27]
];
var incomeData = ["% of Students", 12.35, 15.23, 16.05, 24.69, 20.58, 11.11];

var hiredAdm = [
    ["Hired private admissions counselor", 41],
    ["Did not hire", 207]
];

var earlyDecision = [
    ["Applied early decision", 124],
    ["Did not apply early decision", 123]
];

var firstChoice = [
    ["First choice college", 160],
    ["Not first choice", 87]
];

var religion = [
    ["Very religious", 11],
    ["Religious", 40],
    ["Somewhat religious", 59],
    ["Not very religious", 66],
    ["Not at all religious", 65]
];

var political = [
    ["Very liberal", 72],
    ["Somewhat liberal", 90],
    ["Moderate", 45],
    ["Somewhat conservative", 25],
    ["Very conservative", 7]
];

var politicalColors = ["#232066", "#3732a0", "#206623", "#f48e86", "#E91D0E"];

var states = {
    'WA': { 'Students': 8, 'fillKey': "8" },
    'DE': { 'Students': 2, 'fillKey': "2" },
    'WI': { 'Students': 4, 'fillKey': "4" },
    'WV': { 'Students': 2, 'fillKey': "2" },
    'HI': { 'Students': 2, 'fillKey': "2" },
    'FL': { 'Students': 54, 'fillKey': "54" },
    'NJ': { 'Students': 12, 'fillKey': "12" },
    'TX': { 'Students': 30, 'fillKey': "30" },
    'LA': { 'Students': 2, 'fillKey': "2" },
    'NC': { 'Students': 90, 'fillKey': "90" },
    'TN': { 'Students': 4, 'fillKey': "4" },
    'NY': { 'Students': 34, 'fillKey': "34" },
    'PA': { 'Students': 14, 'fillKey': "14" },
    'NV': { 'Students': 2, 'fillKey': "2" },
    'VA': { 'Students': 34, 'fillKey': "34" },
    'CO': { 'Students': 12, 'fillKey': "12" },
    'VI': { 'Students': 2, 'fillKey': "2" },
    'CA': { 'Students': 30, 'fillKey': "30" },
    'AL': { 'Students': 8, 'fillKey': "8" },
    'AR': { 'Students': 4, 'fillKey': "4" },
    'IL': { 'Students': 20, 'fillKey': "20" },
    'GA': { 'Students': 24, 'fillKey': "24" },
    'IN': { 'Students': 4, 'fillKey': "4" },
    'IA': { 'Students': 2, 'fillKey': "2" },
    'AZ': { 'Students': 8, 'fillKey': "8" },
    'CT': { 'Students': 2, 'fillKey': "2" },
    'MD': { 'Students': 18, 'fillKey': "18" },
    'MA': { 'Students': 14, 'fillKey': "14" },
    'OH': { 'Students': 10, 'fillKey': "10" },
    'MO': { 'Students': 6, 'fillKey': "6" },
    'MN': { 'Students': 2, 'fillKey': "2" },
    'MI': { 'Students': 10, 'fillKey': "10" },
    'SC': { 'Students': 14, 'fillKey': "14" },
    'KY': { 'Students': 4, 'fillKey': "4" },
    'OR': { 'Students': 4, 'fillKey': "4" },
    'UT': { 'Students': 0, 'fillKey': "0" },
    'WY': { 'Students': 0, 'fillKey': "0" },
    'ID': { 'Students': 0, 'fillKey': "0" },
    'MT': { 'Students': 0, 'fillKey': "0" },
    'ND': { 'Students': 0, 'fillKey': "0" },
    'OK': { 'Students': 0, 'fillKey': "0" },
    'KS': { 'Students': 0, 'fillKey': "0" },
    'NE': { 'Students': 0, 'fillKey': "0" },
    'SD': { 'Students': 0, 'fillKey': "0" },
    'ME': { 'Students': 0, 'fillKey': "0" },
    'NH': { 'Students': 0, 'fillKey': "0" },
    'VT': { 'Students': 0, 'fillKey': "0" },
    'MS': { 'Students': 0, 'fillKey': "0" },
    'NM': { 'Students': 0, 'fillKey': "0" },
    'AK': { 'Students': 0, 'fillKey': "0" }
};

var majorCategories = ['Biology', 'Economics', 'Public Policy', 'Biomedical Engineerings', 'Neuroscience', 'Computer Science', 'Global Health', 'Chemistry', 'Mathematics', 'Political Science', 'Mechanical Engineering', 'Psychology', 'Electrical Engineering', 'Environmental Engineering', 'Statistical Science', 'Environmental Sciences', 'Environmental Sciences and Policy', 'International Comparative Studies', 'Undecided', 'History', 'English', 'Biophysics', 'Global Cultural Studies', 'Art History', 'Interdepartmental Major', 'Dance', 'Civil Engineering', 'Linguistics', 'Cultural Anthropology', 'Physics', 'Asian and Middle Eastern Studies', 'Music', 'Italian', 'Program II', 'Brazilian and Global Portuguese Studies', 'Classical Languages', 'Religious Studies', 'Romance Studies', 'Russian', 'Slavic and Eastern Studies', 'Sociology', 'Medieval and Renaissance Studies', 'Spanish, Latin American and Latino/a Studies', 'Classical Civilization', 'German', 'Earth and Ocean Sciences', 'Theater Studies', 'Gender, Sexuality and Feminist Studies', 'Visual Arts', 'French Studies', 'Visual and Media Studies', 'Evolutionary Anthropology', 'African and African American Studies', 'Philosophy'];

var majors = ["Number of students", 36, 31, 23, 21, 16, 15, 13, 10, 9, 8, 8, 7, 7, 6, 6, 5, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var majorPercents = ["% of Students", 14.52,
12.50,
9.27,
8.47,
6.45,
6.05,
5.24,
4.03,
3.63,
3.23,
3.23,
2.82,
2.82,
2.42,
2.42,
2.02,
1.61,
1.21,
1.21,
1.21,
0.81,
0.81,
0.81,
0.40,
0.40,
0.40,
0.40,
0.40,
0.40,
0.40,
0.40,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00
];

var keys = [88, 50, 34, 30, 24, 20, 18, 14, 12, 10, 8, 7, 6, 5, 4, 3, 2, 1, 0];
var colorKey = {};

// from darkest to lightest
var hexColors = ["#00030b", "#000b24", "#00123e", "#001a57", "#002271", "#00298a", "#0031a4", "#00298b", "#0039be", "#0040d7", "#0048f1", "#0c54ff", "#2566ff", "#3f78ff", "#598aff", "#729cff", "#8caeff", "#a6c0ff", "#d9e4ff"];


var clubsCategories = ['Community Service', 'Athletics', 'Science', 'Music', 'Student Gov\'t', 'Language', 'Math Clubs', 'Other', 'Cultural', 'Political', 'Model UN', 'Drama/Performing-Arts', 'Debate', 'Journalism', 'Religious', 'Academic Quiz Bowl/Decathlon', 'Visual Arts', 'Mock Trial'];

var clubsData = ['Number of students', '224', '158', '107', '91', '90', '88', '83', '78', '76', '56', '54', '51', '48', '39', '39', '35', '34', '15'];

var livingCategories = ["Not interested at all",
    "Slightly interested",
    "Moderately interested",
    "Very interested",
    "Extremely interested"
];

var greekSlg = [
    ["Greek", 70, 62, 57, 33, 26],
    ["SLG", 14, 47, 75, 69, 42]
];

var doneStuff = ["Number of students", 127, 49, 65, 20];


var doneStuffCategories = ["Drank alcohol", "Used drugs", "Had sex", "Obtained a fake ID"];

var tentingCategories = ["Definitely yes", "Probably yes", "Might or might not", "Probably not", "Definitely not"];
var tentingData = [
    ["Definitely yes", 38],
    ["Probably yes", 69],
    ["Might or might not", 96],
    ["Probably not", 29],
    ["Definitely not", 8]
];

var gamesWatched = [
    ["0", 83],
    ["10-Jan", 118],
    ["20-Oct", 27],
    ["20-30", 6],
    ["31+", 7]
];

var os = [
    ["Windows(PC)", 74],
    ["macOS", 165],
    ["Other", 1]
];

var phone = [
    ["iPhone", 198],
    ["Andriod", 40],
    ["Windows", 2],
    ["Other", 0],
    ["Don't use a smartphone", 0]
];

function generateColorKey() {
    for (var i = 0; i < keys.length; i++) {
        colorKey[keys[i].toString()] = hexColors[i];
    }
    console.log(colorKey);
    return colorKey;
}

var dukeBlue = "#001A57";
var otherBlue = "#00298a"
var colorPattern = [dukeBlue, otherBlue];

function createPieChart(divElement, data, callback = null, colorPattern = null) {
    var chart = c3.generate({
        bindto: divElement,
        data: {
            // iris data from R
            columns: data,
            type: 'pie',
            onclick: function(d, i) { console.log("onclick", d, i); },
            onmouseover: function(d, i) {
                if (callback) {
                    callback(d, i);
                } else {
                    console.log("onmouseover");
                    console.log(d);
                }
            },
            onmouseout: function(d, i) { console.log("onmouseout", d, i); }
        },
        color: {
            pattern: colorPattern
        }
    });
}

function createBarChart(divElement, data, categories = [], show = true) {
    var chart = c3.generate({
        bindto: divElement,
        data: {
            columns: data,
            type: 'bar'
        },
        axis: {
            x: {
                type: 'category',
                categories: categories,
                show: show
            }
        },
        color: {
            pattern: colorPattern
        }
    });
}

function createDonut(divElement, data, title = null) {
    var chart = c3.generate({
        bindto: divElement,
        data: {
            columns: data,
            type: 'donut',
            onclick: function(d, i) { console.log("onclick", d, i); },
            onmouseover: function(d, i) { console.log("onmouseover", d, i); },
            onmouseout: function(d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            title: title
        }
    });
}

function gaugeChart(divElement, data) {
    var chart = c3.generate({
        bindto: divElement,
        data: {
            columns: data,
            type: 'gauge',
            onclick: function(d, i) { console.log("onclick", d, i); },
            onmouseover: function(d, i) { console.log("onmouseover", d, i); },
            onmouseout: function(d, i) { console.log("onmouseout", d, i); }
        },
        gauge: {
            //        label: {
            //            format: function(value, ratio) {
            //                return value;
            //            },
            //            show: false // to turn off the min/max labels.
            //        },
            //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
            //    max: 100, // 100 is default
            //    units: ' %',
            //    width: 39 // for adjusting arc thickness
        },
        color: {
            pattern: colorPattern, // the three color levels for the percentage values.
            threshold: {
                //            unit: 'value', // percentage is default
                //            max: 200, // 100 is default
                //values: [30, 60, 90, 100]
            }
        },
    });
}

function displayTestingScores(data, type) {
    $("#testType").html(type);
    $("#mean").html(data["mean"]);
    $("#maximum").html(data["maximum"]);
    $("#minimum").html(data["minimum"]);
    $("#std-dev").html(data["std-dev"]);
    $("#count").html(data["count"]);
}

function createMap() {
    var election = new Datamap({
        scope: 'usa',
        element: document.getElementById('us_map'),
        //responsive: true,
        geographyConfig: {
            highlightBorderColor: dukeBlue,
            popupTemplate: function(geography, data) {
                return '<div class="hoverinfo"><span class="state">' + geography.properties.name +
                    '</span><br><span class="numStudents">Number of students: </span>' + data.Students + "</div>"
            },
            highlightBorderWidth: 3
        },

        fills: generateColorKey(),
        data: states
    });
    election.labels();
}

createMap();
//createPieChart("#doneStuff", doneStuff);
createBarChart("#doneStuff", [doneStuff], doneStuffCategories);
createPieChart("#school", school);
createPieChart("#ethnicity", ethnicity);
createPieChart("#religion", religion);
createPieChart("#political", political, null, politicalColors);
displayTestingScores(scores["SAT"], "SAT");
createPieChart("#schoolType", schoolType);
createPieChart("#standardizedTesting", testing, callback = function(data) {
    var test = data["id"];
    displayTestingScores(scores[test], test);
});
createPieChart("#hiredAdm", hiredAdm);
createBarChart("#income", [incomeData], ["Below $40,000", "$40,000 - $80,000", "$80,000-$125,000", "$125,000-$250,000", "$250,000 - $500,000", "Above $500,000"]);
createBarChart("#majors", [majorPercents], majorCategories);
createBarChart("#clubs", [clubsData], clubsCategories);
createPieChart("#earlyDecision", earlyDecision);
createPieChart("#firstChoice", firstChoice);
createBarChart("#livingGroup", greekSlg, livingCategories);
createPieChart("#tenting", tentingData);
createPieChart("#gamesWatched", gamesWatched);
createDonut("#os", os, "Choice of OS");
createDonut("#phone", phone, "Cell phone");