import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //let name = 'Luis'
  const [name, setName] = useState("Luis");
  const [age, setAge] = useState(25);
  /* const [blogs, setBlogs] = useState([
    {
      tittle: "My new website",
      body: "lorem ipsum ...",
      author: "Luis",
      id: 1,
    },
    {
      tittle: "Welcome party",
      body: "lorem ipsum ...",
      author: "Fernando",
      id: 2,
    },
    { tittle: "Dev Tools", body: "lorem ipsum ...", author: "Mary", id: 3 },
  ]); */

  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) =>{
      const newBlogs = blogs.filter(blog=> blog.id!== id);
      setBlogs(newBlogs);
  }

  const handleClick = () => {
    //name = "Fernando";
    //console.log(name)
    setName("Fernando");
    setAge(30);
  };

  useEffect(()=>{
      //console.log('useEffect ran');
      //console.log(name)
      fetch('http://localhost:8000/blogs').then( res => {
          return res.json();
      }).then( data => {
          console.log(data);
          setBlogs(data);
      })


  }, []);




  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
      {/*<BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>*/}
      {/*<BlogList blogs={blogs.filter((blog)=> blog.author === 'Mary' )} title="Mary's Blogs!" handleDelete={handleDelete}/>*/}
    {blogs && <BlogList blogs={blogs.filter((blog)=> blog.author === 'Mary' )} title="Mary's Blogs!" handleDelete={handleDelete}/>}

    </div>
  );
};

export default Home;
