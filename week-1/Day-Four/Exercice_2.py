# Exercise 2 :
#  Dogs

#Create a class called Dog with the following attributes name, age, weight.

class Dog:
    def __init__(self,name,age,weight):
        self.name = name
        self.age = age
        self.weight = weight
    #bark: returns a string which states: “<dog_name> is barking”.
    def bark(self):
        return f'{self.name} is barking'
    #run_speed: returns the dogs running speed (weight/age*10).
    def run_speed(self):
        return (self.weight/self.age*10)
    #
    def fight(self,other_dog):
        current_power = self.run_speed()*self.weight
        power_other_dog = other_dog.run_speed() * other_dog.weight

        if current_power > power_other_dog:
            return f"{self.name} wins the fight against {other_dog.name}!"
        elif current_power < power_other_dog:
            return f"{other_dog.name} wins the fight against {self.name}!"
        else:
            return f"{self.name} and {other_dog.name} are equally matched!"

dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Brus", 3, 15)
dog3 = Dog("bella", 4, 18)

print(dog1.fight(dog3))  
print(dog2.fight(dog3))  

