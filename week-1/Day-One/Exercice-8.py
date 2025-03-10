#Exer 8
print("Exercice--8")
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
#remove all occurrences of Pastrami sandwich.
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
print(sandwich_orders)

#We need to prepare the orders of the clients:
#Create an empty list called finished_sandwiches.
finished_sandwiches = []
#remove and add from sandwich_orders to finished_sandwiches
while sandwich_orders:
    current_sandwich = sandwich_orders.pop()
    finished_sandwiches.append(current_sandwich+" sandwich")
    print("I made your " + current_sandwich+" sandwich")

