import json

# coconut.support.py

def print_welcome_message():
    print("Welcome to Kokonut Support!")

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero!")
    return a / b

def load_configuration(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

def main():
    config = load_configuration('\\c:\\Users\\Kasutaja\\Desktop\\Github\\Repositories\\SpojectOS\\kokonut\\kokonut.sdog')
    print_welcome_message()
    while True:
        print("\nOptions:")
        print("1. Add")
        print("2. Subtract")
        print("3. Multiply")
        print("4. Divide")
        print("5. Exit")
        choice = input("Choose an option: ")

        if choice == '5':
            print("Exiting Kokonut Support. Goodbye!")
            break

        if choice in ['1', '2', '3', '4']:
            try:
                a = float(input("Enter first number: "))
                b = float(input("Enter second number: "))
            except ValueError:
                print("Invalid input. Please enter numeric values.")
                continue

            if choice == '1':
                print("Result: ", add(a, b))
            elif choice == '2':
                print("Result: ", subtract(a, b))
            elif choice == '3':
                print("Result: ", multiply(a, b))
            elif choice == '4':
                try:
                    print("Result: ", divide(a, b))
                except ValueError as e:
                    print(e)
        else:
            print("Invalid choice. Please choose a valid option.")

if __name__ == "__main__":
    main()