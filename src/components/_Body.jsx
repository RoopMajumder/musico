import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Body = () => {
    const [query, setQuery] = useState("");
    const link = document.querySelector('link[rel="icon"]');
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Musico - Roop Majumder"
        link.setAttribute("type", "image/svg+xml")
        link.setAttribute("href", "../assets/logo.svg")
    }, [])

  return (
    <div>
        <form onSubmit={(e) => e.preventDefault()} className='inputgroup'>
            <div className="inside">
                <label htmlFor="#sni" id='snl'>Enter song name: </label>
                <input type="text" id='sni' placeholder='Enter song name...' value={query} onChange={(e) => {setQuery(e.target.value)}}/>
            </div>
            <div className="btn-group">
            <button type="submit" className='btn' onClick={() => {
                if(query==null||query===null||query==""||query==="") {
                    alert("Enter a valid name!")
                    return;
                }
                navigate("/song/"+query)
                }
            }>Search</button>
            <button type="button" className='btn' onClick={() => {
                navigate("/updates")
            }}>Updates</button>
            </div>
        </form>
    </div>
  )
}

export default Body
