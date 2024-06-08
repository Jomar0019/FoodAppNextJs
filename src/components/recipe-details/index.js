const SingleRecipe = ({ data }) => {


    console.log(data)
  return (
    <div className="w-[500px] h-[500px]">
      <img 
        src={data?.image}
        alt={data?.name}
        className="w-full h-full object-cover"
      />
      <p>{data?.name}</p>
      
    </div>
  )
}

export default SingleRecipe
