#Exercise 3 : 
# Dogs Domesticated

import random
from Exercice_2 import Dog  # importing the Dog class 

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)  # Inherit from Dog
        self.trained = False 
    
    def train(self):
        self.bark()
        self.trained = True

    def play(self,*other_dogs):
        dog_names = ", ".join(dog.name for dog in other_dogs)
        print(f"{self.name}, {dog_names} all play together!")

    def do_a_trick(self):

        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll!",
                f"{self.name} stands on his back legs!",
                f"{self.name} shakes your hand!",
                f"{self.name} plays dead!",
            ]
            print(random.choice(tricks)) 
