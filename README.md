# Health Website

Health and fitness website using ReactJs and Sass.

## Docs

### Fonts
Fonts are from google fonts: https://fonts.google.com/
Fonts used: Courgette, Raleway, poppins

### Icons

This project uses Font Awesome icons.
[Link to Font Awesome](https://fontawesome.com/)

### Images 

Home background image:
- Source: pexels.com by Alleksana 
- Link: https://www.pexels.com/photo/fresh-papaya-slices-on-white-ceramic-plate-4113866/

Services background image:
- source: pexels.com by Ella Olsson
- Link: https://www.pexels.com/photo/fruit-salads-in-plate-1640774/

Services images:
- Source: unDraw
- Link: https://undraw.co/

Recommendation images:
- Source: pexels.com by Antoni Shkraba
- Links: 
-- https://www.pexels.com/photo/packed-food-in-colorful-containers-5852326/ 
-- https://www.pexels.com/photo/bread-with-peanut-butter-and-sliced-banana-on-white-ceramic-plate-6823293/
-- https://www.pexels.com/photo/sliced-bread-with-sliced-vegetables-and-fruits-on-white-ceramic-plate-5589027/

- Source: pexels.com by Roman Odintsov
-- https://www.pexels.com/photo/grilled-vegetables-and-fried-egg-with-beans-and-sausage-4552980/

Recipes page background image:
- Source: pexels.com by Viktoria Slowikowska
- Link: https://www.pexels.com/photo/assorted-fresh-vegetables-in-messy-composition-5678044/

Tool used to compress images: https://imagecompressor.io/
#
### Contact Form

Contact form is submitted using FORMSUBMIT: https://formsubmit.co/

In this project the contact form is submitted using a fetch post request to the URL: 
https://formsubmit.co/ajax/[admin email mask here]

admin email mask is found in the admin email email account which is used to activate form submit 

The contact form has to be activated whenever deployed. After deployment, when a contact form is submitted the admin will get an activation link in his email, after clicking 'Activate form' the contact form will be activated and the admin will be able to receive feedback / messages.
#
### Recipes Search

Recipes are provided by the Edamam Recipe Search API (https://developer.edamam.com/edamam-recipe-api)

Current Edamam Recipe API service which is being used is the free developer package which provides:
- 10,000 API calls/month
- 10 throttling calls/minute

An API call request to the Recipe Search API is made in two cases:
1) User types a recipe/food/ingredient name and clicks search button
2) User clicks one of the listed top 10 healthy foods

Recipes are fetched from this URL which requires a query and id + key of the registered package account (https://api.edamam.com/api/recipes/v2?type=public&q=${query}s&app_id=${id}&app_key=${key})

The id and key are found in the registered account Dashboard > Applications > View

Favorite recipes are stored in context api and then stored in localStorage which is done inside the favorites context reducer
#
### Calorie Calculator

The calorie calculator uses the Fitness Calculator from RapidAPI (https://rapidapi.com/malaaddincelik/api/fitness-calculator) which is free with unlimited requests
