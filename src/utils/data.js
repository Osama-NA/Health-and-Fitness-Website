import recommendedLinkImage1 from './images/recommended1.jpg';
import recommendedLinkImage2 from './images/recommended2.jpg';
import recommendedLinkImage3 from './images/recommended3.jpg';
import recommendedLinkImage4 from './images/recommended4.jpg';
import chiaSeedsImage from './images/chia-seeds.jpeg';
import salmonImage from './images/salmon.jpg';
import broccoliImage from './images/broccoli.jpg'
import oatsImage from './images/oats.jpg';
import eggsImage from './images/eggs.jpg';
import garlicImage from './images/garlic.jpg'
import oliveOilImage from './images/olive-oil.jpg';
import yogurtImage from './images/yogurt.jpg';
import lemonImage from './images/lemon.jpg'
import quinoaImage from './images/quinoa.jpg'

export const recommendations = [
    {
        imageSource: recommendedLinkImage1,
        title: 'Our Top 10 Healthiest Foods',
        link: '/Recipes?to=Healthy-foods'
    },
    {
        imageSource: recommendedLinkImage2,
        title: 'Calories in Common Foods',
        link: '/Calories?to=Common-foods-calories'
    },
    {
        imageSource: recommendedLinkImage3,
        title: 'Calories Meal Planning Samples',
        link: '/Meal-planning'
    },
    {
        imageSource: recommendedLinkImage4,
        title: 'Top Calorie Dense Foods to Gain Weight',
        link: '/Calories?to=Calorie-dense-foods'
    }
]

export const healthyFoods = [
    {
        name: 'Chia Seeds',
        image: chiaSeedsImage,
        query: 'Chia'
    },
    {
        name: 'Salmon',
        image: salmonImage,
        query: 'Salmon'
    },
    {
        name: 'Broccoli',
        image: broccoliImage,
        query: 'Broccoli'
    },
    {
        name: 'Oats',
        image: oatsImage,
        query: 'Oat'
    },
    {
        name: 'Eggs',
        image: eggsImage,
        query: 'Egg'
    },
    {
        name: 'Garlic',
        image: garlicImage,
        query: 'Garlic'
    },
    {
        name: 'Olive Oil',
        image: oliveOilImage,
        query: 'Olive Oil'
    },
    {
        name: 'Yogurt',
        image: yogurtImage,
        query: 'Yogurt'
    },
    {
        name: 'Lemon',
        image: lemonImage,
        query: 'Lemon'
    },
    {
        name: 'Quinoa',
        image: quinoaImage,
        query: 'Quinoa'
    },
]

export const activityLevels = [
    {
        value: "Sedentary: little or no exercise",
        level: "level_1"
    },
    {
        value: "Exercise 1-3 times/week",
        level: "level_2"
    },
    {
        value: "Exercise 4-5 times/week",
        level: "level_3"
    },
    {
        value: "Daily exercise or intense exercise 3-4 times/week",
        level: "level_4"
    },
    {
        value: "Intense exercise 6-7 times/week",
        level: "level_5"
    },
    {
        value: "Very intense exercise daily, or physical job",
        level: "level_6"
    },
]

