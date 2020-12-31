import React, { useContext, useState, useEffect } from 'react'


const SearchResults = ({ filteredFriends }) => {

    const [searchClicked, setSearchClicked] = useState(false)

    if (!searchClicked) {
        return (
            <div className="search-results">
                <ul>
                    {filteredFriends.map((friend) => {
                        return <li key={friend.id}>{friend.name.toLowerCase()}</li>
                    })}
                </ul>
            </div>
        )
    }

}

export default SearchResults
