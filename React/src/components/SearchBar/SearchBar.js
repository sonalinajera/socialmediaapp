import React, { useContext, useState, useEffect } from 'react'
import SearchResults from '../../routes/SearchResults/SearchResults'
import PostsApiService from '../../services/PostsApiService'
import './SearchBar.css'

const SearchBar = (props) => {

    const [search, setSearch] = useState('')
    const [friends, setFriends] = useState([])

    useEffect(() => {
        const dummyData = PostsApiService.getDummyData()
        console.log(dummyData)
        setFriends(dummyData)
    }, [])


    const updateSearch = (event) => {
        setSearch(event.target.value.substr(0, 20).toLowerCase())
    }


    // console.log(friends)

    //Filter through the friends list to find the name that includes letter that the user starts typing
    let filteredFriends = friends.filter(
        (friend) => {
            return friend.name.toLowerCase().indexOf(search) !== -1;
        }
    )

    return (
        <div className="search-bar-and-results">
            <form className="form-inline my-2 my-lg-0">
                <input value={search} onChange={ev => updateSearch(ev)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <SearchResults filteredFriends={filteredFriends} />
        </div>
    )
}

export default SearchBar
