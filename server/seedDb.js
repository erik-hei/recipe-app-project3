const db = require('./models');

// db.Recipe.create({
//   title: 'Spaghetti Carbonara 2',
//   servings: '6',
//   description: 'An Italian Classic',
//   alt: 'some sweet spaghetti',
//   image: 'http://placekitten.com/200/300',
//   ingredients: ['meatballs', 'sauce', 'pasta'],
//   directions: ["Put the meat in a bowl", "Let it sit out for 3 days", "Throw the meat and the bowl away"],
//   tags: ["meat", "Karma", "Balls", "Sauce", "Italian"]
// })
// .catch(err => {
//   console.log('Error Message', err);
// });

db.User.create({
  name: 'Maangchi Fan Club',
  email: 'maangchi@test.com',
  password: 'maangchi1234',
  image: 'https://www.maangchi.com/wp-content/uploads/2015/01/Maangchis-Real-Korean-Cooking.jpg',
  bio: 'Unofficial fan club for Korean Cooking Expert and Extraordinare, Maangchi',
  userRecipes: [],
  favRecipes: []
}).then(author => {
  db.Recipe.create({
    title: "Japchae (Sweet potato starch noodles stir fried with vegetables)",
    alt: 'a delicious bowl of japchae',
    userId: author._id,
    image: "https://www.maangchi.com/wp-content/uploads/2007/07/japchae_plate-590x446.jpg",
    servings: '4',
    description: "Japchae, sweet potato starch noodles stir fried with vegetables and meat, is one of Korea’s best-loved dishes, and one of the most popular on my website as well.",
    directions: [
      "Put the beef and shiitake mushrooms into a bowl and mix with 1 clove of minced garlic, 1 teaspoon sugar, ¼ teaspoon ground black pepper, 2 teaspoons soy sauce, and 1 teaspoon of sesame oil with a wooden spoon or by hand. Cover and keep it in the fridge.",
      "Crack the egg and separate the egg yolk from the egg white. Remove the white stringy stuff (chalaza) from the yolk. Beat in a pinch of salt with a fork.",
      "Add 1 teaspoon of vegetable oil to a heated nonstick pan. Swirl the oil around so it covers the pan, and then wipe off the excess heated oil with a kitchen towel so only a thin layer remains on the pan.",
      "To keep the jidan as yellow as possible, turn off the heat and pour the egg yolk mixture into the pan. Tilt it around so the mixture spreads thinly. Let it cook using the remaining heat in the pan for about 1 minute. Flip it over and let it sit on the pan for 1 more minute.",
      "Let it cool and slice it into thin strips.",
      "Bring a large pot of water to a boil. Add the spinach and blanch for 30 seconds to 1 minute, then take it out with a slotted spoon or strainer. Let the water keep boiling to cook the noodles.",
      "Rinse the spinach in cold water to stop it from cooking. Squeeze it with your hands to remove any excess water. Cut it a few times and put it into a bowl. Mix with 1 teaspoon soy sauce and 1 teaspoon sesame oil. Put it into a large mixing bowl.",
      "Put the noodles into the boiling water, cover and cook for 1 minute. Stir them with a wooden spoon so they don’t stick together. Cover and keep cooking for another 7 minutes until the noodles are soft and chewy.",
      "Strain and cut them a few times with kitchen scissors. Put the noodles into the large bowl next to the spinach. Add 2 teaspoons sesame oil, 1 teaspoon soy sauce, and 1 teaspoon sugar. Mix well by hand or a wooden spoon. This process will season the noodles and also keep the noodles from sticking to each other.", 
      "Heat up a skillet over medium high heat. Add 2 teaspoons vegetable oil with the onion, the green onion, and a pinch of salt. Stir-fry about 2 minutes until the onion looks a little translucent. Transfer to the noodle bowl.",
      "Heat up the skillet again and add 2 teaspoons vegetable oil. Add the white mushrooms and a pinch of salt. Stir-fry for 2 minutes until softened and a little juicy. Transfer to the noodle bowl.",
      "Heat up the skillet and add 1 teaspoon vegetable oil. Add the carrot and stir-fry for 20 seconds. Add the red bell pepper strips and stir-fry another 20 seconds. Transfer to the noodle bowl.",
      "Heat up the skillet and add 2 teaspoons vegetable oil. Add the beef and mushroom mixture and stir fry for a few minutes until the beef is no longer pink and the mushrooms are softened and shiny. Transfer to the noodle bowl.",
      "Add 1 minced garlic clove, 1 tablespoon soy sauce, 1 tablespoon sugar, ½ teaspoon ground black pepper, and 2 teaspoons of sesame oil to the mixing bowl full of ingredients. Mix all together by hand.",
      "Add the egg garnish and 1 tablespoon sesame seeds. Mix it and transfer it to a large plate and serve."
    ],
    ingredients: [
      "4 ounces beef, filet mignon (or pork shoulder), cut into ¼ inch wide and 2½ inch long strips", 
      "2 large dried shiitake mushrooms, soaked in warm water for 2 to 3 hours, cut into thin strips",
      "2 garlic cloves, minced",
      "1 tablespoons plus 2 teaspoons sugar",
      "2 tablespoons plus 1 teaspoon soy sauce",
      "2 tablespoons sesame oil",
      "1 tablespoon toasted sesame seeds",
      "1 large egg",
      "4 ounces spinach, washed and drained",
      "4 ounces of dangmyeon (sweet potato starch noodles)",
      "2 to 3 green onions, cut crosswise into 2 inch long pieces",
      "1 medium onion (1 cup), sliced thinly",
      "4 to 5 white mushrooms, sliced thinly",
      "1 medium carrot (¾ cup), cut into matchsticks",
      "½ red bell pepper, cut into thin strips (optional)",
      "ground black pepper",
      "salt",
      "vegetable oil"
    ],
    tags: [
      "Korean food",
      "beef",
      "Asian food",
      "Japchae"
    ]
  }).then(recipe => {
    // add recipe to author
    db.User.findByIdAndUpdate(author._id,
      {$push: {userRecipes: recipe._id}}
    ).catch(err=>console.log(err))
  }).catch(err=>console.log(err))
  db.Recipe.create({
    title: "Gimbap (Seaweed rice rolls)",
    alt: 'some delicious gimbap',
    userId: author._id,
    image: "https://www.maangchi.com/wp-content/uploads/2007/08/gimbap_blog-590x351.jpg",
    servings: '3',
    description: "Basically, gimbap is a seaweed rice roll made of gim (a sheet of dried seaweed) and bap (rice). So as long as you can roll some rice in gim, you can say: Check out the gimbap that I made!",
    directions: [
      "Place freshly made rice in a large, shallow bowl. Gently mix in ½ teaspoon salt and 2 teaspoons sesame oil over top with a rice scoop or a wooden spoon.",
      "Let it cool down enough so it’s no longer steaming. Cover and set aside.",
      "Combine the blanched spinach, 2 minced garlic cloves, ½ teaspoon salt, and 2 teaspoons sesame oil in a bowl.",
      "Mix well by hand and put it on a large platter with the sliced yellow pickled radish.",
      "Combine the carrot matchsticks with ¼ teaspoon salt. Mix well and let it sweat for 5 to 10 minutes. Heat a pan and add a few drops vegetable oil.",
      "Squeeze out excess water from the carrot, then saute for about 1 minute. Put it on the platter next to the spinach.",
      "Trim the fat from the skirt steaks and slice into ¼ inch wide, 3 to 5 inch strips. Put the strips into a bowl. Add 2 teaspoons soy sauce, 1 minced garlic clove, ¼ teaspoon ground black pepper,1 tablespoon plus 1 teaspoon brown (or white) sugar, and 2 teaspoons sesame oil.",
      "Mix well by hand.",
      "Set aside, and let them marinate while we do the egg strips.",
      "Crack 3 eggs in a bowl and add ¼ teaspoon salt. Beat it with fork and remove the stringy chalaza.",
      "Drizzle a few drops of oil on a heated 10 to 12 inch non-stick pan. Wipe off the excess with a paper towel so only a thin sheen of oil remains. Turn down the heat to low and pour the egg mixture into the pan. Spread it into a large circle so it fills the pan.",
      "When the bottom of the egg is cooked, flip it over with a spatula. Remove from the heat and let it cook slowly in the hot pan for about 5 minutes, with the ultimate goal of keeping the egg as yellow as possible, and not brown.",
      "Cut it into ½ inch wide strips. Put it next to the spinach on the platter.",
      "Heat up a pan over medium high heat and cook the marinated beef, stirring it with a wooden spoon until well cooked.",
      "Set aside.",
      "Place a sheet of gim on a bamboo mat with the shiny side down. Evenly spread about ¾ cup of cooked rice over top of it, leaving about 2 inches uncovered on one side of the gim.",
      "Place beef, carrot, yellow pickled radish strip, a few egg strips, and spinach in the center of the rice.",
      "Use both hands to roll the mat (along with gim and rice) over the fillings, so one edge of the rice and gim reaches the opposite edge. This centers the fillings in the roll, so they’ll be nicely in the middle when you slice it.",
      "Grab the mat with both hands and and press it tightly as you continue rolling the gimbap. Push out the mat as you roll, so it doesn’t get wrapped in the gimbap.",
      "Remove the roll from the mat at the end and set the finished roll aside with the seam down, to seal it nicely.",
      "Repeat 4 more times with the remaining ingredients.",
      "Put some sesame oil on the finshed rolls and sprinkle some sesame seeds over top. Cut each roll into ¼ inch bite size pieces with a sharp knife, occasionally wiping it with a wet paper towel or cloth to clean the starch off and to ease cutting.",
      "Put it on a plate and serve immediately or pack it in a lunchbox."
    ],
    ingredients: [
      "5 sheets of gim (seaweed paper), roasted slightly",
      "4 cups cooked rice (the recipe is here, but make with 2 cups of short grain rice instead of 1 cup)",
      "½ pound beef skirt steak (or tenderloin, or ground beef)",
      "1 large carrot, cut into matchsticks (about 1½ cup)",
      "5 strips of yellow pickled radish (use pre-cut danmuji or cut into 8 inch long strips)",
      "8  to 10 ounces spinach (1 small bunch), blanched, rinsed in cold water, and strained",
      "3 eggs",
      "3 garlic cloves",
      "2 teaspoons soy sauce",
      "1 tablespoon plus 1 teaspoon brown (or white) sugar",
      "1½ teaspoon salt",
      "2½ tablespoons sesame oil",
      "vegetable oil"
    ],
    tags: [
      "Korean food",
      "beef",
      "Asian food",
      "Gimbap"
    ]
  }).then(recipe => {
    // add recipe to author
    db.User.findByIdAndUpdate(author._id,
      {$push: {userRecipes: recipe._id}}
    ).catch(err=>console.log(err))
  }).catch(err=>console.log(err))  
  db.Recipe.create({
    title: "Jjajangmyeon (Noodles in Black Bean Sauce)",
    alt: 'some delicious jjajangmyeon',
    userId: author._id,
    image: "https://www.maangchi.com/wp-content/uploads/2007/07/jjajangmyeon-plate.jpg",
    servings: '3',
    description: "Jjajangmyeon is everybody’s favorite food. When I was young, a plate of jjajangmyeon from a Chinese restaurant always made me excited. When you order jjajangmyeon from a Chinese restaurant the delivery man brings the noodles in a special tin box in under 30 minutes!",
    directions: [
      "Stir-fry the pork belly in a large, deep wok with 1 Tablespoon of vegetable oil for about 4-5 minutes, until golden brown and crispy.",
      "Pour out the excess pork fat.",
      "Add radish and stir fry for 1 minute.",
      "Add potato, onion, and zucchini and keep stirring for about 3 minutes until the potato looks a little translucent.",
      "Clear a space in the center of the wok by pushing the ingredients to the edges.",
      "Add 2 Tablespoons of vegetable oil to the center of the wok, then add ¼ cup of black bean paste and stir it with a wooden spoon for 1 minute to fry it. Then mix everything in the wok and keep stirring.",
      "Add  2 cups of water to the wok and let it cook with the lid closed for about 10 minutes.",
      "Open the lid and taste a sample of the radish and potato. If they’re fully cooked, stir in the starch water little by little. Keep stirring until it’s well mixed and thick.",
      "Add the sesame oil and remove from the heat.",
      "Serve with noodles (jjajangmyeon) or steamed rice (jjajangbap)."
    ],
    ingredients: [
      "jjajangmyeon noodles",
      "½ pound pork belly, cut into ½ inch cubes (about 1½ cups’ worth)",
      "1 cup of Korean radish (or daikon), cut into ½ inch cubes (about 1 cup’s worth)",
      "1 cup of zucchini, cut into ½ inch cubes",
      "1 cup of potato, peeled and cut into ½ inch cubes",
      "1½ cups of onion chunks",
      "3 Tablespoons of vegetable oil",
      "¼ cup and 1 Tablespoon of black bean paste",
      "2 Tablespoons of potato starch powder, combined with ¼ cup water and 1 teaspoon of sugar in a small bowl, set aside",
      "1 teaspoon of sesame oil",
      "½ cup cucumber, cut into thin matchsticks for garnish",
      "water"
    ],
    tags: [
      "Korean food",
      "Pork belly",
      "Asian food",
      "Jjajangmyeon",
      "noodles"
    ]
  }).then(recipe => {
    // add recipe to author
    db.User.findByIdAndUpdate(author._id,
      {$push: {userRecipes: recipe._id}}
    ).catch(err=>console.log(err))
  }).catch(err=>console.log(err))
}).catch(err=>console.log(err))

