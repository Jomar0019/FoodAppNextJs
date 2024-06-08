import SingleRecipe from "@/components/recipe-details";

const singleRecipeDetails = async (p) => {
    try {
        const api = await fetch(`https://dummyjson.com/recipes/${p}`)
        const res = await api.json();
        return res
    } catch (error) {
        throw new Error(error)
    }
}
const RecipeDetails = async ({ params }) => {

    const data = await singleRecipeDetails(params.details);

    console.log(params.details)

  return <SingleRecipe data={data} />
}

export default RecipeDetails
