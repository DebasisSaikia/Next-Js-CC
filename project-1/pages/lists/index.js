import styles from '../../styles/Lists.module.css'
import Link from 'next/link';

export const getStaticProps=async()=>{
    const fetchData=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await fetchData.json()

    return{
        props:{persons:data}
    }
}


const Person = ({persons}) => {
    console.log(persons)
    return (
        <div>
            <h1>Person List</h1>
            {persons.map((person)=>{
               return <Link href={`/lists/${person.id}`} key={person.id}>
                        <a className={styles.person}>
                            <h3>{person.name}</h3>
                        </a>
                </Link>
            })}
        </div>
    )
}

export default Person
