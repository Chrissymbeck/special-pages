var group=[];
var trump = {
    "School": {
        "Trinity": 46,
        "Pratt": 12,
    },
    "Gender": {
        "Female": 15,
        "Male": 41,
    },
    "Party": {
        "Democratic": 0,
        "Republican": 46,
        "Unaffiliated/Independent": 9,
        "Libertarian": 1
    },
    "Race": {
        "White": 41,
        "Black": 1,
        "Asian": 7,
        "Hispanic": 4,
        "Other": 3
    },
    "Year": {
        "2020": 14,
        "2019": 12,
        "2018": 18,
        "2017": 14
    }
}

var clinton = {
    "School": {
        "Trinity": 558,
        "Pratt": 133,
    },
    "Gender": {
        "Female": 400,
        "Male": 286
    },
    "Party": {
        "Democratic": 488,
        "Republican": 44,
        "Unaffiliated/Independent": 136,
        "Libertarian": 16
    },
    "Race": {
        "White": 348,
        "Black": 74,
        "Asian": 196,
        "Hispanic": 49,
        "Other": 14
    },
    "Year": {
        "2020": 208,
        "2019": 165,
        "2018": 153,
        "2017": 165
    }
}

var undecided = {
    "Name": "Undecided",
    "School": {
        "Trinity": 42,
        "Pratt": 19
    },
    "Gender": {
        "Female": 31,
        "Male": 29
    },
    "Party": {
        "Democratic": 7,
        "Republican": 26,
        "Unaffiliated/Independent": 21,
        "Libertarian": 6
    },
    "Race": {
        "White": 39,
        "Black": 2,
        "Asian": 15,
        "Hispanic": 2,
        "Other": 2
    },
    "Year": {
        "2020": 17,
        "2019": 16,
        "2018": 12,
        "2017": 16
    }
}

var johnson = {
    "Name": "Gary Johnson",
    "School": {
        "Trinity": 25,
        "Pratt": 9
    },
    "Gender": {
        "Female": 5,
        "Male": 28
    },
    "Party": {
        "Democratic": 0,
        "Republican": 17,
        "Unaffiliated/Independent": 7,
        "Libertarian": 9
    },
    "Race": {
        "White": 29,
        "Black": 1,
        "Asian": 0,
        "Hispanic": 0,
        "Other": 0
    },
    "Year": {
        "2020": 12,
        "2019": 10,
        "2018": 10,
        "2017": 2
    }
}

var other = {
        "Name": "Other",
        "School": {
            "Trinity": 6,
            "Pratt": 0
        },
        "Gender": {
            "Female": 1,
            "Male": 5
        },
        "Party": {
            "Democratic": 2,
            "Republican": 2,
            "Unaffiliated/Independent": 2,
            "Libertarian": 0
        },
        "Race": {
            "White": 2,
            "Black": 0,
            "Asian": 1,
            "Hispanic": 1,
            "Other": 2
        },
        "Year": {
            "2020": 0,
            "2019": 1,
            "2018": 4,
            "2017": 1
        }
    }
    //main bar chart

var candidates = [clinton, trump, johnson, undecided, other];
console.log(candidates);

createBarChart("#barchart", "main");

function graph(type) {

    $(".name").show();
    $(".pie").empty();
    for (var i = 0; i < candidates.length; i++) {
        if (type == "school") {
            createPieChart("#piechart_" + i, candidates[i].School);
        } else if (type == "gender") {
            createPieChart("#piechart_" + i, candidates[i].Gender);
        } else if (type == "race") {
            createPieChart("#piechart_" + i, candidates[i].Race);
        } else if (type == "party") {
            createPieChart("#piechart_" + i, candidates[i].Party);
        } else if (type == "year") {
            createPieChart("#piechart_" + i, candidates[i].Year);
        }
    }
}

$(".name").hide();


function graph_bar(type) {
    var divElement = "#barchart";
    $(".name").show();
    $(".pie").empty();
    createBarChart(divElement, type);
}


function parseBarChartData(type) {
    var data = [];
    for (var key in candidates[0][type]) {
        data.push([key, candidates[0][type][key], candidates[1][type][key], candidates[2][type][key], candidates[3][type][key], candidates[4][type][key]]);
        group.push(key);
    }

    return data;
}

function createBarChart(divElement, type) {
    console.log(group);
    $("#barchart").empty();
    if (type == "main") {
        arrayOfData = [
            ['Number of students who plan to vote for a specific candidate', 691, 61, 58, 34, 6]
        ];
    } else {
        arrayOfData = parseBarChartData(type);
    }
    var chart = c3.generate({
        bindto: divElement,
        data: {
            columns: arrayOfData,
            type: 'bar',
            groups: [group]
        },
        axis: {
            x: {
                type: 'category',
                categories: ['Hillary Clinton', 'Undecided', 'Donald Trump', 'Gary Johnson', 'Other']
            },
            y: {
                label: {
                    text: "Number of students who plan to vote for a candidate",
                    position: 'outer-middle'
                }
            }
        },
        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
        }
    });

    group=[];
}


//createPieChart("#piechart", clinton.Party);

function createPieChart(divElement, dataObject) {
    var arrayOfData = [];
    for (var key in dataObject) {
        arrayOfData.push([key, dataObject[key]]);
    }
    console.log("arrayOfData");
    console.log(arrayOfData);
    var chart = c3.generate({
        bindto: divElement,
        data: {
            columns: arrayOfData,
            type: 'pie'
        }
    });

}
