import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

dataset = pd.read_csv('SaYoPillow.csv')
# print(dataset)

dataset.rename(columns={"sr.1": "sr1"},inplace=True)


#plot the counts of each frequecny

sns.countplot(x="sl", data=dataset)


'''
'sr', - snoring range of the user
'rr', - respiration rate,
't', - body temperature
'lm', - limb movement rate
'bo', - blood oxygen levels
'rem', - eye movement
'sr.1', -  number of hours of sleep
'hr', - heart rate
'sl' - Stress Levels

(0- low/normal, 1 – medium low, 2- medium, 3-medium high, 4 -high)
'''

#scatter plot
from autoviz.AutoViz_Class import AutoViz_Class
AV = AutoViz_Class()
dftc = AV.AutoViz('SaYoPillow.csv',verbose=1,depVar='sl')