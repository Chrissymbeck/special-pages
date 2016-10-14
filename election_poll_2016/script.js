var chart = c3.generate({
    bindto: '#barchart',
    data: {
        columns: [
            ['Number of students who plan to vote for a specific candidate', 691, 61, 58, 34, 6],
            ["Trinity",558,42,46,25,6],
            ["Pratt",133,19,12,9,0],
            ["Female",400,31,15,5,1],
            ["Male",286,29,41,28,5]
        ],
        type: 'bar'
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
