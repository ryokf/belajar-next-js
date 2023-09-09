import { constants } from "buffer"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const ProductPage = () => {
    const router = useRouter()
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {     
        if(!isLogin){
            router.push("/auth/login")
        }
    })


    return (
        <>
            <h1>ini halaman products</h1>
            <p>produk : {router.query.id && router.query.id[0]  !== undefined ? router.query.id[0] : 'tidak ada'}</p>
        </>
    )
}

export default ProductPage