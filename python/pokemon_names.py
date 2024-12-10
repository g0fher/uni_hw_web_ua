l = []
import os
print(os.getcwd())

with open("python\\names.txt", 'r') as file:
    for line in file:
        if not line.strip().lower() in l:
            l.append(line.strip().lower())

print(l)