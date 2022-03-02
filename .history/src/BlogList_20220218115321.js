const BlogList = ({blogs, title, handleDelete}) => {   //destructuring the props
    //const blogs = props.blogs
    //const title = props.title

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.tittle}</h2>
          <p>written by {blog.author}</p>
          <button onClick={()=> handleDelete(blog.if)}>Delete blog</button>
        </div>
      ))}
        </div>
     );
}
 
export default BlogList;