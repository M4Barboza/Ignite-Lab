/* import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo" */
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import { Router } from "./Router"
import { Event } from "./pages/Event"

/* const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id
      title
      teacher{
        name
      }
    }
  }
` */

/* function App() {
   useEffect(()=>{
    client.query({
      query: GET_LESSONS_QUERY,
    }).then(response=>{
      console.log(response.data)
    })
  },[]) */

/* interface Lesson{
  id: string;
  title: string;
}

function App() {
  const {data} = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)

  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
} */

function App(){
  return(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ApolloProvider>
    
      
    
  )
}

export default App
