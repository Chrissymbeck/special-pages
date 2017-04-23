import requests
import bs4

partnerid = "142768"
key="iufju0hsnh1"

import urllib2, sys
from bs4 import BeautifulSoup

url = "http://api.glassdoor.com/api/api.htm?t.p="+partnerid+"&t.k="+key+"&userip=152.3.43.134&useragent=Mozilla&format=json&v=1&action=employers&q=duke"
hdr = {'User-Agent': 'Mozilla/5.0'}

def main():
	req = urllib2.Request(url,headers=hdr)
	#print req
	response = urllib2.urlopen(req)
	print response.read()
	soup = BeautifulSoup(response)


if __name__ == '__main__':
	main()