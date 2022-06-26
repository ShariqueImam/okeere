import React from 'react'
import ProductDetails from '../../components/ProductDetails/ProductDetails'


const style = {


}
const ProductDetailsRoute = (props) => {
    // slug will hold the product id from the url
    const { slug } = props
    return (
        <div>
            <ProductDetails />
        </div>
    )
}

export default ProductDetailsRoute


export function getServerSideProps(context) {
    return {
        props: { slug: context.params.slug }
    }
}