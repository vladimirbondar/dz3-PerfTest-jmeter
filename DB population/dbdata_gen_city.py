import os
from re import compile, search, match 
from random import randint, shuffle
from os.path import join, split, isdir

num_cities = 170

citylist = [i+1 for i in range(num_cities)]

for _ in range(7):
  shuffle(citylist)
  for i in range(num_cities):
    print(citylist[i])


# pattern = compile("s-\d\d\d-s-")

# directories = [item[0] for item in os.walk(os.getcwd()) if ( item[0] != os.getcwd() and split(item[0])[1][0] != "." ) ]

# newdirectories = []
# for item in directories:
#     temptyple = split(item)
#     if pattern.match(temptyple[1]):
#       newdirectories.append( temptyple[0]+ "/s-" + str(randint(0,999)).zfill(3) + "-s-" + temptyple[1][8:] )
#     else:
#       newdirectories.append( temptyple[0]+ "/s-" + str(randint(0,999)).zfill(3) + "-s-" + temptyple[1] )
    

# for i in range(len(directories)):
#   print("-----------------------------------")
#   print(f"rename {directories[i]} -> {newdirectories[i]}")

#   # os.rename(directories[i], newdirectories[i])

