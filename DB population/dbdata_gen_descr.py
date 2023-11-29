import os
from re import compile, search, match 
from random import randint, shuffle
from os.path import join, split, isdir

num_cities = 170

citylist = []
weatherlist = ['Переменная облачность. Без осадков.', 'Переменная облачность. Временами дождь.', 'Облачно. Без осадков.', 'Облачно. Временами дождь.', 'Облачно. Дождь.', "Ясно."]
num_weathers = len(weatherlist) 

for k in range(7):
  citylist = [weatherlist[randint(0, num_weathers-1)] for i in range(num_cities)]
  for i in range(num_cities):
    print(citylist[i])

