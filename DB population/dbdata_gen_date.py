import os
from re import compile, search, match 
from random import randint, shuffle
from os.path import join, split, isdir

num_cities = 170

citylist = []

for k in range(7):
  citylist = [str(1698825968+k*60*60*24) for i in range(num_cities)]
  # shuffle(citylist)
  for i in range(num_cities):
    print(citylist[i])

