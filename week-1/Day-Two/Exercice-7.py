import random


def get_random_temp():
    return random.randint(-10, 40)


def main():
    temp = get_random_temp()
    print(f"The temperature is {temp}°C")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0 <= temp < 10:
        print("Quite chilly! Don’t forget your coat")
    elif 10 <= temp < 20:
        print("Wear a skin hoodie")
    elif 20 <= temp < 30:
        print("Wear a t-shirt")
    else:
        print("yaleh lb7er")


main()

print('now for Change the get_random_temp() function:')

# 4 -- Change the get_random_temp() function:


def get_random_temp1(season):
    if season == 'winter':
        return random.randint(-10, 16)
    elif season == 'spring':
        return random.randint(5, 25)
    elif season == 'summer':
        return random.randint(15, 40)
    elif season == 'autumn' or season == 'fall':
        return random.randint(0, 20)
 


def main1():
    season = input(
        "Enter a season (winter, spring, summer, autumn): ").strip().lower()
    temperature = get_random_temp(season)
    print(f"The randomly generated temperature for {season} is {temperature}°C.")


main1()
