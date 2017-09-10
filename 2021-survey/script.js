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

var income = [
    ["Below $40,000", 30],
    ["$40,000 - $80,000", 37],
    ["$80,000-$125,000", 39],
    ["$125,000-$250,000", 60],
    ["$250,000 - $500,000", 50],
    ["Above $500,000", 27]
];
var incomeData = ["Number of Students", 30, 37, 39, 60, 50, 27];

var hiredAdm = [["Yes", 41], ["No", 207]];

var colorPattern = ["#001A57"];

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

function createBarChart(divElement, data) {
    var chart = c3.generate({
        bindto: divElement,
        data: {
            columns: [data],
            type: 'bar'
        },
        axis: {
            x: {
                type: 'category',
                categories: ["Below $40,000", "$40,000 - $80,000", "$80,000-$125,000", "$125,000-$250,000", "$250,000 - $500,000", "Above $500,000"]
            }
        },
        color: {
            pattern: colorPattern
        }
    });
}

function gaugeChart(divElement,data) {
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
                values: [30, 60, 90, 100]
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

createPieChart("#school", school);
createPieChart("#ethnicity", ethnicity);
displayTestingScores(scores["SAT"], "SAT");
createPieChart("#standardizedTesting", testing, function(data) {
    var test = data["id"];
    displayTestingScores(scores[test], test);
});
createPieChart("#hiredAdm", hiredAdm);
createBarChart("#income", incomeData);