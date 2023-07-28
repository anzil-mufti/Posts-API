const Post=({post})=>{
    return <div className="post">
      <h4>{post.title}</h4>
      <hr/>
      <p>{post.body}</p>
    </div> 
}
export default Post;