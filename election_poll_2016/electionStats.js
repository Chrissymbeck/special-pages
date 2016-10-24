/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
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
        "Other": 1,
        "Prefer not to disclose": 1
    },
    "Party": {
        "Democratic": 0,
        "Republican": 46,
        "Unaffiliated/Independent": 9,
        "Libertarian": 1,
        "Green": 2
    },
    "Race": {
        "White": 41,
        "Black": 1,
        "Asian": 7,
        "Hispanic": 4,
        "American Indian or Alaska Native": 0,
        "Native Hawaiian or Pacific Islander": 1,
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
        "Male": 286,
        "Other": 4,
        "Prefer not to disclose": 1
    },
    "Party": {
        "Democratic": 488,
        "Republican": 44,
        "Unaffiliated/Independent": 136,
        "Libertarian": 16,
        "Green": 6
    },
    "Race": {
        "White": 348,
        "Black": 74,
        "Asian": 196,
        "Hispanic": 49,
        "American Indian or Alaska Native": 5,
        "Native Hawaiian or Pacific Islander": 3,
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

var undecided_prez = {
    "Name": "Undecided",
    "School": {
        "Trinity": 42,
        "Pratt": 19
    },
    "Gender": {
        "Female": 31,
        "Male": 29,
        "Other": 1,
        "Prefer not to disclose": 0

    },
    "Party": {
        "Democratic": 7,
        "Republican": 26,
        "Unaffiliated/Independent": 21,
        "Libertarian": 6,
        "Green": 0
    },
    "Race": {
        "White": 39,
        "Black": 2,
        "Asian": 15,
        "Hispanic": 2,
        "American Indian or Alaska Native": 0,
        "Native Hawaiian or Pacific Islander": 0,
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
        "Male": 28,
        "Other": 0,
        "Prefer not to disclose": 1
    },
    "Party": {
        "Democratic": 0,
        "Republican": 17,
        "Unaffiliated/Independent": 7,
        "Libertarian": 9,
        "Green": 0
    },
    "Race": {
        "White": 29,
        "Black": 1,
        "Asian": 0,
        "Hispanic": 0,
        "American Indian or Alaska Native": 0,
        "Native Hawaiian or Pacific Islander": 0,
        "Other": 4
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

var novote_prez = {
    "Name": "Do not intend to vote",
    "School": {
        "Trinity": 50,
        "Pratt": 11
    },
    "Gender": {
        "Female": 33,
        "Male": 28,
        "Other": 0,
        "Prefer not to disclose": 0
    },
    "Party": {
        "Democratic": 20,
        "Republican": 6,
        "Unaffiliated/Independent": 26,
        "Libertarian": 4,
        "Green": 0
    },
    "Race": {
        "White": 19,
        "Black": 0,
        "Asian": 27,
        "Hispanic": 6,
        "American Indian or Alaska Native": 0,
        "Native Hawaiian or Pacific Islander": 0,
        "Other": 3
    },
    "Year": {
        "2020": 18,
        "2019": 15,
        "2018": 13,
        "2017": 15
    },
    "Group": {
        "Sorority": 3,
        "Fraternity": 8,
        "Independent House": 10,
        "None": 29,
        "Selective Living Group": 11
    }
}

var other_prez = {
        "Name": "Other",
        "School": {
            "Trinity": 8,
            "Pratt": 0
        },
        "Gender": {
            "Female": 2,
            "Male": 6,
            "Other": 0,
            "Prefer not to disclose": 0
        },
        "Party": {
            "Democratic": 4,
            "Republican": 2,
            "Unaffiliated/Independent": 2,
            "Libertarian": 0,
            "Green": 0
        },
        "Race": {
            "White": 4,
            "Black": 0,
            "Asian": 1,
            "Hispanic": 1,
            "American Indian or Alaska Native": 0,
            "Native Hawaiian or Pacific Islander": 0,
            "Other": 2
        },
        "Year": {
            "2020": 2,
            "2019": 1,
            "2018": 4,
            "2017": 1
        },
        "Group": {
            "Sorority": 0,
            "Fraternity": 0,
            "Independent House": 4,
            "None": 4,
            "Selective Living Group": 0
        }
    }
    //main bar chart

var mainData = [
    ["Hillary Clinton", 691],
    ["Donald Trump", 58],
    ["Undecided", 61],
    ["Gary Johnson", 34],
    ["Other", 6],
    ["Do not intend to vote", 61]
]

var candidates = [clinton, trump, undecided_prez, johnson, other_prez, novote_prez];

var xcategories = ['Hillary Clinton', 'Donald Trump', 'Undecided', 'Gary Johnson', 'Other', "Do not intend to vote"];

var numOnlyTotals = ['Number of students who plan to vote for a specific candidate', 691, 58, 61, 34, 6, 61];

var manypies = false;
console.log(candidates);

createBarChart("#barchart", "main");
createPieChart("#piechart_0", mainData);

function graph(type) {

    $(".name").show();
    $(".pie").empty();
    $(".name").empty();
    graph_bar(type);
    if (type == "main") {
        console.log("type is main");
        $(".name").hide();
        createPieChart("#piechart_0", mainData);
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


function createBarChart(divElement, type, categories = xcategories) {
    $("#barchart").empty();
    if (type == "main") {
        arrayOfData = [
            numOnlyTotals
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
                categories: xcategories
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
        data.push([candidates[j].Name, candidates[j][type][key]]);
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
        },
        color: {
            pattern: ['#000096', '#960000', '#333333', '#FFC300', '#AAAAAA', '#14413c']
        }
    });

}

function createPieCharts(type) {
    var dataObject = clinton[type];
    var i = 0;

    if (Object.keys(dataObject).length > 3) {
        manypies = true;
    } else {
        manypies = false;
    }
    for (var key in dataObject) {
        var arrayOfData = parsePieChartData(type, key);
        $("#pielabel_" + i).html("<h3 class='pieTitle'>"+key+"</h3>");
        createPieChart("#piechart_" + i, arrayOfData);
        i++;
    }
}

function emptyEverything() {
    $(".pie").empty();
    $(".name").empty();
    $('#barchart').empty();
    $("#hillaryWordCloud").empty();
    $("#trumpWordCloud").empty();
    $("#us_map").empty();
}

function createNational() {
    candidates = [clinton, trump, undecided_prez, johnson, other_prez, novote_prez];
    xcategories = ['Hillary Clinton', 'Donald Trump', 'Undecided', 'Gary Johnson', 'Other', "Do not intend to vote"];
    numOnlyTotals = ['Number of students who plan to vote for a specific candidate', 691, 58, 61, 34, 6, 61];
    $(".title").show();
    emptyEverything();
    createBarChart("#barchart", "main");
    createPieChart("#piechart_0", mainData);
    drawWordCloud(hillaryWords, "#hillaryWordCloud", hillaryFill);
    drawWordCloud(trumpWords, "#trumpWordCloud", trumpFill);
    createMap();
}


function createSenator() {
    candidates = [burr, ross, other_sen, undecided_sen, novote_sen];
    xcategories = ["Richard Burr", "Deborah Ross", "Other", "Undecided", "Do not intend to vote"]
    numOnlyTotals = ['Number of students who plan to vote for a specific candidate', 43, 207, 3, 188, 96];
    mainData = [
        ["Richard Burr", 43],
        ["Deborah Ross", 207],
        ["Other", 3],
        ["Undecided", 188],
        ["Do not intend to vote", 96]
    ];
    emptyEverything();
    $(".title").hide();
    createBarChart("#barchart", "main", xcategories);
    createPieChart("#piechart_0", mainData);
}

function createGovernor() {
    candidates = [cooper, mccrory, other_gov, undecided_gov, novote_gov];
    xcategories = [cooper["Name"], mccrory["Name"], "Other", "Undecided", "Do not intend to vote"]
    numOnlyTotals = ['Number of students who plan to vote for a specific candidate', 247, 32, 4, 159, 96];
    mainData = [
        [cooper["Name"], 247],
        [mccrory["Name"], 32],
        ["Other", 4],
        ["Undecided", 159],
        ["Do not intend to vote", 96]
    ];
    emptyEverything();
    $(".title").hide();
    createBarChart("#barchart", "main", xcategories);
    createPieChart("#piechart_0", mainData);
}

//hacky method to make sure the gap stays
(function() {
    setInterval(function() {
        if (manypies) {
            $("#clouds").css("margin-top", "700px");
        }
    }, 500);
})();
