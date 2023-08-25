import Product from "./Product";
import "./Product.css"
import laptop1 from "./imgs/1.png"
import laptop2 from "./imgs/2.png"
import laptop3 from "./imgs/3.png"
import laptop7 from "./imgs/7.png"
import laptop8 from "./imgs/8.png"
import laptop9 from "./imgs/9.png"

export const laptops = [
    {id: 1, name: "Dell Inspiron 13", image: laptop1, price: 1499.99},
    {id: 2, name: "Huawei MateBook", image: laptop2, price: 1499.99},
    {id: 3, name: "Macbook Pro", image: laptop3, price: 2459.99},
    {id: 4, name: "MSI GE76 Raider", image: laptop7, price: 1823.99},
    {id: 5, name: "MSI Delta 15", image: laptop8, price: 2088.99},
    {id: 6, name: "Gigabyte Aorus 17H", image: laptop9, price: 2799.99},
]

export function Products() {
    return (
        <div className="products">
            {laptops.map(laptop => {
                return <Product key={laptop.id} product={laptop}/>
            })}
        </div>
    )
}