import { createClient } from 'contentful'
import FoodCard from '../components/FoodCard';

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
    <div className="food-list">
      {foods.map((food) => {
        return (
          <FoodCard key={food.sys.id} food={food} />
        )
      })}

      <style jsx>{`
    .food-list{
      display:grid;
      grid-template-columns:1fr 1fr;
      grid-gap:20px 60px;
    }
          `}</style>
    </div>
  )
}