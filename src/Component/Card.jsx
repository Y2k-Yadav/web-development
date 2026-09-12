export function Card({data}) {
    return (
        <div className='flex flex-col justify-content  w-[90%] m-auto items-center h-full 
        sm:flex-row flex-wrap justify-between item-center gap-8 my-16'>
            {
                data.map((item) =>
                (
                    <div key={item.id} className='bg-blue-400 w-25% h-120'>
                        <img  className='w-[90%] h-[350px] mx-auto p-4 bg-white rounded-2xl mt-2 object-cover' src={item.products[0].thumbnail} alt={item.products[0].title} />
                        <h2 className='w-50% p-2'>Product Name: {item.products[0].title}</h2>
                        <p className='w-90% p-2' >Price: ${item.products[0].price.toFixed(2)}</p>
                        <p className='w-90% p-2'>Quantity: {item.products[0].quantity}</p>
                    </div>
                )
                )

            }
        </div>
 )
}
