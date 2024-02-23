

export default function Card({
    productName = "Macbook",
    currentPrice = "999",
    oldPrice = "1,999",
    image = "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60",
    description = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi"
}) {
    return (
        <>
            <div className=" w-[180px] sm:w-[250px] p-2 rounded-md border m-2">
                <div className=" border p-2 h-44 flex justify-center items-center ">
                    <img
                        src={image}
                        alt="Laptop"
                        className=" h-40 object-contain rounded-md "
                    />
                </div>
                <div className="p-4">
                    <div className="flex items-center justify-between flex-wrap">
                        <h1 className="sm:text-lg text-sm font-semibold">{productName}</h1>
                        <div><span className=" line-through text-sm mr-1 ml-1"> {oldPrice}</span><b className="text-lg">{currentPrice}</b></div>
                    </div>
                    <p className="mt-3 hidden sm:flex text-sm text-gray-600">
                        {description}
                    </p>
                    <button
                        type="button"
                        className="mt-4 text-lg rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Add-to-cart
                    </button>
                </div>
            </div>

        </>
    )
}