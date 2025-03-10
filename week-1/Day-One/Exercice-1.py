#Exer 1
print("Exercice--1")
print("Hello world")
print("Hello world")
print("Hello world")
print("Hello world")

#Exer 2
print("Exercice--2")
res = (99**3)*8
print(res)


#Exer 3
print("Exercice--3")
name = input("Enter your name: ")
if name == "yassine":
    print("Hello, Yassine!  have the same name.")
else:
    print("Hello, " + name + "!")



#Exer 4
print("Exercice--4")
userHieght = int(input("Enter your height: "))
if userHieght > 145:
    print("You are tall enough to ride.")
else:
    print("You are short")

#Exer 5
print("Exercice--5")
my_fav_numbers = {0,10,100,7}

new_fav_numbers_1 = int(input("Enter your favorite number: "))
new_fav_numbers_2 = int(input("Add Secound favorite number: "))
#add new fav numbers
my_fav_numbers.add(new_fav_numbers_1)
my_fav_numbers.add(new_fav_numbers_2)
#remove last number
my_fav_numbers.pop()
#friend’s favorites numbers.
friend_fav_numbers = {2,190,120,70}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

#Exer 6
print("Exercice--6")    
#tuples are immutable so can't change add or remove or change value

#Exer 7
print("Exercice--7")
basket = ["Banana", "Apples", "Oranges", "Blueberries"]    
#Remove Banana from the list
basket.remove("Banana")
print(basket)
#Remove Blueberries from the list.
basket.pop()
print(basket)
#Add Kiwifruit to the end of the list.
basket.append("Kiwifruit")
print(basket)
#Add Apples at the beginning of the list
basket.insert(0, "Apples")
print(basket)
#Count how many apples in the basket
print(basket.count("Apples"))
#Empty the basket
basket.clear()
print(basket)

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


