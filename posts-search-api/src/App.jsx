import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Post from './Post'
function App() {
  const [posts,setPosts]=useState([]) //for array as a list
  //to regain the original appearnace , after searching
  const[filteredPost,setFilteredPost]= useState([])
  const[loading,setLoading]=useState(true)
  const [search,setSearch]=useState("")
 const fetchData=async()=>{
  const response=await fetch('https://jsonplaceholder.typicode.com/posts')
  const data= await response.json()
  setPosts(data) //data is an array consisting of user, id, title
  setLoading(false)
  setFilteredPost(data)
 }
 useEffect(()=>{
   const searchResult=posts.filter(post=>{
    return post.title.includes(search)
   })
   setFilteredPost(searchResult)
 },[search])
 //if we'll write just fetchData(), it'll not search
  useEffect(()=>{
    fetchData()
  },[]) //if i'll not write [], it'll become an infinite loop which will break our app
  return (
    <>
     <h1>Posts</h1>
     <input value={search} onChange={e=>setSearch(e.target.value)} type="search" placeholder='Search something...'/ >
     <div className="post-wrapper">
     {
      loading?<h1>Loading</h1>:
      filteredPost.map((post)=>{
        return <Post post={post} key={post.id}/> //during mapping, we can find an error since the key is always unique, therefore using id as a key
      })
     }
     </div>
    </>
  )
}
export default App
