var data = { 'WA': { 'voterRegistrations': 5, 'fillKey': '5' }, 'DE': { 'voterRegistrations': 1, 'fillKey': '1' }, 'WI': { 'voterRegistrations': 3, 'fillKey': '3' }, 'WV': { 'voterRegistrations': 0, 'fillKey': '0' }, 'HI': { 'voterRegistrations': 1, 'fillKey': '1' }, 'FL': { 'voterRegistrations': 58, 'fillKey': '58' }, 'WY': { 'voterRegistrations': 0, 'fillKey': '0' }, 'NH': { 'voterRegistrations': 1, 'fillKey': '1' }, 'NJ': { 'voterRegistrations': 8, 'fillKey': '8' }, 'NM': { 'voterRegistrations': 3, 'fillKey': '3' }, 'TX': { 'voterRegistrations': 12, 'fillKey': '12' }, 'LA': { 'voterRegistrations': 1, 'fillKey': '1' }, 'AK': { 'voterRegistrations': 1, 'fillKey': '1' }, 'NC': { 'voterRegistrations': 544, 'fillKey': '544' }, 'ND': { 'voterRegistrations': 0, 'fillKey': '0' }, 'NE': { 'voterRegistrations': 0, 'fillKey': '0' }, 'TN': { 'voterRegistrations': 4, 'fillKey': '4' }, 'NY': { 'voterRegistrations': 15, 'fillKey': '15' }, 'PA': { 'voterRegistrations': 16, 'fillKey': '16' }, 'RI': { 'voterRegistrations': 0, 'fillKey': '0' }, 'NV': { 'voterRegistrations': 1, 'fillKey': '1' }, 'VA': { 'voterRegistrations': 21, 'fillKey': '21' }, 'CO': { 'voterRegistrations': 6, 'fillKey': '6' }, 'CA': { 'voterRegistrations': 17, 'fillKey': '17' }, 'AL': { 'voterRegistrations': 3, 'fillKey': '3' }, 'AR': { 'voterRegistrations': 1, 'fillKey': '1' }, 'VT': { 'voterRegistrations': 0, 'fillKey': '0' }, 'IL': { 'voterRegistrations': 9, 'fillKey': '9' }, 'GA': { 'voterRegistrations': 9, 'fillKey': '9' }, 'IN': { 'voterRegistrations': 1, 'fillKey': '1' }, 'IA': { 'voterRegistrations': 0, 'fillKey': '0' }, 'MA': { 'voterRegistrations': 4, 'fillKey': '4' }, 'AZ': { 'voterRegistrations': 9, 'fillKey': '9' }, 'ID': { 'voterRegistrations': 0, 'fillKey': '0' }, 'CT': { 'voterRegistrations': 4, 'fillKey': '4' }, 'ME': { 'voterRegistrations': 0, 'fillKey': '0' }, 'MD': { 'voterRegistrations': 8, 'fillKey': '8' }, 'OK': { 'voterRegistrations': 1, 'fillKey': '1' }, 'OH': { 'voterRegistrations': 17, 'fillKey': '17' }, 'UT': { 'voterRegistrations': 1, 'fillKey': '1' }, 'MO': { 'voterRegistrations': 4, 'fillKey': '4' }, 'MN': { 'voterRegistrations': 3, 'fillKey': '3' }, 'MI': { 'voterRegistrations': 3, 'fillKey': '3' }, 'KS': { 'voterRegistrations': 4, 'fillKey': '4' }, 'MT': { 'voterRegistrations': 1, 'fillKey': '1' }, 'MS': { 'voterRegistrations': 0, 'fillKey': '0' }, 'SC': { 'voterRegistrations': 7, 'fillKey': '7' }, 'KY': { 'voterRegistrations': 2, 'fillKey': '2' }, 'OR': { 'voterRegistrations': 0, 'fillKey': '0' }, 'SD': { 'voterRegistrations': 0, 'fillKey': '0' } };
for (var key in data){
    console.log(key)
}
var colorKey = {'12': '#ffffff', '15': '#e7fcf4', '21': '#b2f6db', '17': '#99f3d0', '16': '#7ff0c4', '1': '#4ceaad', '0': '#32e7a1', '3': '#19e495', '2': '#00e18a', '5': '#00fa9a', '4': '#00e18a', '7': '#66edb8', '6': '#00af6b', '9': '#00965c', '8': '#007d4d', '544': '#00c87b', '58': '#00643d'}

var election = new Datamap({
    scope: 'usa',
    element: document.getElementById('us_map'),
    geographyConfig: {
        highlightBorderColor: '#5900b2',
        popupTemplate: function(geography, data) {
        	console.log(data);
            return '<div class="hoverinfo"><span class="state">' + geography.properties.name +
                '</span><br> Number of voter registrations: <span class="voterRegist">' + data.voterRegistrations+'</span>'
        },
        highlightBorderWidth: 3
    },

    fills: colorKey,
    data: data
});
election.labels();
