import React, { useContext, useState, useEffect } from 'react'
import SearchResults from '../../routes/SearchResults/SearchResults'
/*The Sevice file from which the "users" JSON which carries the firstNames to 
display as search results and allow the user to click to go to the selected user's profile. 
*/
import PostsApiService from '../../services/PostsApiService'
import './SearchBar.css'
//Do NOT delete the next line. "M" is necessary for using materialize css.
import M from "materialize-css"
import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import Autocomplete from 'react-autocomplete'

const SearchBar = (props) => {
    //friends is an array of user objects that the current user needs to search for their friends.
    const [friends, setFriends] = useState([])
    const [search, setSearch] = useState('')

    //populate the friends in the state as soon as the component renders.
    useEffect(() => {
        const dummyData = PostsApiService.getDummyData()
        setFriends(dummyData)
    }, [])

    //Autocomplete is a component from a 3rd party library called 'react-autocomplete'.
    return (
        <div className="search-bar-and-results">
            <Autocomplete
                getItemValue={(item) => item.firstName + ' ' + item.lastName}
                items={friends}
                shouldItemRender={(item, search) => item.firstName.toLowerCase().indexOf(search.toLowerCase()) !== -1
                    || item.lastName.toLowerCase().indexOf(search.toLowerCase()) !== -1}

                renderItem={(item, isHighlighted) =>
                    <div key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'orange' }}>
                        {/*This is where we grab the item's(friend's) id to redirect to that friend's page*/}
                        <span onClick={() => console.log("Function to redirect to that friend/ or in the onSelect attribute")}>{item.firstName} {item.lastName}</span>
                    </div>
                }
                inputProps={{ placeholder: "Find your friends" }}
                value={search}
                onChange={(e) => setSearch(e.target.value.substr(0, 20).toLowerCase())}
                onSelect={(value) => {
                    setSearch(value)
                    console.log(value)
                }}
            />
        </div>
    )
}
export default SearchBar


/////////KEEP THIS HERE IN CASE WE WANNA SWITCH BACK TO Vanilla
// const [searching, setSearching] = useState(false)

{/* <input value={search} className="form-control" type="text" placeholder="Search" onChange={(ev) => {
                updateSearch(ev)
                toggleSearching(ev)
            }} />
            {!searching ? '' : <SearchResults filteredFriends={filteredFriends} />} */}


  // //Get user's input and store that in the "search" property in the state
// const updateSearch = (event) => {
//     setSearch(event.target.value.substr(0, 20).toLowerCase())
// }


// //display the results when searching, hide them afterwards.
// const toggleSearching = (ev) => {
//     if (ev.target.value.length) {
//         setSearching(true)
//     }
//     else {
//         setSearching(false)
//     }
// }

// // //Display only the results whose letters are included within the searched word(user's input)
// let filteredFriends = friends.filter(
//     (friend) => {
//         return friend.firstName.toLowerCase().indexOf(search) !== -1;
//     }
// )
