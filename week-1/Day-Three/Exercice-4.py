# Exercise 4 : 
# Afternoon at the Zoo

class Zoo:
    def __init__(self, zoo_name):
        self.animals = []  
        self.name = zoo_name 
    
    def add_animal(self, new_animal):

        if new_animal not in self.animals:
            self.animals.append(new_animal)
        else:
            print(f"{new_animal} is already in the zoo!")
    
    def get_animals(self):

        print(f"Animals in {self.name}:")
        for animal in self.animals:
            print(animal)
    
    def sell_animal(self, animal_sold):

        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")
    
    def sort_animals(self):
    
        animal_groups = {}
        for animal in sorted(self.animals):
            first_letter = animal[0].upper()
            if first_letter not in animal_groups:
                animal_groups[first_letter] = [animal]
            else:
                animal_groups[first_letter].append(animal)
        return animal_groups
    
    def get_groups(self):

        grouped_animals = self.sort_animals()
        print(f"Grouped animals in {self.name}:")
        for letter, animals in grouped_animals.items():
            print(f"{letter}: {', '.join(animals)}")


new_york_zoo = Zoo("New York Zoo")

new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")

new_york_zoo.get_animals()  
new_york_zoo.sell_animal("Cat") 
new_york_zoo.get_animals() 
new_york_zoo.get_groups()  
