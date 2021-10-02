import React, {useState} from 'react'

function Main(){
    const [title, setTitle] = useState('')
    const [blog, setBlog] = useState('')
    const [publics, setPublic] = useState(true)
    
    function handleChange(e){
        if(e.target.name === 'title'){
            setTitle(e.target.value)
        } else if(e.target.name === 'button'){ 
            setPublic(!publics)
        } else {
            setBlog(e.target.value)
        }
    }
    function handleSubmit(e){
        e.preventDefault()
        const post = {
            title: title,
            date: new Date(),
            text: blog,
            public: publics
        }
        setTitle(''); setBlog(''); setPublic(true);
        try{
            fetch('https://api1232.herokuapp.com/post', {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(post)
            })
        } catch(err){
            console.log('Succeded >:)')
        }
    }
    return(
        <div>
            <h1>Welcome Back Author Man</h1>
            <h2>Add your new blog post here!</h2>
            <form>
                <h2>Title</h2>
                <input 
                type = 'text'
                required
                onChange = {handleChange}
                value = {title}
                name = 'title'
                />
                <h2>Blog</h2>
                <input 
                type = 'textarea'
                required
                onChange = {handleChange}
                value = {blog}
                name = 'blog'
                />
                <br/>
                Public?
                <input 
                type = 'checkbox'
                required
                onChange = {handleChange}
                checked = {publics}
                value = {publics}
                name = 'button'
                />
                <button onClick = {handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default Main