export const commonFoodsCalories = [
    {
        categoryName: "Fruit",
        categoryRows: [
            {
                food: 'Apple',
                servingSize: "1 (4 oz.)",
                calories: '59',
                kJ: '247'
            },
            {
                food: 'Banana',
                servingSize: "1 (6 oz.)",
                calories: '151',
                kJ: '632'
            },
            {
                food: 'Grapes',
                servingSize: "1 cup",
                calories: '100',
                kJ: '419'
            },
            {
                food: 'Orange',
                servingSize: "1 (4 oz.)",
                calories: '53',
                kJ: '222'
            },
            {
                food: 'Pear',
                servingSize: "1 (5 oz.)",
                calories: '82',
                kJ: '343'
            },
            {
                food: 'Peach',
                servingSize: "1 (6 oz.)",
                calories: '67',
                kJ: '281'
            },
            {
                food: 'Pineapple',
                servingSize: "1 cup",
                calories: '82',
                kJ: '343'
            },
            {
                food: 'Strawberry',
                servingSize: "1 cup",
                calories: '53',
                kJ: '222'
            },
            {
                food: 'Watermelon',
                servingSize: "1 cup",
                calories: '50',
                kJ: '209'
            }
        ]
    },
    {
        categoryName: "Vegetables",
        categoryRows: [
            {
                food: 'Asparagus',
                servingSize: "1 cup",
                calories: '27',
                kJ: '113'
            },
            {
                food: 'Broccoli',
                servingSize: "1 cup",
                calories: '45',
                kJ: '188'
            },
            {
                food: 'Carrots',
                servingSize: "1 cup",
                calories: '50',
                kJ: '209'
            },
            {
                food: 'Cucumber',
                servingSize: "4 oz.",
                calories: '17',
                kJ: '71'
            },
            {
                food: 'Eggplant',
                servingSize: "1 cup",
                calories: '35',
                kJ: '147'
            },
            {
                food: 'Lettuce',
                servingSize: "1 cup",
                calories: '5',
                kJ: '21'
            },
            {
                food: 'Tomato',
                servingSize: "1 cup",
                calories: '22',
                kJ: '92'
            }
        ]
    },
    {
        categoryName: "Proteins",
        categoryRows: [
            {
                food: 'Beef, regular, cooked',
                servingSize: "2 oz.",
                calories: '142',
                kJ: '595'
            },
            {
                food: 'Chicken, cooked',
                servingSize: "2 oz.",
                calories: '136',
                kJ: '569'
            },
            {
                food: 'Tofu',
                servingSize: "4 oz.",
                calories: '86',
                kJ: '360'
            },
            {
                food: 'Egg',
                servingSize: "1 large",
                calories: '78',
                kJ: '327'
            },
            {
                food: 'Fish, Catfish, cooked',
                servingSize: "2 oz.",
                calories: '136',
                kJ: '569'
            },
            {
                food: 'Pork, cooked',
                servingSize: "2 oz.",
                calories: '137',
                kJ: '574'
            },
            {
                food: 'Shrimp, cooked',
                servingSize: "2 oz.",
                calories: '56',
                kJ: '234'
            }
        ]
    },
    {
        categoryName: "Common Meals/Snacks",
        categoryRows: [
            {
                food: 'Bread, white',
                servingSize: "1 slice (1 oz.)",
                calories: '75',
                kJ: '314'
            },
            {
                food: 'Butter',
                servingSize: "1 tablespoon",
                calories: '102',
                kJ: '427'
            },
            {
                food: 'Caesar salad',
                servingSize: "3 cups",
                calories: '481',
                kJ: '2014'
            },
            {
                food: 'Cheeseburger',
                servingSize: "1 sandwich",
                calories: '285',
                kJ: '1193'
            },
            {
                food: 'Hamburger',
                servingSize: "1 sandwich",
                calories: '250',
                kJ: '1047'
            },
            {
                food: 'Dark Chocolate',
                servingSize: "1 oz.",
                calories: '155',
                kJ: '649'
            },
            {
                food: 'Corn',
                servingSize: "1 cup",
                calories: '132',
                kJ: '553'
            },
            {
                food: 'Pizza',
                servingSize: "1 slice (14\")",
                calories: '285',
                kJ: '1193'
            },
            {
                food: 'Potato',
                servingSize: "6 oz.",
                calories: '130',
                kJ: '544'
            },
            {
                food: 'Rice',
                servingSize: "1 cup cooked",
                calories: '206',
                kJ: '862'
            },
            {
                food: 'Sandwich',
                servingSize: "1 (6\" Subway Turkey Sandwich)",
                calories: '200',
                kJ: '837'
            }
        ]
    },
    {
        categoryName: "Beverages/Dairy",
        categoryRows: [
            {
                food: 'Beer',
                servingSize: "1 can",
                calories: '154',
                kJ: '645'
            },
            {
                food: 'Coca-Cola Classic',
                servingSize: "1 can",
                calories: '150',
                kJ: '628'
            },
            {
                food: 'Diet Coke',
                servingSize: "1 can",
                calories: '0',
                kJ: '0'
            },
            {
                food: 'Milk (1%)',
                servingSize: "1 cup",
                calories: '102',
                kJ: '427'
            },
            {
                food: 'Milk (2%)',
                servingSize: "1 cup",
                calories: '122',
                kJ: '511'
            },
            {
                food: 'Milk (Whole)',
                servingSize: "1 cup",
                calories: '146',
                kJ: '611'
            },
            {
                food: 'Orange Juice',
                servingSize: "1 cup",
                calories: '111',
                kJ: '465'
            },
            {
                food: 'Apple cider',
                servingSize: "1 cup",
                calories: '117',
                kJ: '490'
            },
            {
                food: 'Yogurt (low-fat)',
                servingSize: "1 cup",
                calories: '154',
                kJ: '645'
            },
            {
                food: 'Yogurt (non-fat)',
                servingSize: "1 cup",
                calories: '110',
                kJ: '461'
            }
        ]
    },
]

