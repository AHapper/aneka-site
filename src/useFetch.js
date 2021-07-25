import { useState, useEffect } from 'react';

// custom hook to access data such that there is loading/error functionalities built in
// takes in url as a parameter to access various endpoints
// custom hooks must start with the keyword "use"
const useFetch = (url) => {

    // useState hook returns two values so have to store in an array 
    // original variable (data) and function which changes variable (set..)
    // useState makes name value 'reactive' so if it changes at any point it will rerender/update value
    // vaue can be of any datatype 
    const [data, setData] = useState(null);

    // loading state for when fetch method is retriving data over internet API
    const [isLoading, setIsLoading] = useState(true);

    // store errors in a state so that it can be outputted to browser
    const [error, setError] = useState(null);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // function which is passed in runs everytime the site rerenders
    // adding empty array after useEffect only runs after the first rerender but not any others
    // putting value inside array only runs useEffect if that value is changed (value becomes dependency)
    // ERRORS: catch block is for network errors, if check is for server-returned errors (catch doesn't get those bc response still returns)
    useEffect(() => {

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("could not fetch data for that resource");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null); 
            })
            .catch(err => {
                
                    setIsLoading(false);
                    setError(err.message);
                
            })

    }, [url]); // url is a dependency for useEffect meaning it will run everytime 'url' is changed

    // return value can be whatever for custom hooks
    return { data, isLoading, error }
}

export default useFetch;