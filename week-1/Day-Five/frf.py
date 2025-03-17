import math
import turtle

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.__radius = radius
        elif diameter is not None:
            self.__radius = diameter / 2
        else:
            self.__radius = 1  # Default radius if neither is provided

    @property
    def radius(self):
        return self.__radius

    @property
    def diameter(self):
        return self.__radius * 2

    @radius.setter
    def radius(self, value):
        self.__radius = value

    @diameter.setter
    def diameter(self, value):
        self.__radius = value / 2

    def area(self):
        return math.pi * (self.__radius ** 2)

    def __str__(self):
        return f"Circle with radius {self.__radius} and diameter {self.diameter}"

    # Add two circles together (adding their radii)
    def __add__(self, other):
        if isinstance(other, Circle):
            new_radius = self.__radius + other.__radius
            return Circle(radius=new_radius)
        return NotImplemented

    # Compare two circles for size (based on radius)
    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.__radius > other.__radius
        return NotImplemented

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.__radius < other.__radius
        return NotImplemented

    # Check if two circles have the same radius (are equal)
    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.__radius == other.__radius
        return NotImplemented

# Function to draw a circle using turtle
def draw_circle(radius):
    t = turtle.Turtle()
    t.penup()
    t.goto(0, -radius)  # Position the turtle at the bottom of the circle
    t.pendown()
    t.circle(radius)

# Example usage:
circle1 = Circle(radius=160)
circle2 = Circle(diameter=90)
circle3 = Circle(radius=70)
circle4 = Circle(radius=50)
circle5 = Circle(radius=40)
circle6 = Circle(radius=30)
circle7 = Circle(radius=10)

print(circle1)  # Circle with radius 3 and diameter 6
print("Area of circle1:", circle1.area())

# Adding circles
circle4 = circle1 + circle2  # Should combine radii
print("New circle after adding:", circle4)

# Comparing circles
print("Is circle1 larger than circle2?", circle1 > circle2)
print("Is circle1 equal to circle3?", circle1 == circle3)

# Sorting circles by radius
circles = [circle1, circle2, circle3,circle4,circle6,circle7]
sorted_circles = sorted(circles, key=lambda x: x.radius)
print("Sorted circles:", [str(circle) for circle in sorted_circles])

# Bonus: Draw sorted circles using turtle
for circle in sorted_circles:
    draw_circle(circle.radius)

turtle.done()
