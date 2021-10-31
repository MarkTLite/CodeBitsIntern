"""
This Module uses write_to_csv Module to create a CSV file and fills it 
with 10 lines of content,then uses read_csv Module to print out file content on screen
"""
import read_csv, write_to_csv

 
# csv header
fieldnames = ['name', 'area', 'country_code2', 'country_code3']

# csv data (12 lines here)
rows = [
    {'name': 'Albania', 'area': 28748, 'country_code2': 'AL', 'country_code3': 'ALB'},
    {'name': 'Algeria', 'area': 2381741,'country_code2': 'DZ', 'country_code3': 'DZA'},
    {'name': 'American Samoa', 'area': 199, 'country_code2': 'AS','country_code3': 'DZA'},
    {'name': 'Albania', 'area': 28748, 'country_code2': 'AL', 'country_code3': 'ALB'},
    {'name': 'Algeria', 'area': 2381741,'country_code2': 'DZ', 'country_code3': 'DZA'},
    {'name': 'American Samoa', 'area': 199, 'country_code2': 'AS','country_code3': 'DZA'},
    {'name': 'Albania', 'area': 28748, 'country_code2': 'AL', 'country_code3': 'ALB'},
    {'name': 'Algeria', 'area': 2381741,'country_code2': 'DZ', 'country_code3': 'DZA'},
    {'name': 'American Samoa', 'area': 199, 'country_code2': 'AS','country_code3': 'DZA'},
    {'name': 'Albania', 'area': 28748, 'country_code2': 'AL', 'country_code3': 'ALB'},
    {'name': 'Algeria', 'area': 2381741,'country_code2': 'DZ', 'country_code3': 'DZA'},
    {'name': 'American Samoa', 'area': 199, 'country_code2': 'AS','country_code3': 'DZA'}
    ] 

write_to_csv.writetocsv("sample.csv",header=fieldnames,rows=rows[:9])
read_csv.readcsv("sample.csv")