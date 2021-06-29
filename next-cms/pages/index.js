import { createClient } from 'contentful'

export async function getStaticProps() {

  const credit = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })
}

export default function Recipes() {
  return (
    <div className="recipe-list">
      Recipe List
    </div>
  )
}