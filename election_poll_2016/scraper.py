import csv
hillaryString = ''
trumpString = ''
voterRegistration={ 'New York': 15, 'Oklahoma': 1, 'Delaware': 1, 'Minnesota': 3, 'Illinois': 9, 'Arkansas': 1, 'South Carolina': 7, 'Indiana': 1, 'Maryland': 8, 'Louisiana': 1, 'Texas': 12, 'New Hampshire': 1, 'Arizona': 9, 'Wisconsin': 3, 'Michigan': 3, 'Kansas': 4, 'Utah': 1, 'Virginia': 21, 'Connecticut': 4, 'Montana': 1, 'California': 17, 'Massachusetts': 4, 'New Mexico': 3, 'Georgia': 9, 'Pennsylvania': 16, 'North Carolina': 544, 'Florida': 58, 'Hawaii': 1, 'Kentucky': 2, 'Alaska': 1, 'Missouri': 4, 'Ohio': 17, 'Alabama': 3, 'Colorado': 6, 'New Jersey': 8, 'Washington': 5, 'Tennessee': 4, 'Nevada': 1 }
us_state_abbrev = {
    'alabama': 'AL',
    'alaska': 'AK',
    'arizona': 'AZ',
    'arkansas': 'AR',
    'california': 'CA',
    'colorado': 'CO',
    'connecticut': 'CT',
    'delaware': 'DE',
    'florida': 'FL',
    'georgia': 'GA',
    'hawaii': 'HI',
    'idaho': 'ID',
    'illinois': 'IL',
    'indiana': 'IN',
    'iowa': 'IA',
    'kansas': 'KS',
    'kentucky': 'KY',
    'louisiana': 'LA',
    'maine': 'ME',
    'maryland': 'MD',
    'massachusetts': 'MA',
    'michigan': 'MI',
    'minnesota': 'MN',
    'mississippi': 'MS',
    'missouri': 'MO',
    'montana': 'MT',
    'nebraska': 'NE',
    'nevada': 'NV',
    'new hampshire': 'NH',
    'new jersey': 'NJ',
    'new mexico': 'NM',
    'new york': 'NY',
    'north carolina': 'NC',
    'north dakota': 'ND',
    'ohio': 'OH',
    'oklahoma': 'OK',
    'oregon': 'OR',
    'pennsylvania': 'PA',
    'rhode island': 'RI',
    'south carolina': 'SC',
    'south dakota': 'SD',
    'tennessee': 'TN',
    'texas': 'TX',
    'utah': 'UT',
    'vermont': 'VT',
    'virginia': 'VA',
    'washington': 'WA',
    'west virginia': 'WV',
    'wisconsin': 'WI',
    'wyoming': 'WY',
}

def read_parse_csv():
	with open('election_poll_anon.csv', 'rb') as csvfile:
		spamreader = csv.reader(csvfile, delimiter=',')
		for row in spamreader:
			if not row[11]=='' and row[11]!='qid13':
				print row[11]
				if row[11].rstrip() in voterRegistration:
					print "in voterRegistration!"
					voterRegistration[row[11].rstrip()]=voterRegistration[row[11].rstrip()]+1;
				else:
					voterRegistration[row[11].rstrip()]=1
			'''
			if not row[14]=='':
				hillaryString = hillaryString +' '+ row[14].lower()

			if not row[15]=='':
				trumpString = trumpString + ' '+row[15].lower().replace(',', '')
			'''
'''
realVoterReg={}

voterRegistration=dict((k.lower(), v) for k,v in voterRegistration.iteritems())

for key in us_state_abbrev:
	if key.lower() in voterRegistration:
		realVoterReg[us_state_abbrev[key.lower()]]={"voterRegistrations":voterRegistration[key],"fillKey":str(voterRegistration[key])}
	else:
		realVoterReg[us_state_abbrev[key.lower()]]={"voterRegistrations":0, "fillKey":"0"}

#line 11 is voter registration location

print realVoterReg
'''

