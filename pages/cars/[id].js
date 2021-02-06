import { useRouter } from 'next/router'
import Head from 'next/head'  // <-- for SEO

export default function Car({ car }) {  // <-- 'car' prop received from getStaticProps
  const router = useRouter()
  const { id } = router.query

  return ( 
    <>
      <Head>
        <title>{car.color} {car.id} </title>
      </Head>

      <h1>Hello {id}</h1>
      <img src={car.image} width="300px"/>
    </>
  )
}

export async function getStaticProps({ params }) {  // <-- id of car from the Query params [id], ie: "ford"
  console.log({params})
  
  const req = await fetch(`http://localhost:3000/${params.id}.json`)
  const data = await req.json()

  console.log({data})

  return {
    props: { car: data },  // <-- 'car' data prop returned here
  }
}

export async function getStaticPaths() {  // <-- gets all the routes

    const req = await fetch('http://localhost:3000/cars.json');
    const data = await req.json();

    const paths = data.map(car => {
        return { params: { id: car } }
    })

    return {
        paths,
        fallback: false
    };
}