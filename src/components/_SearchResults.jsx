import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SearchResults = () => {
    const { q } = useParams()
    const searchRef = useRef(null)
    const [searchData, setSearchData] = useState([])
    const [searchText, setSearchText] = useState(q)
    const navigate = useNavigate()

    let api = `https://saavn.me/search/songs?query=${searchText}`
    const getSearchResults = async () => {
        let response = await fetch(api)
        let data = await response.json()
        // console.log(data)
        setSearchData(data.data.results)
        // fetchSong(songData?.downloadUrl[songData?.downloadUrl?.length - 1]?.link)
        // console.log(searchData)
    }

    useEffect(() => {
        getSearchResults()
        searchRef.current.value = q
    }, [searchText])
  return (
    <div className='searchPage'>
        <form className="search" onSubmit={(e) => {
            e.preventDefault()
            setSearchText(searchRef.current.value); 
            navigate("/search/"+searchRef.current.value)
            }}>
            <label htmlFor="#s">Search: </label>
            <input type="text" ref={searchRef} id='s' onChange={(e) => {searchRef.current.value = e.target.value}}/>
            <button type='submit' className='btn'>Search</button>
        </form>
        <div className="searchResults">
            {searchData?searchData?.map((song, key) => {
                return <Link to={"/id/"+song.id} style={{textDecoration: "none", color: "black"}} key={key}>
                    <div className="searchQuerySongDiv">
                        <img src={song?.image[song?.image?.length - 1]?.link} alt="" className="img" width={50}/>
                        <div className="info">
                            <h3 dangerouslySetInnerHTML={{__html: song?.name}}></h3>
                            <h4 dangerouslySetInnerHTML={{__html: song?.primaryArtists}}></h4>
                        </div>
                    </div>
                </Link>
            }):<></>}
        </div>
        <button className='btn-danger' onClick={() => {
            navigate("/")
        }}>Go Back</button>
    </div>
  )
}

export default SearchResults
