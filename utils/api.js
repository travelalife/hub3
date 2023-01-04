function getAllCollection() {
    import build from '/images/buildspace.webp'
    import uni from '/images/uniswap.png'
    import maker from '/images/makerdao.png'
    return [
        {id: 1, name: 'Buildspace', logo: build, attr: {
                website: 'https://buildspace.so/',
                twitter: 'https://twitter.com/_buildspace',
                discord: 'https://discord.com/invite/buildspace'
        }},
        {id: 2, name: 'Uniswap', logo: uni, attr: {
                website: 'https://uniswap.org/',
                twitter: 'https://twitter.com/Uniswap',
                discord: 'https://discord.com/invite/FCfyBSbCU5'
            }},
        {id: 3, name: 'MakerDAO', logo: maker, attr: {
                website: 'https://makerdao.com/',
                twitter: 'https://twitter.com/MakerDAO',
                discord: 'https://discord.com/invite/buildspace'
            }}
    ]
}

function getCollectionByAddy() {

}

function addCollection(collection) {
    const collections = JSON.parse(localStorage.collections || '[]')
    collections.push(collection)
    localStorage.collections = JSON.stringify(collections)
}

function removeCollection(collection) {
    const collections = JSON.parse(localStorage.collections || '[]')
    localStorage.collections = JSON.stringify(collections.filter(item => item.id !== collection.id))
}

function isCollection(collection) {
    const collections = JSON.parse(localStorage.collections || '[]')
    return collections.some(item => item.id === collection.id)
}
