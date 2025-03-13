# Exercise 1 : 
# Pets

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# 1--
class Siamese(Cat):
    pass

# 2---
bengal_cat = Bengal("tomy", 3)
chartreux_cat = Chartreux("lila", 2)
siamese_cat = Siamese("Linda", 4)
all_cats = [bengal_cat,chartreux_cat,siamese_cat]

# 3---
sara_pets = Pets(all_cats)
sara_pets.walk()
