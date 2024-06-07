import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const RecipeList = ({ data }) => {

    console.log(data)
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                data && data.length > 0 ?
                data.map(item => <Link href={`/recipe-list/${item.id}`} key={item.id}>
                    <Card>
                        <CardContent>
                            <div>
                                <img
                                    src={item?.image}
                                    alt={item?.name}
                                    className="h-full w-full object-cover object-top"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-700">{item.name}</h3>
                            </div>
                        </CardContent>
                    </Card>
                </Link>)
                : null
            }
        </div>
      </div>
    </div>
  )
}

export default RecipeList
