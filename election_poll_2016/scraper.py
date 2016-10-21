import csv
hillaryString = ''
trumpString = ''
with open('election_poll_anon.csv', 'rb') as csvfile:
	spamreader = csv.reader(csvfile, delimiter=',')
	for row in spamreader:

		if not row[14]=='':
			hillaryString = hillaryString +' '+ row[14].lower()
		#print row[14] #hillary

		if not row[15]=='':
			trumpString = trumpString + ' '+row[15].lower().replace(',', '')
		#print row[15]



print trumpString
