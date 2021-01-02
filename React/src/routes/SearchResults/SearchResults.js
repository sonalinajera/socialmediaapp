import React from 'react'


const SearchResults = ({ filteredFriends }) => {

    return (
        <div className="search-results">
            <ul>
                {filteredFriends.map((friend) => {
                    return <li key={friend.id}>{friend.firstName.toLowerCase()} {friend.lastName.toLowerCase()}</li>
                })}
            </ul>
        </div>
    )
}


export default SearchResults
