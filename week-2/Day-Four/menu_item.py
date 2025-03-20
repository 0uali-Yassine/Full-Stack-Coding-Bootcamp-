import psycopg2

class MenuItem:
    def __init__(self, name: str, price: int, item_id=None):
        self.name = name
        self.price = price
        self.item_id = item_id

    def save(self):
            connection = psycopg2.connect(
                dbname="RestaurantMenuManager",
                user="postgres",
                password="134559038",
                host="localhost",
                port="5432"
            )
            cursor = connection.cursor()

            cursor.execute('''
                INSERT INTO Menu_Items (item_name, item_price)
                VALUES (%s, %s)
                RETURNING item_id;
            ''', (self.name, self.price))

            self.item_id = cursor.fetchone()[0]

            connection.commit()
            print(f"Item '{self.name}' saved successfully with ID {self.item_id}.")
            cursor.close()
            connection.close()

    def delete(self):
            connection = psycopg2.connect(
                dbname="RestaurantMenuManager",
                user="postgres",
                password="134559038",
                host="localhost",
                port="5432"
            )
            cursor = connection.cursor()

            cursor.execute('''
                DELETE FROM Menu_Items
                WHERE item_id = %s;
            ''', (self.item_id,))

            connection.commit()
            print(f"Item '{self.name}' deleted successfully.")
            cursor.close()
            connection.close()

    def update(self, new_name=None, new_price=None):
       
            connection = psycopg2.connect(
                dbname="RestaurantMenuManager",
                user="postgres",
                password="134559038",
                host="localhost",
                port="5432"
            )
            cursor = connection.cursor()

            if new_name and new_price:
                cursor.execute('''
                    UPDATE Menu_Items
                    SET item_name = %s, item_price = %s
                    WHERE item_id = %s;
                ''', (new_name, new_price, self.item_id))
            elif new_name:
                cursor.execute('''
                    UPDATE Menu_Items
                    SET item_name = %s
                    WHERE item_id = %s;
                ''', (new_name, self.item_id))
            elif new_price:
                cursor.execute('''
                    UPDATE Menu_Items
                    SET item_price = %s
                    WHERE item_id = %s;
                ''', (new_price, self.item_id))
            else:
                print("Noooo updates provided ------")
                return

            connection.commit()
            print(f"Item '{self.name}' updated successfully.")

            self.name = new_name
            self.price = new_price

            cursor.close()
            connection.close()
