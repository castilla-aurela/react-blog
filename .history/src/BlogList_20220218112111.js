const BlogList = (props) => {
    const blogs = props.blogs
    const title = props.tittle

    return ( 
        <div className="blog-list">
            <h2>{</h2>
            {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.tittle}</h2>
          <p>written by {blog.author}</p>
        </div>
      ))}
        </div>
     );
}
 
export default BlogList;