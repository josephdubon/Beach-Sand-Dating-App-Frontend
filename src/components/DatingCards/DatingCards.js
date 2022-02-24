import React, {useEffect, useState} from 'react'
import DatingCard from 'react-tinder-card'
import './DatingCards.css'
import axios from '../axios'

const DatingCards = () => {

    // Set state with dummy data
    const [people, setPeople] = useState([])

    // Use data from API
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/dating/cards')
            setPeople(req.data)
        }

        fetchData()
    }, [])

    // Set swiped state
    const swiped = (direction, nameToDelete) => {
        console.log('receiving ' + nameToDelete)
    }

    // Set outOfFrame state
    const outOfFrame = (name) => {
        console.log(name + ' is no longer in the screen.')
    }

    return (<div className='datingCards'>
        <div className='datingCards__container'>
            {/*  Loop through people data */}
            {people.map((person) => (<DatingCard
                className='swipe'
                key={person.name}
                preventSwipe={['up', 'down']}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}>
                <div style={{backgroundImage: `url(${person.imgUrl})`}} className='card'>
                    <h3>{person.name}</h3>
                </div>
            </DatingCard>))}
        </div>
    </div>)
}

export default DatingCards