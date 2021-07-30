import getProducts from "../../utils/commerce";



const Product = ({ product }) => {
    console.log('product', product.name)
    return (
        <div>
            <h1>Product page</h1>
        </div>
    )
}

export default Product

export async function getServerSideProps({ params }) {
    const { id } = params;
    const commerce = getProducts();
    const product = await commerce.products.retrieve(id, {
        type: 'permalink',
    })
    return {
        props: {
            product
        }
    }
}

