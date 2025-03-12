# Exercise 2 : 
#Dogs

class Dog():
    def __init__(self,name,height):
        self.name = name
        self.height = height

    def bark(self):
        print(f'{self.name} goes woof!')

    def jump(self):
        print(f'{self.name} jumps {self.height*2}cm high!')


davids_dog = Dog('Rex',50)
davids_dog.bark()
davids_dog.jump()

#  sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
sarahs_dog = Dog('Teacup',20)
sarahs_dog.bark()
sarahs_dog.jump()

old = davids_dog.height
old_dog = davids_dog

if old < sarahs_dog.height:
 old = sarahs_dog.height
 old_dog = sarahs_dog


print(f'The bigger. dog  is {old_dog.name}, and has {old_dog.height}cm high!')