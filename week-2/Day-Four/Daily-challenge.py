import requests
import psycopg2
from tabulate import tabulate
import random
#random_countries = random.sample(dt, 10) 



def get_data():
    url = 'https://restcountries.com/v3.1/all'
    response = requests.get(url)
    if response.status_code != 200:
        print('error fetching data')
        return []
    return response.json()
 
def setTable(table_data):
    headers = ["Country", "Capital","Flag", "Population", "subregion"]
    print('TABLE>> Countries-----------')
    print(tabulate(table_data, headers=headers, tablefmt="fancy_grid"))


def RandomCountries():

    connection = psycopg2.connect(
                dbname="RESTCountries",
                user="postgres",
                password="134559038",
                host="localhost",
                port="5432"
            )
    cursor = connection.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS countries (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            capital TEXT,
            flag TEXT,
            population BIGINT,
            subregion TEXT
        )
    ''')
    connection.commit()

    data = get_data()
    if not data:
     print("No data available.")
     return
    
    random_countries = random.sample(data, 10)

    table_data = []

    for country in random_countries[:10]:  # Limit to 10 countries for readability
       name = country.get('name').get('common')
       capital = country.get('capital')[0]  # Capital is a list
       flag = country.get('flag')
       population = country.get('population')
       subregion = country.get('area')
       cursor.execute('''
        INSERT INTO Countries (name,capital,flag,population,subregion)
        VALUES(%s,%s,%s,%s,%s)
       ''',(name,capital,flag,population,subregion))
       table_data.append([name, capital,flag,population, subregion])
       
    connection.commit()
    print('Data contries is added!!!')

    
    choie = input('You Want to see Table DATA Countries? (y/n): ')

    if choie.lower() == "y":
        setTable(table_data)
    else:
          print('Okey, Bye! :) ')


      
    cursor.close()
    connection.close()
    
RandomCountries()
