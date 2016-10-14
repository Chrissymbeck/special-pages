var chart = c3.generate({
    bindto: '#barchart',
    data: {
        columns: [
            ['Number of students who plan to vote for a specific candidate', 691, 61, 58, 34, 6]
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
