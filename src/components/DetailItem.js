const DetailItem = ({ item }) => {
    
    return (
            <div>
                {/* only items where scientificname exists will be shown: */}
                {item.scientificname &&
                        <h3>Species: {item.scientificname}</h3>
                }
                {item.rank && 
                        <p>Rank: {item.rank}</p>}
            </div>
    )
}

export default DetailItem