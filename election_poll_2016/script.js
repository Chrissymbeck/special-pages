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
        "Hispanic": 49
    },
    "Year": {
        "2020": 208,
        "2019": 165,
        "2018": 153,
        "2017": 165
    }
}

var undecided = {
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
        "Hispanic": 2
    },
    "Year": {
        "2020": 17,
        "2019": 16,
        "2018": 12,
        "2017": 16
    }
}

var johnson = {
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
        "Hispanic": 0
    },
    "Year": {
        "2020": 12,
        "2019": 10,
        "2018": 10,
        "2017": 2
    }
}

var johnson = {
    "School": {
        "Trinity": 25,
        "Pratt": 9
    },
    "Gender": {
        "Female": 5,
        "Male": 28
    },
    "Party" {
        "Democratic": 0,
        "Republican": 17,
        "Unaffiliated/Independent": 7,
        "Libertarian": 9
    },
    "Race": {
        "White": 29,
        "Black": 1,
        "Asian": 0,
        "Hispanic": 0
    },
    "Year": {
        "2020": 12,
        "2019": 10,
        "2018": 10,
        "2017": 2
    }
}

var other = {
    "School": {
        "Trinity": 6,
        "Pratt": 0
    },
    "Gender": {
        "Female": 1,
        "Male": 5
    },
    "Party" {
        "Democratic": 2,
        "Republican": 2,
        "Unaffiliated/Independent": 2,
        "Libertarian": 0
    },
    "Race": {
        "White": 2,
        "Black": 0,
        "Asian": 1,
        "Hispanic": 1
    },
    "Year": {
        "2020": 0,
        "2019": 1,
        "2018": 4,
        "2017": 1
    }
}

var chart = c3.generate({
    bindto: '#barchart',
    data: {
        columns: [
            ['Number of students who plan to vote for a specific candidate', 691, 61, 58, 34, 6],
            ["Trinity", 558, 42, 46, 25, 6],
            ["Pratt", 133, 19, 12, 9, 0],
            ["Female", 400, 31, 15, 5, 1],
            ["Male", 286, 29, 41, 28, 5],
            ["Democratic", 488, 7, 0, 0, 2],
            ["Republican", ]
        ],
        type: 'bar',
        onclick: function(d, element) { console.log(element); }
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

var schoolType = [
    []
]

createPieChart("#piechart", )

function createPieChart(divElement, arrayOfData) {
    var chart = c3.generate({
        bindto: divElement,
        data: {
            columns: arrayOfData,
            type: 'pie',
            onclick: function(d, i) { console.log("onclick", d, i); },
            onmouseover: function(d, i) { console.log("onmouseover", d, i); },
            onmouseout: function(d, i) { console.log("onmouseout", d, i); }
        }
    });

}
