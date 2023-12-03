import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Body = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

  return (
    <div>
        <form onSubmit={(e) => e.preventDefault()} className='inputgroup'>
            <div className="inside">
                <label htmlFor="#sni" id='snl'>Enter song name: </label>
                <input type="text" id='sni' value={query} onChange={(e) => {setQuery(e.target.value)}}/>
            </div>
            <button type="submit" className='btn' onClick={() => {
                if(query==null||query===null||query==""||query==="") {
                    alert("Enter a valid name!")
                    return;
                }
                navigate("/song/"+query)
                }
            }>Search</button>
        </form>
    </div>
  )
}

export default Body
