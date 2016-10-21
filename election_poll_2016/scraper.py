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

realVoterReg={}

voterRegistration=dict((k.lower(), v) for k,v in voterRegistration.iteritems())

for key in us_state_abbrev:
	if key.lower() in voterRegistration:
		realVoterReg[us_state_abbrev[key.lower()]]={"voterRegistrations":voterRegistration[key],"fillKey":str(voterRegistration[key])}
	else:
		realVoterReg[us_state_abbrev[key.lower()]]={"voterRegistrations":0, "fillKey":"0"}

#line 11 is voter registration location

print realVoterReg
