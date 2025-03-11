# exercise 2
# Cinemax

family = {"rick": 43, 'beth': 13, 'morty': 2, 'summer': 8}

total_price = 0 # total tickets price

for key, value in family.items():
    if value < 3:
        print(f"{key} has a free ticket.")
    elif 3 <= value <= 12:
        print(f"{key} the ticket is $10.")
        total_price += 10
    else:
        print(f"{key}  the ticket is $15")
        total_price += 15

print(f"total cost for the movies is ${total_price}")


#Bonus:
#Bonus:

initially_family = {} 
total_price_initial_family = 0
while True:
    user_name = input("Enter the name of the person: ")
    user_age = int(input("Enter the age of the person: "))
    initially_family[user_name] = user_age


    ask_for_stop = input("Do you want to stop? (yes/no): ")
    if ask_for_stop == "yes": # if the user want to stop naming persons
        break # out of loop
    


for key, value in initially_family.items():
    if value < 3:
        print(f"{key} has a free ticket.")
    elif 3 <= value <= 12:
        print(f"{key} the ticket is $10.")
        total_price_initial_family += 10
    else:
        print(f"{key}  the ticket is $15")
        total_price_initial_family += 15


print(f"total cost for the movies is ${total_price_initial_family}")

    