db.User.create({
  name: "Natasha's Kitchen Fan Club",
  email: 'natasha@test.com',
  password: 'natasha1234',
  image: 'https://natashaskitchen.com/wp-content/themes/natashas-kitchen/images/logo.png',
  bio: "Unofficial fan club for Natasha's Kitchen",
  userRecipes: [],
  favRecipes: []
}).then(author => {
  db.Recipe.create({
    title: "Classic Borscht Recipe",
    alt: 'a delicious bowl of borscht',
    userId: author._id,
    image: "https://natashaskitchen.com/wp-content/uploads/2018/10/Borscht-Recipe-2.jpg",
    servings: '4',
    description: "This is our family’s version of classic borsch and it’s one of the two soups my children absolutely love (Mom’s Meatball Soup being the second). Borscht is definitely on the regular rotation at our house!",
    directions: [
      "Peel, grate and/or slice all vegetables, keeping sliced potatoes in cold water until ready to use.",
      "Heat a large soup pot (5 1/2 Qt or larger) over medium/high heat and add 2 Tbsp olive oil. Add grated beets and sauté 10 minutes, stirring occasionally until beets are softened.",
      "Add 4 cups broth and 6 cups water. Add sliced potatoes and sliced carrots then cook for 10-15 minutes or until easily pierced with a fork.",
      "While potatoes are cooking, place a large skillet over medium/high heat and add 2 Tbsp oil. Add chopped onion, celery and bell pepper. Saute stirring occasionally until softened and lightly golden (7-8 minutes). Add 4 Tbsp Ketchup and stir fry 30 seconds then transfer to the soup pot to continue cooking with the potatoes.",
      "When potatoes and carrots reach desired softness, add 1 can of beans with their juice, 2 bay leaves, 2-3 Tbsp white vinegar, 1 tsp salt, 1/4 tsp black pepper, 1 pressed garlic clove, and 3 Tbsp chopped dill. Simmer for an additional 2-3 minutes and add more salt and vinegar to taste."
    ],
    ingredients: [
      "3 medium beets peeled and grated",
      "4 Tbsp olive oil divided",
      "4 cups reduced sodium chicken broth + 6 cups water",
      "3 medium yukon potatoes peeled and sliced into bite-sized pieces",
      "2 carrots peeled and thinly sliced",
      "2 celery ribs trimmed and finely chopped",
      "1 small red bell pepper finely chopped, optional",
      "1 medium onion finely chopped",
      "4 Tbsp ketchup or 3 Tbsp tomato sauce",
      "1 can white cannelini beans with their juice",
      "2 bay leaves",
      "2-3 Tbsp white vinegar or to taste",
      "1 tsp sea salt or to taste",
      "1/4 tsp black pepper freshly ground",
      "1 large garlic clove pressed",
      "3 Tbsp chopped dill"
    ],
    tags: [
      "Russian food",
      "Ukrainian food",
      "beets",
      "borscht"
    ]
  }).then(recipe => {
    // add recipe to author
    db.User.findByIdAndUpdate(author._id,
      {$push: {userRecipes: recipe._id}}
    ).catch(err=>console.log(err))
  }).catch(err=>console.log(err))
  db.Recipe.create({
    title: "Crusty French Bread",
    alt: 'some delicious French bread',
    userId: author._id,
    image: "https://natashaskitchen.com/wp-content/uploads/2016/03/Rustic-Crusty-French-Loaf-4.jpg",
    servings: '3',
    description: "This rustic crusty French bread loaf is legit. Underneath that amazing crust, you’ll discover a soft spongy center. It’s the perfect blend of chewy and super soft.",
    directions: [
      "In the bowl of a mixer (or by hand), whisk together 1 3/4 cups warm water and 1/2 tsp molasses until dissolved.",
      "In a large glass or plastic bowl, whisk together 2 1/3 cups bread flour, 2 1/2 cups all-purpose flour, 1 1/4 tsp yeast and 2 tsp salt. Add water mixture to flour mixture and mix until you have a single mass of dough. Using a dough hook or clean hands, knead dough 4 minutes. Dough should be soft and feel sticky to the touch but should not stick to clean and dry finger tips. If your dough is too sticky after kneading, add more flour a tablespoon at a time.",
      "Cover dough loosely with plastic wrap and let rise at room temp (69-75˚F) for 4 hours. Every hour while it rests (3 times total), with a wet hand, punch the dough down and fold it over onto itself a few times (a wet hand will keep the dough from sticking to you without adding any unnecessary flour).",
      "After rising a total of 4 hours, draw dough edges into the center, turn over and place in a large well-floured bowl, sprinkle the dough with flour, cover with a tea towel and let rise 1 1/2 hours at room temp.",
      "Meanwhile, place a pizza stone or inverted baking sheet in the center of your oven. Place a cast iron pan on the bottom rack and preheat with both in the oven to 500˚F (for safety, don't use glass baking dishes at those high temps).",
      "Sprinkle the back of a baking sheet generously with fine semolina flour and invert your risen dough over the top of the semolina. Score the top of the dough several times. Slide dough onto preheated baking stone with the help of a spatula if needed and add 1 cup of ice cubes into the preheated cast iron pan below (making sure not to drip on any glass oven surfaces). Bake at 500˚F for 10 minutes then reduce temperature to 400˚F and continue baking 30-35 minutes, or until top is golden brown. Turn oven off, crack door open with a wooden spoon and leave bread in the oven another 10 minutes. Remove bread to a wire rack to cool and let it rest at least 15 minutes before cutting into it.",
      "*To measure flour correctly, fluff it up then spoon it into measuring cups and scrape off the top for an exact measure"
    ],
    ingredients: [
      "1 3/4 cups warm water 90˚ to 100˚F",
      "1/2 tsp molasses",
      "2 1/3 cups 290 grams unbleached bread flour, measured correctly*",
      "2 1/2 cups 315 grams unbleached all-purpose flour, measured correctly*",
      "1 1/4 tsp 1/2 packet instant yeast (quick rise)",
      "2 tsp salt I used fine sea salt",
      "All-purpose Flour and semolina flour for dusting"
    ],
    tags: [
      "bread",
      "French cooking",
      "French bread",
      "baguette"
    ]
  }).then(recipe => {
    // add recipe to author
    db.User.findByIdAndUpdate(author._id,
      {$push: {userRecipes: recipe._id}}
    ).catch(err=>console.log(err))
  }).catch(err=>console.log(err))  
  db.Recipe.create({
    title: "Bliny (Russian Crepes with Cheese)",
    alt: 'some delicious bliny',
    userId: author._id,
    image: "https://natashaskitchen.com/wp-content/uploads/2013/02/Crepes-with-Cheese.jpg",
    servings: '6',
    description: "We’ve been eating crepes for the past 2 weeks for breakfast and I’m pretty sure I’ll never grow tired of them. These Russian crepes with cheese are our favorite breakfast and I love that they can be prepared ahead of time; making it the ideal breakfast dish for company.",
    directions: [
      "Put all of the ingredients for the crepes (in the order that they are listed) in a blender and blend until well combined: 1/2 cup lukwarm water, 1 cup milk, 4 eggs, 4 tbsp melted butter (or olive oil), 1 cup flour.",
      "Melt a dot of butter in a non-stick skillet over medium heat (2 skillets make the process go faster).",
      "As you are pouring into the skillet, swirl the batter to evenly coat the bottom. If you get any small gaps, you can fill them with more batter. Depending on the size of your skillet; add about 2-3 Tbsp of batter. I use a small ladle.",
      "Once the bottom is lightly golden (about a minute or less) flip the crepe using a sharp edged spatula to easily get under the crepe. Let the other side get lightly golden and plop the crepe out onto a cutting board.",
      "Repeat with remaining batter; you may not need to dot with butter after the first time if your skillet is a good one (and remember there is butter in the batter). Don’t stack hot crepes on top of each other. Once they are just warm or room temp, they can be stacked.",
      "Don’t panic, my first crepe never turns out nice so I wolf it down to conceal the evidence!"
    ],
    ingredients: [
      "½ cup lukewarm water",
      "1 cup milk",
      "4 large eggs",
      "4 Tbsp unsalted butter melted. Plus more to sauté.",
      "1 cup all-purpose flour you can use 1/2 cup whole wheat flour and 1/2 cup all-purpose",
      "2 Tbsp sugar",
      "Pinch salt",
      "8 oz package cream cheese at room temperature",
      "16 oz small curd cottage cheese",
      "1/3 cup sugar",
      "¾ cup raisins",
      "Powdered sugar for serving optional"
    ],
    tags: [
      "Russian food",
      "bliny",
      "crepes",
      "cheese",
      "breakfast"
    ]
  }).then(recipe => {
    // add recipe to author
    db.User.findByIdAndUpdate(author._id,
      {$push: {userRecipes: recipe._id}}
    ).catch(err=>console.log(err))
  }).catch(err=>console.log(err))
}).catch(err=>console.log(err))
