import re, sys
from time import sleep

with open(sys.argv[1]) as f:
    content = f.readlines()
    match = re.findall(r'[\w\.-]+@[\w\.-]+', str(content))
    print(len(match))
    with open("email-list.txt", "a+") as e:
        e.write("," + str(match).replace(" ", "").replace("'", "").replace("[", "").replace("]", ""))
