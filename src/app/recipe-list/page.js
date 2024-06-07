import RecipeList from "@/components/recipe-list"

const recipeData = async () => {
  try {
    const recipe = await fetch('https://dummyjson.com/recipes');
    const res = await recipe.json()

    return res?.recipes

  } catch (error) {
    throw new Error(error)
  }
}

const Recipes = async () => {

  const data = await recipeData();

  return  <RecipeList data={data} />
}

export default Recipes
