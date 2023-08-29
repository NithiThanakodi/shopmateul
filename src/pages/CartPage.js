import { CartItem } from "../components"
import { useTitle } from "../hooks/useTitle";

export const CartPage = () => {
    const itmes = [
        { id: "1001", name: "Sony Wh-Ch510 Bluetooth Wireless", price: 149 },
        { id: "1002", name: "boAt Rockerz 450", price: 69 },
    ];
    useTitle("Cart");
    return (
        <main>
            <section className="mt-20">
                <h1 className="text-center font-bold text-2xl">Cart Items: 2</h1>
                <div className="pt-5">
                    {itmes.map((item) => (
                        <CartItem item={item} />
                    ))}
                </div>
            </section>
        </main>
    )
}
