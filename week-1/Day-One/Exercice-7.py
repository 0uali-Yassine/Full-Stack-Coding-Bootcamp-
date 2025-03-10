
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
