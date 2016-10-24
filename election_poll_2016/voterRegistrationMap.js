var data = { 'WA': { 'voterRegistrations': 5, 'fillKey': '5' }, 'DE': { 'voterRegistrations': 1, 'fillKey': '1' }, 'WI': { 'voterRegistrations': 3, 'fillKey': '3' }, 'WV': { 'voterRegistrations': 0, 'fillKey': '0' }, 'HI': { 'voterRegistrations': 1, 'fillKey': '1' }, 'FL': { 'voterRegistrations': 58, 'fillKey': '58' }, 'WY': { 'voterRegistrations': 0, 'fillKey': '0' }, 'NH': { 'voterRegistrations': 1, 'fillKey': '1' }, 'NJ': { 'voterRegistrations': 8, 'fillKey': '8' }, 'NM': { 'voterRegistrations': 3, 'fillKey': '3' }, 'TX': { 'voterRegistrations': 12, 'fillKey': '12' }, 'LA': { 'voterRegistrations': 1, 'fillKey': '1' }, 'AK': { 'voterRegistrations': 1, 'fillKey': '1' }, 'NC': { 'voterRegistrations': 544, 'fillKey': '544' }, 'ND': { 'voterRegistrations': 0, 'fillKey': '0' }, 'NE': { 'voterRegistrations': 0, 'fillKey': '0' }, 'TN': { 'voterRegistrations': 4, 'fillKey': '4' }, 'NY': { 'voterRegistrations': 15, 'fillKey': '15' }, 'PA': { 'voterRegistrations': 16, 'fillKey': '16' }, 'RI': { 'voterRegistrations': 0, 'fillKey': '0' }, 'NV': { 'voterRegistrations': 1, 'fillKey': '1' }, 'VA': { 'voterRegistrations': 21, 'fillKey': '21' }, 'CO': { 'voterRegistrations': 6, 'fillKey': '6' }, 'CA': { 'voterRegistrations': 17, 'fillKey': '17' }, 'AL': { 'voterRegistrations': 3, 'fillKey': '3' }, 'AR': { 'voterRegistrations': 1, 'fillKey': '1' }, 'VT': { 'voterRegistrations': 0, 'fillKey': '0' }, 'IL': { 'voterRegistrations': 9, 'fillKey': '9' }, 'GA': { 'voterRegistrations': 9, 'fillKey': '9' }, 'IN': { 'voterRegistrations': 1, 'fillKey': '1' }, 'IA': { 'voterRegistrations': 0, 'fillKey': '0' }, 'MA': { 'voterRegistrations': 4, 'fillKey': '4' }, 'AZ': { 'voterRegistrations': 9, 'fillKey': '9' }, 'ID': { 'voterRegistrations': 0, 'fillKey': '0' }, 'CT': { 'voterRegistrations': 4, 'fillKey': '4' }, 'ME': { 'voterRegistrations': 0, 'fillKey': '0' }, 'MD': { 'voterRegistrations': 8, 'fillKey': '8' }, 'OK': { 'voterRegistrations': 1, 'fillKey': '1' }, 'OH': { 'voterRegistrations': 17, 'fillKey': '17' }, 'UT': { 'voterRegistrations': 1, 'fillKey': '1' }, 'MO': { 'voterRegistrations': 4, 'fillKey': '4' }, 'MN': { 'voterRegistrations': 3, 'fillKey': '3' }, 'MI': { 'voterRegistrations': 3, 'fillKey': '3' }, 'KS': { 'voterRegistrations': 4, 'fillKey': '4' }, 'MT': { 'voterRegistrations': 1, 'fillKey': '1' }, 'MS': { 'voterRegistrations': 0, 'fillKey': '0' }, 'SC': { 'voterRegistrations': 7, 'fillKey': '7' }, 'KY': { 'voterRegistrations': 2, 'fillKey': '2' }, 'OR': { 'voterRegistrations': 0, 'fillKey': '0' }, 'SD': { 'voterRegistrations': 0, 'fillKey': '0' } };

var colorKey = { '0': '#f1ddf6', '1': '#eaccf1', '2': '#e3bbed', '3': '#dcaae9', '4': '#d599e4', '5': '#ce88e0', '6': '#c776db', '7': '#c066d7', '8': '#ba55d3', '9': '#a74cbd', '12': '#9444a8', '15': '#823b93', '16': '#6f337e', '17': '#5d2a69', '21': '#4a2254', '544': '#25112a', '58': '#37193f' }

function createMap() {
    var election = new Datamap({
        scope: 'usa',
        element: document.getElementById('us_map'),
        //responsive: true,
        geographyConfig: {
            highlightBorderColor: '#5900b2',
            popupTemplate: function(geography, data) {
                console.log(data);
                return '<div class="hoverinfo"><span class="state">' + geography.properties.name +
                    '</span><br> Number of voter registrations: <span class="voterRegist">' + data.voterRegistrations + '</span>'
            },
            highlightBorderWidth: 3
        },

        fills: colorKey,
        data: data
    });
    election.labels();
}

createMap();
//election.resize();
