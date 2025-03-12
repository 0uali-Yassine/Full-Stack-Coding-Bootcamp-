# Exercise 1:
# Cats
# The oldest cat is <cat_name>, and is <cat_age> years old.”


class Cat:

  def __init__(self, cat_name, cat_age):
    self.name = cat_name
    self.age = cat_age


def oldest_cat(cat_1, cat_2, cat_3):
  old = cat_1.age
  old_cat = cat_1

  if old < cat_2.age:
    old = cat_2.age
    old_cat = cat_2

  if old < cat_3.age:
    old = cat_3.age
    old_cat = cat_3

  print(f'The oldest cat is {old_cat.name}, and is {old_cat.age} years old.')


bella = Cat('bella', 10)
mimy = Cat('mimy', 5)
lila = Cat('lila', 7)
oldest_cat(bella, mimy, lila)
