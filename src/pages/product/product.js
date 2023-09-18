import { useEffect, useState } from "react"
import { FakeStoreApi } from "../../services/fake-store-api"
//here useParams is used since we simply pass the product id and find the details of that particular product.
import { Link, useParams } from "react-router-dom"
//import single product card
import { Item } from "../../components/item/item"
import './product.css'

const Product = () => {
    return (
        <>
        <div>
            Single product will be shown here
        </div>
        </>
    )
}

export { Product }