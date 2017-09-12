import csv
import itertools


def get_rid_of_empty_rows():
	input = open("Report.csv", 'rb')
	output = open("formatted.csv", 'wb')
	writer = csv.writer(output)
	for row in csv.reader(input):
	    if any(row):
	        writer.writerow(row)
	input.close()
	output.close()


def get_state_freqs():
	i, j = 306, 797
	states = []
	freqs = {}
	with open("formatted.csv", 'rt') as csvfile:
	    spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
	    for row in itertools.islice(spamreader, i, j+1):
	        state = row[0].split(',')[0]
	        states.append(state)
	for state in states:
		if state.upper() in freqs:
			freqs[state.upper()]["Students"] += 1
			freqs[state.upper()]["fillKey"] += 1
		else:
			freqs[state.upper()] = {"Students": 1, "fillKey": 1}
	return freqs


if __name__ == '__main__':
	freqs = get_state_freqs()
	print(freqs)