export const mealPlanningSamples = [
    {
        planHeading: '1200 calories meal plan',
        plan: [
            {
                meal: 'Breakfast',
                plan: ['All-bran cereal (125)', 'Milk (50)', 'Banana (90)']
            },
            {
                meal: 'Snack',
                plan: ['Cucumber (30)', 'Avocado dip (50)']
            },
            {
                meal: 'Total',
                plan: '345 Calories'
            },
            {
                meal: 'Lunch',
                plan: ['Grilled cheese with tomato (300)', 'Salad (50)']
            },
            {
                meal: 'Snack',
                plan: ['Walnuts (100)']
            },
            {
                meal: 'Total',
                plan: '450 Calories'
            },
            {
                meal: 'Dinner',
                plan: ['Grilled Chicken (200)', 'Brussel sprouts (100)', ' Quinoa (105)']
            },
            {
                meal: 'Total',
                plan: '405 Calories'
            }
        ]
    },
    {
        planHeading: '1500 calories meal plan',
        plan: [
            {
                meal: 'Breakfast',
                plan: ['Granola (120)', 'Greek yogurt (120)', 'Blueberries (40)']
            },
            {
                meal: 'Snack',
                plan: ['Orange (70)']
            },
            {
                meal: 'Total',
                plan: '350 Calories'
            },
            {
                meal: 'Lunch',
                plan: ['Chicken and vegetable soup (300)', 'Bread (100)']
            },
            {
                meal: 'Snack',
                plan: ['Apple (75)', 'Peanut butter (75)']
            },
            {
                meal: 'Total',
                plan: '550 Calories',
            },
            {
                meal: 'Dinner',
                plan: ['Steak (375)', 'Mashed potatoes (150)', 'Asparagus (75)']
            },
            {
                meal: 'Total',
                plan: '600 Calories'
            }
        ]
    },
    {
        planHeading: '2000 Calories meal plan',
        plan: [
            {
                meal: 'Breakfast',
                plan: ['Buttered toast (150)', 'Egg (80)', 'Banana (90)', 'Almonds (170)']
            },
            {
                meal: 'Snack',
                plan: ['Greek yogurt (120)', 'Blueberries (40)']
            },
            {
                meal: 'Total',
                plan: '650 Calories'
            },
            {
                meal: 'Lunch',
                plan: ['Grilled chicken (225)', 'Grilled vegetables (125)', 'Pasta (185)']
            },
            {
                meal: 'Snack',
                plan: ['Hummus (50)', 'Baby carrots (35)', 'Crackers (65)']
            },
            {
                meal: 'Total',
                plan: '685 Calories'
            },
            {
                meal: 'Dinner',
                plan: ['Grilled salmon (225)', 'Brown rice (175)', 'Green beans (100)', 'Walnuts (165)']
            },
            {
                meal: 'Total',
                plan: '665 Calories'
            }
        ]
    },
]

export const calorieDenseFoods = [
    {
        name: 'Homemade Granola',
        calories: '489'
    },
    {
        name: 'Meats (Chicken Leg)',
        calories: '184'
    },
    {
        name: 'Firm Tofu',
        calories: '144'
    },
    {
        name: 'Fish (Salmon)',
        calories: '206'
    },
    {
        name: 'Avocados',
        calories: '160'
    },
    {
        name: 'Dairy Foods (Milk)',
        calories: '61'
    },
    {
        name: 'Chickpeas (Garbanzo Beans)',
        calories: '164'
    },
    {
        name: 'Sweet Potatoes',
        calories: '101'
    },
    {
        name: 'Whole Grains (Brown Rice)',
        calories: '123'
    },
    {
        name: 'Nuts (Macadamia Nuts)',
        calories: '718'
    }
]