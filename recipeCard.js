let recipeList = {
    mealName: 'meat pie',
    Serves: 5,
    Ingredients: ['meat', 'flour', 'sugar']
};
for (let recipe in recipeList) {
    console.log(recipe);
}