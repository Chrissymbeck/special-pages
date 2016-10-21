import csv
hillaryString = ''
trumpString = ''
voterRegistration={}
with open('election_poll_anon.csv', 'rb') as csvfile:
	spamreader = csv.reader(csvfile, delimiter=',')
	for row in spamreader:
		if not row[11]=='':
			print row[11]
			if row[11].replace(' ','') in voterRegistration:
				print "in voterRegistration!"
				voterRegistration[row[11].replace(' ','')]=voterRegistration[row[11].replace(' ','')]+1;
			else:
				voterRegistration[row[11].replace(' ','')]=1
		'''
		if not row[14]=='':
			hillaryString = hillaryString +' '+ row[14].lower()

		if not row[15]=='':
			trumpString = trumpString + ' '+row[15].lower().replace(',', '')
		'''



#line 11 is voter registration location

print voterRegistration
