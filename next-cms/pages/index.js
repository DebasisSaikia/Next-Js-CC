import { createClient } from 'contentful'

export async function getStaticProps() {

  const credit = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const res = await credit.getEntries({ content_type: 'food' });

  return {
    props: {
      foods: res.items
    }
  }
}

export default function Recipes({ foods }) {
  console.log(foods)
  return (
    <div className="recipe-list">
      Recipe List
    </div>
  )
}