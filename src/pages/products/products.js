import { useEffect, useState } from "react"
import { FakeStoreApi } from "../../services/fake-store-api"
import { useSearchParams } from "react-router-dom"
//import single product card
import { Item } from "../../components/item/item"

const Products = () => {
    const [products, setProducts ] = useState([]);
    const [loading, setLoading ] = useState(true);
    const [ query, setQuery ] = useSearchParams()

    //to get the content from the url after q.
    const searchQuery = query.get('q');

    //to run this on typing content in search box to seach a product.
    useEffect(()=>{
        const fetchProducts = async () => {
            setLoading(true);
            //To fetch data
            const products = searchQuery ? await FakeStoreApi.
            fetchProductBySearchQuery(searchQuery) : await 
            FakeStoreApi.fetchAllProducts();
            setProducts(products);
            console.log(products)
            setLoading(false);
        }
        fetchProducts().catch(console.error)
    }, [searchQuery])

    if(!loading && searchQuery && !products.length){
        return (
            <div className="container">
                <div className="product py-2">
                    <div className="details p-3">
                        No products found matching your query.
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
        <div className="container">
            <div className="products my-5">
                <div className="grid">
                    {loading ? (
                        <div className="loader" />
                    ) : (
                        products.map((product) => (
                            <Item key={product.id} data={product} addToCart={()=> {console.log('hello')}} />
                        ))
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export { Products }