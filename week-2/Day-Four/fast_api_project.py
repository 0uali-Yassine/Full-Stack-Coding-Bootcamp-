from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from menu_item import MenuItem
from menu_manager import MenuManager

app = FastAPI()

# Pydantic model for input validation
class ItemCreate(BaseModel):
    name: str
    price: int

class ItemUpdate(BaseModel):
    new_name: str = None
    new_price: int = None

# Create (Add Item)
@app.post("/items/")
def add_item(item: ItemCreate):
    new_item = MenuItem(item.name, item.price)
    new_item.save()
    return {"message": "Item added successfully", "item": {"name": item.name, "price": item.price}}

# Read (View an Item)
@app.get("/items/{name}")
def view_item(name: str):
    item = MenuManager.get_by_name(name)
    if item:
        return {"name": item.name, "price": item.price}
    raise HTTPException(status_code=404, detail="Item not found")

# Update (Modify an Item)
@app.put("/items/{name}")
def update_item(name: str, item_update: ItemUpdate):
    item = MenuManager.get_by_name(name)
    if item:
        new_name = item_update.new_name if item_update.new_name else item.name
        new_price = item_update.new_price if item_update.new_price else item.price
        item.update(new_name, new_price)
        return {"message": "Item updated successfully", "item": {"name": new_name, "price": new_price}}
    raise HTTPException(status_code=404, detail="Item not found")

# Delete (Remove an Item)
@app.delete("/items/{name}")
def remove_item(name: str):
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        return {"message": "Item deleted successfully"}
    raise HTTPException(status_code=404, detail="Item not found")

# Read (Show all items)
@app.get("/menu/")
def show_menu():
    items = MenuManager.all_items()
    return [{"name": item.name, "price": item.price} for item in items]
