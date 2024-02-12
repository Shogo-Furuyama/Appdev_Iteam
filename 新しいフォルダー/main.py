import http.client

conn = http.client.HTTPSConnection("navitime-maps.p.rapidapi.com")

headers = {
    'X-RapidAPI-Key': "971b78459emshea0ace131e1af42p17344cjsncc113a914668",
    'X-RapidAPI-Host': "navitime-maps.p.rapidapi.com"
}

conn.request("GET", "/map_script?host=localhost", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))