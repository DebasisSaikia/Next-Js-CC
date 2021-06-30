import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Placeholder from '../../components/Placeholder'

const credit = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export const getStaticPaths = async () => {
    const res = await credit.getEntries({
        content_type: 'food'
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const { items } = await credit.getEntries({
        content_type: 'food',
        'fields.slug': params.slug
    })
    return {
        props: { food: items[0] },
        revalidate: 1
    }
}

export default function RecipeDetails({ food }) {
    if (!food) return <Placeholder />
    const { featuredImage, title, cookingTime, ingredients, method } = food.fields

    return (
        <div>
            <div className="banner">
                <Image src={`https:${featuredImage.fields.file.url}`}
                    width={featuredImage.fields.file.details.image.width}
                    height={featuredImage.fields.file.details.image.height}
                />
                <h2>{title}</h2>
            </div>
            <div className="info">
                <p>{cookingTime} mins to cook</p>
                <h3>Ingredients:</h3>
                {ingredients.map(item => {
                    return <span key={item}>{item}</span>
                })}
            </div>

            <div className="method">
                <h3>Method:</h3>
                <div>{documentToReactComponents(method)}</div>
            </div>


            <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
        </div>
    )
}