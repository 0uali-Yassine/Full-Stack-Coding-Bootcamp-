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