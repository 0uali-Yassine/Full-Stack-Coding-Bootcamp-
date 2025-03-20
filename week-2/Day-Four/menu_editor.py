from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
   
    while True:
        print("\n--- Program Menu ---")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show the Menu")
        print("E - Exit")

        choice = input("Enter your choice: ").strip().upper()

        if choice == "V":
            view_item()
        elif choice == "A":
            add_item_to_menu()
        elif choice == "D":
            remove_item_from_menu()
        elif choice == "U":
            update_item_from_menu()
        elif choice == "S":
            show_restaurant_menu()
        elif choice == "E":
            print("Exiting the program...")
            # Show the menu before exiting
            show_restaurant_menu()
            break
        else:
            print("Invalid choice. Please try again.")

def add_item_to_menu():
    
    name = input("Enter the item's name: ").strip()
    price = int(input("Enter the item's price: "))

    item = MenuItem(name, price)
    item.save()
    print("Item was added successfully.")

def remove_item_from_menu():
    name = input("Enter the name of the item to remove: ").strip()

    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        print("Item was deleted successfully.")
    else:
        print("Error: Item not found.")

def update_item_from_menu():
    name = input("Enter the name of the item to update: ").strip()

    item = MenuManager.get_by_name(name)
    if item:
        new_name = input("Enter the new name (leave blank to keep current): ").strip()
        new_price = input("Enter the new price (leave blank to keep current): ").strip()

        new_price = int(new_price) if new_price else None

        item.update(new_name if new_name else None, new_price)
        print("Item was updated successfully.")
    else:
        print("Error: Item not found.")

def show_restaurant_menu():
   
    print("\n--- Restaurant Menu ---")
    items = MenuManager.all_items()
    for item in items:
        print(f"{item.name}: ${item.price}")

def view_item():
    name = input("Enter the name of the item to view: ").strip()

    item = MenuManager.get_by_name(name)
    if item:
        print(f"Item: {item.name}, Price: ${item.price}")
    else:
        print("Error: Item not found.")

if __name__ == "__main__":
    show_user_menu()