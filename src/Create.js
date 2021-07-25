import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false);

    // useHistory hook allows for redirect to home page (also can go back/forward through history like arrows on web)
    const history = useHistory();

    // listener for blog submission
    const handleSubmit = (e) => {
        e.preventDefault(); // prevents default function to refresh page after submission
        const blog = { title, body, author }; // blog object to upload to json server 

        setIsLoading(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added");
            setIsLoading(false);
            // history.go(-1) goes back to previous page
            history.push('/'); // forward slash is the route to the homepage
        })
    }

    return (
        <div className="create">
            <h2>Add a new blog!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isLoading && <button>add blog</button>}       
                {isLoading && <button disabled>addding blog...</button>}                           
            </form>
        </div>
    );
}

export default Create;