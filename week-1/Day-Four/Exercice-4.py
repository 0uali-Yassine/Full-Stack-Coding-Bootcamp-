#Exercise 4 : 
# Family

class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name  
        self.members = members 

    def born(self, **kwargs):
        self.members.append(kwargs)  
        print(f"Congratulations! {kwargs['name']} has been born into the {self.last_name} family!")

    def is_18(self, name):
        for member in self.members:  
            if member['name'] == name:  
                return member['age'] >= 18  
        return False  

    def family_presentation(self):
        print(f"Meet the {self.last_name} Family:")
        for member in self.members:
            print(f"  - Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")

family_members = [
    {'name': 'Yassine', 'age': 27, 'gender': 'Male', 'is_child': False},
    {'name': 'Mehdi', 'age': 29, 'gender': 'Male', 'is_child': False}
]
my_family = Family("Zerouali", family_members)

my_family.born(name='Roukaia', age=31, gender='Female', is_child=True)

print("Is Yassine 18 or older?", my_family.is_18('Yassine'))  
print("Is Mehdi 18 or older?", my_family.is_18('Mehdi'))  

my_family.family_presentation()