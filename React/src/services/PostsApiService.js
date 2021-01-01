const myDummyData = [
    {
        id: 1,
        firstName: 'Orkun',
        lastName: 'Ozekin'
    },

    {
        id: 2,
        firstName: 'Corbin',
        lastName: 'Creedon'
    },

    {
        id: 3,
        firstName: 'Sonali',
        lastName: 'Najera'
    },

    {
        id: 4,
        firstName: 'Cody',
        lastName: 'Moody'
    },

    {
        id: 5,
        firstName: 'Tim',
        lastName: 'Hammes'
    }
]


const PostsApiService = {
    getDummyData: () => {
        return myDummyData
    }
}

export default PostsApiService
