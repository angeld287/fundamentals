# Prgramming Inportant Concepts

## The S.O.L.I.D Principles
 
 SOLID meaning is:
 - S: Single Responsability
 - O: Open - Closed
 - L: Liskov Sustitution
 - I: Interface Segregation
 - D: Dependencies Inversion

These are 5 software development principles that make the code be more readable, maintainable and scalable.

### Single Responsability

Any class must have only one responsibility. It is because if we adding some features in one of the responsibilities this may affect the others and causes bugs.

### Open - Closed

When we want to add some new features to an existing class it more efficient to extend it to another new one.

If we make the changes to the existing class that may couse some problems in the other classes who calls it.

### Liskov Sustitution

If one class is created from other, it need to have all the methods and properties that the other has. This concept is named inheritance.

### Interface Segregation

A class need to only contain methods or actions that will be used. Unused methods are wasteful for the class. If a method is obsolete it need to be removed or saved in other place for future use.

### Dependencies Inversion

When we code we use some external libraries and frameworks that work like tools in the applicacion. It required to not invoke these tools directly, the correct way is to make a fusion with another class that implements the tool. That allow us to abstract the tool from the system. If we need to change the tool for some reazon we only need to affect the class who implement it.