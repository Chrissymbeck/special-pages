var group = [];
var trump = {
    "Name": "Donald Trump",
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
    },
    "Group": {
        "Sorority": 4,
        "Fraternity": 11,
        "Independent House": 15,
        "None": 26,
        "Selective Living Group": 2
    }
}

var clinton = {
    "Name": "Hillary Clinton",
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
    },
    "Group": {
        "Sorority": 110,
        "Fraternity": 64,
        "Independent House": 119,
        "None": 300,
        "Selective Living Group": 96
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
    },
    "Group": {
        "Sorority": 7,
        "Fraternity": 7,
        "Independent House": 12,
        "None": 32,
        "Selective Living Group": 3
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
    },
    "Group": {
        "Sorority": 1,
        "Fraternity": 13,
        "Independent House": 2,
        "None": 14,
        "Selective Living Group": 4
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
        },
        "Group": {
            "Sorority": 0,
            "Fraternity": 0,
            "Independent House": 4,
            "None": 2,
            "Selective Living Group": 0
        }
    }
    //main bar chart

var candidates = [clinton, trump, johnson, undecided, other];
console.log(candidates);

createBarChart("#barchart", "main");
createPieChart("#piechart_0", [["Hillary Clinton", 691], ["Undecided", 61], ["Donald Trump", 58], ["Gary Johnson", 34], ["Other", 6 ]]);

function graph(type) {

    $(".name").show();
    $(".pie").empty();
    $(".name").empty();
    graph_bar(type);
    if (type == "main") {
        console.log("type is main");
        $(".name").hide();
        createPieChart("#piechart_0", [["Hillary Clinton", 691], ["Undecided", 61], ["Donald Trump", 58], ["Gary Johnson", 34], ["Other", 6 ]]);
    } else {
        createPieCharts(type);
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

    group = [];
}


function parsePieChartData(type, key) {
    var data = [];
    //for (var key in candidates[0][type]) {
        for (var j = 0; j < candidates.length; j++) {
            data.push([candidates[j].Name,candidates[j][type][key]]);
        }
    //}

    return data;
}

function createPieChart(divElement, arrayOfData) {
    console.log(arrayOfData);
    console.log("Created pie chart!");
    var chart = c3.generate({
        bindto: divElement,
        data: {
            columns: arrayOfData,
            type: 'pie'
        }
    });

}

function createPieCharts(type) {
    var dataObject = clinton[type];
    var i = 0;
    for (var key in dataObject) {
        var arrayOfData = parsePieChartData(type, key);
        $("#pielabel_"+i).html(key);
        createPieChart("#piechart_" + i, arrayOfData);
        console.log("id: #piechart_" + i)
        i++;
    }
}
