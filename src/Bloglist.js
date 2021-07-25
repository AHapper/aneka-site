import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title}) => {

    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                // key property needed when outputting list using map method, keeps track of items using id property (must be unique)
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h3>{blog.title}</h3>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default Bloglist;