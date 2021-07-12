import Commerce from '@chec/commerce.js'

// initial value of product is null
let commerce = null;

const getProducts = (commerceKey) => {
    if (commerce) {
        return commerce;
    } else {
        const checPublicKey = commerceKey || process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY;
        const devEnvironment = process.env.NODE_ENV === 'development';

        if (devEnvironment && !checPublicKey) {
            throw Error('A  public API key must be provided as an environment variable');
        }
        commerce = new Commerce(checPublicKey, devEnvironment)
        return commerce
    }
}

export default getProducts
