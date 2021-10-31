"""
This Module reads and prints out .csv's contents
"""
import csv

def readcsv(csvfile):
    """
    This reads and prints out .csv's contents
    """
    try:
        csv_file = open(csvfile, mode='r')
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0        
        for row in csv_reader:            
            print(f'{", ".join(row)}')
            line_count += 1            
            
        print(f'\nProcessed {line_count} lines.')

    finally:
        csv_file.close() 
        print(f"Log: {csvfile} closed")