data={ 'WA': { 'voterRegistrations': 5, 'fillKey': '5' }, 'DE': { 'voterRegistrations': 1, 'fillKey': '1' }, 'WI': { 'voterRegistrations': 3, 'fillKey': '3' }, 'WV': { 'voterRegistrations': 0, 'fillKey': '0' }, 'HI': { 'voterRegistrations': 1, 'fillKey': '1' }, 'FL': { 'voterRegistrations': 58, 'fillKey': '58' }, 'WY': { 'voterRegistrations': 0, 'fillKey': '0' }, 'NH': { 'voterRegistrations': 1, 'fillKey': '1' }, 'NJ': { 'voterRegistrations': 8, 'fillKey': '8' }, 'NM': { 'voterRegistrations': 3, 'fillKey': '3' }, 'TX': { 'voterRegistrations': 12, 'fillKey': '12' }, 'LA': { 'voterRegistrations': 1, 'fillKey': '1' }, 'AK': { 'voterRegistrations': 1, 'fillKey': '1' }, 'NC': { 'voterRegistrations': 544, 'fillKey': '544' }, 'ND': { 'voterRegistrations': 0, 'fillKey': '0' }, 'NE': { 'voterRegistrations': 0, 'fillKey': '0' }, 'TN': { 'voterRegistrations': 4, 'fillKey': '4' }, 'NY': { 'voterRegistrations': 15, 'fillKey': '15' }, 'PA': { 'voterRegistrations': 16, 'fillKey': '16' }, 'RI': { 'voterRegistrations': 0, 'fillKey': '0' }, 'NV': { 'voterRegistrations': 1, 'fillKey': '1' }, 'VA': { 'voterRegistrations': 21, 'fillKey': '21' }, 'CO': { 'voterRegistrations': 6, 'fillKey': '6' }, 'CA': { 'voterRegistrations': 17, 'fillKey': '17' }, 'AL': { 'voterRegistrations': 3, 'fillKey': '3' }, 'AR': { 'voterRegistrations': 1, 'fillKey': '1' }, 'VT': { 'voterRegistrations': 0, 'fillKey': '0' }, 'IL': { 'voterRegistrations': 9, 'fillKey': '9' }, 'GA': { 'voterRegistrations': 9, 'fillKey': '9' }, 'IN': { 'voterRegistrations': 1, 'fillKey': '1' }, 'IA': { 'voterRegistrations': 0, 'fillKey': '0' }, 'MA': { 'voterRegistrations': 4, 'fillKey': '4' }, 'AZ': { 'voterRegistrations': 9, 'fillKey': '9' }, 'ID': { 'voterRegistrations': 0, 'fillKey': '0' }, 'CT': { 'voterRegistrations': 4, 'fillKey': '4' }, 'ME': { 'voterRegistrations': 0, 'fillKey': '0' }, 'MD': { 'voterRegistrations': 8, 'fillKey': '8' }, 'OK': { 'voterRegistrations': 1, 'fillKey': '1' }, 'OH': { 'voterRegistrations': 17, 'fillKey': '17' }, 'UT': { 'voterRegistrations': 1, 'fillKey': '1' }, 'MO': { 'voterRegistrations': 4, 'fillKey': '4' }, 'MN': { 'voterRegistrations': 3, 'fillKey': '3' }, 'MI': { 'voterRegistrations': 3, 'fillKey': '3' }, 'KS': { 'voterRegistrations': 4, 'fillKey': '4' }, 'MT': { 'voterRegistrations': 1, 'fillKey': '1' }, 'MS': { 'voterRegistrations': 0, 'fillKey': '0' }, 'SC': { 'voterRegistrations': 7, 'fillKey': '7' }, 'KY': { 'voterRegistrations': 2, 'fillKey': '2' }, 'OR': { 'voterRegistrations': 0, 'fillKey': '0' }, 'SD': { 'voterRegistrations': 0, 'fillKey': '0' } }

colorKey = []

colors={}
colorList=['#f1ddf6','#eaccf1','#e3bbed','#dcaae9','#d599e4','#ce88e0','#c776db','#c066d7','#ba55d3',
'#a74cbd',
'#9444a8',
'#823b93',
'#6f337e',
'#5d2a69',
'#4a2254',
'#37193f',
'#25112a',
'#120815',
'#000000']


print len(colorList)
#newColorList = [val for val in colorList for _ in (0,1)]
#print newColorList
sortedKeys=['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '3', '3', '3', '3', '3', '4', '4', '4', '4', '4', '5', '6', '7', '8', '8', '9', '9', '9', '12', '15', '16', '17', '17', '21', '58', '544']

newSortedKeys=list(set(sortedKeys))

arrnew = [int(val) for val in newSortedKeys]
arrnew.sort()
#newSortedKeys_n=[str(val) for val in arrnew]
#print newSortedKeys_n

i=0
for key in arrnew:
    print colorList[i]
    colors[key]=colorList[i]
    i=i+1

print colors
















