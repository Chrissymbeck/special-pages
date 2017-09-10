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
    "ACT": { "minimum": 26, "maximum": 36, "std-dev": 2.07, "count": 177, "mean":33.25 }
};

function createPieChart(divElement, data, callback = null) {
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
        }
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

createPieChart("#school", school);
createPieChart("#ethnicity", ethnicity);
displayTestingScores(scores["SAT"], "SAT");
createPieChart("#standardizedTesting", testing, function(data) {
    var test = data["id"];
    displayTestingScores(scores[test], test);
});