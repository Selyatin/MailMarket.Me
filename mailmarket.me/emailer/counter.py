import sys

with open(sys.argv[1]) as f:
    lines = f.readlines()
    lines = str(lines)
    lines = lines.split(",")
    print(len(lines))
