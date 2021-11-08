"""
This Module creates a CSV file if not present and puts in content. 
"""
import csv

def writetocsv(csvfile,header,rows): 
    """
    This Module creates a CSV file if not present and puts in content. 
    """
    try:
        file = open(csvfile, 'w', encoding='UTF8', newline='') 
        writer = csv.DictWriter(file, fieldnames=header)
        writer.writeheader()
        writer.writerows(rows)
        print(f"Log: csv data written to {csvfile}")

    finally:
        file.close() 
        print(f"Log: {csvfile} closed")

