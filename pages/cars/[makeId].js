import { useRouter } from 'next/router'
import Head from 'next/head'  // <-- for SEO

export default function Car({ car }) {  // <-- 'car' prop received from getStaticProps
  const router = useRouter()
  const { makeId } = router.query

  return ( 
    <>
      <Head>
        <title>{car.color} {car.makeId} </title>
      </Head>

      <h1>Hello {makeId}</h1>
      <img src={car.image} width="300px"/>
    </>
  )
}

export async function getServerSideProps({ params }) {
  console.log({params})
  
  const req = await fetch(`http://localhost:3000/${params.makeId}.json`)
  const data = await req.json()

  console.log({data})

  return {
    props: { car: data },  // <-- 'car' data prop returned here
  }
}


// server side static props (must include getStaticProps and getStaticPaths)

// export async function getStaticProps({ params }) {  // <-- params is the makeId of car from the Query params [makeId], ie: "ford"
//   console.log({params})
  
//   const req = await fetch(`http://localhost:3000/${params.makeId}.json`)
//   const data = await req.json()

//   console.log({data})

//   return {
//     props: { car: data },  // <-- 'car' data prop returned here
//   }
// }

// export async function getStaticPaths() {  // <-- gets all the makeId routes, ie: ["ford", "tesla", "lambo"]

//     const req = await fetch('http://localhost:3000/cars.json');
//     const data = await req.json();

//     const paths = data.map(car => {
//         return { params: { makeId: car } }
//     })

//     return {
//         paths,
//         fallback: false
//     };
// }