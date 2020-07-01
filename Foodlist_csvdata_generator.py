from random import random
from random import randint
import csv
import json


def food_data_generator(json_file_name, expansion_level):
    # json_file_name ends with .json
    # expansion_level = 3 means 1 data entry is turned into 3 data now
    with open(json_file_name) as f:
        food_list = json.load(f)
        print(food_list)
    generated_food_data = []
    # this is a list of dictionary
    with open('foodlist_csvdata.csv', 'w', newline='') as file:
        fieldnames = ['name', 'type', 'storage', 'unit', 'quantity', 'expiry date']
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        for food_item in food_list:
            food_name = food_item["name"]
            food_type = food_item["type"]
            food_storage = food_item["storage"]
            food_unit = food_item["unit"]
            # distinguish the food quantity (int for qty vs double for g)
            for i in range(0,expansion_level,1):
                if food_unit == "g":
                    food_quantity = randint(1,1000) + random()
                elif food_unit == "qty":
                    food_quantity = randint(1,15)
                food_exp_date = str(randint(1,12)) + "/" + str(randint(1,30)) + "/" + str(randint(2020,2022))
                food_item.update({"quantity":food_quantity,"expiry date":food_exp_date})
                generated_food_data.append(food_item)
                print(food_item)
                writer.writerow(food_item)

if __name__ == "__main__":
    food_data_generator('food_name.json',3)

