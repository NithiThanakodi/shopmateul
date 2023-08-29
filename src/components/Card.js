import { Link } from "react-router-dom"

export const Card = ({ item }) => {


    return (
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
            <Link to="/cart">
                <img class="p-2 rounded-t-lg max-w-full max-h-fit" src={`/assets/images/${item.id}.png`} alt="product" />
            </Link>
            <div class="px-5 py-5">
                <Link to="/cart">
                    <h5 class="text-lg font-medium tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                </Link>
                <div class="flex items-center justify-between pt-5">
                    <span class="text-2xl font-medium text-gray-900 dark:text-white">$599</span>
                    <Link to="/cart" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link>
                </div>
            </div>
        </div>
    )
}
