import json
from random import random
from random import randint


def food_data_generator(json_file_name, expansion_level):
    # json_file_name ends with .json
    # expansion_level = 3 means 1 data entry is turned into 3 data now
    with open(json_file_name) as f:
      food_list = json.load(f)
    generated_food_data = []
    # this is a list of dictionary
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
    with open("food_data_generated.json", "w") as write_file:
        json.dump(generated_food_data, write_file, indent=4)



if __name__ == "__main__":
    food_data_generator('food_name.json',3)
