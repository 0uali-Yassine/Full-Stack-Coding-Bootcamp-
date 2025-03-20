import psycopg2
from menu_item import MenuItem

class MenuManager:

    @classmethod
    def get_by_name(cls, name: str):

        try:
            # Connect to the database
            connection = psycopg2.connect(
                dbname="RestaurantMenuManager",
                user="postgres",
                password="134559038",
                host="localhost",
                port="5432"
            )
            cursor = connection.cursor()

            cursor.execute('''
                SELECT item_id, item_name, item_price
                FROM Menu_Items
                WHERE item_name = %s;
            ''', (name,))

            result = cursor.fetchone()

            if result:
                item_id, item_name, item_price = result
                return MenuItem(item_name, item_price, item_id)
            else:
                return None

        except Exception as e:
            print(f"error ---name: {e}")
            return None
        finally:
            if cursor:
                cursor.close()
            if connection:
                connection.close()

    @classmethod
    def all_items(cls):
        try:
            connection = psycopg2.connect(
                dbname="RestaurantMenuManager",
                user="postgres",
                password="134559038",
                host="localhost",
                port="5432"
            )
            cursor = connection.cursor()

            cursor.execute('''
                SELECT item_id, item_name, item_price
                FROM Menu_Items;
            ''')

            results = cursor.fetchall()

            items = [MenuItem(item_name, item_price, item_id) for item_id, item_name, item_price in results]
            return items

        except Exception as e:
            print(f"error ---- items: {e}")
            return []
        finally:
            if cursor:
                cursor.close()
            if connection:
                connection.close()