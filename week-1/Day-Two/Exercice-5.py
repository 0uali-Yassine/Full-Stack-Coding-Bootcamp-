# exercice: 5
#  Random

# 1 - Create a function that takes a number as an argument and returns a random number between 1 and that number.

import random

def generate_random_number(user_number):
    if 1 <= user_number <= 100:  
        random_number = random.randint(1, 100)  # i dont know it before so i ask chatbot
        return random_number
    else:
        return "enter a number between 1 and 100."
