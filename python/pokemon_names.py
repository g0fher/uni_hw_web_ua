l = []
import os
print(os.getcwd())

with open("python\\names.txt", 'r') as file:
    for line in file:
        l.append(line.strip())

print(l)