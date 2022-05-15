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
        link: '/Calories?to=Meal-planning'
    },
    {
        imageSource: recommendedLinkImage4,
        title: 'Most Calorie Dense Foods to Gain Weight',
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