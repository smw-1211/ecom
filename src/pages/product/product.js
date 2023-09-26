import { useEffect, useState } from "react"
import { FakeStoreApi } from "../../services/fake-store-api"
//here useParams is used since we simply pass the product id and find the details of that particular product.
import { Link, useParams } from "react-router-dom"
//import single product card
import { Item } from "../../components/item/item"
import './product.css'

const Product = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState();
    const { productId } = useParams();

    useEffect(()=> {
        const fetchProduct = async () => {
            setLoading(true);
            const product = await FakeStoreApi.fetchProductById(productId);
            setProduct(product);
            console.log("prodddddddddddddddddddddddd", product)
            setLoading(false);
        }
        fetchProduct().catch(console.error);
    }, [productId])

    if (!loading && !product) {
        return (
            <>
            <div className="container">
                <div className="product py-2">
                    <div className="details p-3">
                        Product Not found. Please visit {""}
                        <Link to="/" replace>
                            homepage 
                        </Link>{""}
                          to see all available products.
                    </div>
                </div>
            </div>
            </>
        )    
    }

    return (
        <div className="container">
            {loading ? (
                <div className={"loader"}></div>
            ) : (
                <div className="product py-2">
                    <div className="details grid p-3">
                        <div className="product-image">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="info">
                            <div className="description">
                                <h3>{product.title}</h3>
                                <p className=" my-2">{product.description}</p>
                            </div>
                            <div className="flex">
                                <span className="price">${product.price}</span>
                                <span className="cart" onClick={() => {}}>
                                    <img src="/cart.svg" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export { Product }