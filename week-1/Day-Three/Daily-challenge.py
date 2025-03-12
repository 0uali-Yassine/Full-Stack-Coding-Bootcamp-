#Challenge 3
#  Old MacDonald’s Farm

class Farm:
    def __init__(self, name):
        self.name = name  
        self.animals = {} 

    def add_animal(self, animal, count=1):

        if animal in self.animals:
            self.animals[animal] += count
        else:
            self.animals[animal] = count

    def get_info(self):

        info = f"{self.name}'s farm\n"
        
        for animal, count in self.animals.items():
            info += f"{animal:<10} : {count}\n"  
        
        info += "\n    E-I-E-I-0!"
        
        return info

    def get_animal_types(self):

        return sorted(self.animals.keys())

    def get_short_info(self):

        animal_types = self.get_animal_types()

        animals_with_s = [f"{animal}s" if self.animals[animal] > 1 else animal for animal in animal_types]

        return f"{self.name}’s farm has {', '.join(animals_with_s)}."

macdonald = Farm("McDonald")

# Add animals
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.get_info())

print(macdonald.get_animal_types())

print(macdonald.get_short_info())
