import React from 'react'

const myDummyData = [
    {
        id: 1,
        name: 'Orkun',
        hairColor: 'brown'
    },

    {
        id: 2,
        name: 'Corbin',
        hairColor: 'Brown'
    },

    {
        id: 3,
        name: 'Sonali',
        hairColor: 'Brown'
    },

    {
        id: 4,
        name: 'Cody',
        hairColor: 'Brown'
    },

    {
        id: 5,
        name: 'Tim',
        hairColor: 'Gold'
    }
]


const PostsApiService = {
    getDummyData: () => {
        return myDummyData
    }
}

export default PostsApiService
