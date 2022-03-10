import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Update = () => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("luis");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  
  const { id } = useParams();
  const {data: blog, isLoading, error} = useFetch("http://localhost:8000/blogs/" + id);
  console.log("fetchInit", blog)

  //const title1 = blog.title
 //console.log("TITLE", title1)
  const [title, setTitle] = useState(blog.title);
  console.log("titleInit",title)



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form", e)
    console.log("title", e.target[0].value)
   // setTitle(e.target[0].value)
   // console.log("titleupd", title)
    const blog = { title, body, author };
    console.log("updated", blog);
    setIsPending(true);

    fetch("http://localhost:8000/blogs/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("fetch", blog);
      setIsPending(false);
      //history.go(-1) go to previous page
      navigate("/");
    });
  };

  componentDidMount() {
      setTitle(blog.title)
  }


  return (
    <div className="create">
      {isLoading && <div> Is loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <>
          <h2>Update Blog</h2>
          <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input
              type="text"
              required
              defaultValue={blog.title}
              onChange={(e) => setTitle(e.target.value) }
            />
            <label>Blog body:</label>
            <textarea
              required
              defaultValue={blog.body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog author:</label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
              <option value="luis">Luis</option>
              <option value="mary">mary</option>
            </select>
            {!isPending && <button>Update</button>}
          </form>
        </>
      )}
    </div>
  );
};

export default Update;
