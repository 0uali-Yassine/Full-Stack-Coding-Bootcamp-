# exercise 3
# Zara


# 1-- Create a dictionary called brand
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes":['men','women','children','home'],
    "international_competitors":['Gap', 'H&M', 'Benetton'],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# 2-- Change the number of stores to 2.
brand["number_stores"] = 2
print(brand)

# 3-- Print a sentence that explains who Zaras clients are.
print(f"Zara's clients are {brand['type_of_clothes'][0]}, {brand['type_of_clothes'][1]} and {brand['type_of_clothes'][2]}")


# 4--  Add a key called country_creation with a value of Spain.
brand["country_creation"] = "Spain"
print(brand)

# 5-- Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
print(brand)

# 6-- Delete the information about the date of creation.
del brand["creation_date"]
print(brand)

# 7-- Print the last international competitor.
print(brand["international_competitors"][-1])

# 8-- Print the major colors of the US.
print(brand["major_color"]["US"])


# 9-- Print the amount of key value pairs (ie. length of the dictionary)
print(len(brand))

# 10-- Print the keys of the dictionary.
print(brand.keys())


# 11-- Create another dictionary called more_on_zara with the following information:
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}


# 12-- Update the information of the dictionary more_on_zara with the information of the dictionary brand.
more_on_zara.update(brand)
print(more_on_zara)

# 13-- Print more_on_zara and check if the information of the dictionary brand has been added to it.
print(more_on_zara)
# Yes, it add but the brand["number_stores"] it overwrite  more_on_zara["number_stores"]
# means the  more_on_zara["number_stores"] = 1000 will still 7000