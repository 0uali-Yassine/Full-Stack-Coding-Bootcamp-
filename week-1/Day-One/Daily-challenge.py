#Challenge 1
#Ask the user for a number and a length.
user_nummber = int(input("Enter a number: "))
user_length = int(input("Enter a length: "))

for i in range(1,user_length+1): #user_length+1  for the last number
    print(user_nummber*i)

#Challenge 2

user_string = input("Enter a string: ")
new_user_string = ""

for i in range(len(user_string)):
    # first the i = 0 and user_string[0] will add becuase is the first letter
    if i == 0 or user_string[i] != user_string[i-1]: #if i>0 so we can check (accutal ltr) = user_string[i] and the prev ltr = user_string[i-1]
       new_user_string += user_string[i]
    
print(new_user_string)


