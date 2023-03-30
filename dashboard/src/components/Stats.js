import { useEffect, useState } from 'react'

const Stats = () => {
    const [event, setEvent] = useState([])

    useEffect(() => {
        fetch('http://35.192.222.219/processing/stats')
        .then(res => res.json())
        .then(res => { 
            setEvent(res) 
        })
    }, [])

    return (
        <div className="stats">
            <h2>Latest Statistics</h2>
            <div>
                <p>Max Buy Price: ${event.max_buy_price}</p>
                {/* output stats here */}
            </div>
        </div>
    )   
}

export default Stats
