import { constants } from "buffer"
import { useRouter } from "next/router"

const ProductPage = () => {
    const router = useRouter()

    console.log(router.query.id)

    return (
        <>
            <h1>ini halaman products</h1>
            <p>produk : {router.query.id}</p>
        </>
    )
}

export default ProductPage