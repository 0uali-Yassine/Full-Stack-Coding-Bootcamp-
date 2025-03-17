from game import Game

def get_user_menu_choice():
    while True:
        choice = input("Menu:\n(g) Play a new game\n(x) Show scores and exit\n: ").lower()
        if choice in ["g", "x"]:
            return choice
        else:
            print("Invalid choice. Please choose 'g' or 'x'.")

def print_results(results):
    print("\nGame Results:")
    # results.get('win', 0)
    # if "win" not exist return default 0
    print(f"   You won {results["win"]} times")
    print(f"   You lost {results["loss"]} times")
    print(f"   You drew {results["draw"]} times")
    print("\nThank you for playing!")

def main():
    results = {"win": 0, "loss": 0, "draw": 0}
    while True:
        choice = get_user_menu_choice()
        if choice == "g":
            result = Game().play()
            #result = game.play()
            results[result] += 1
        elif choice == "x":
            print_results(results)
            break

#if __name__ == "__main__":
main()