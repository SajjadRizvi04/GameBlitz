import React, { useState } from 'react'
import './JoinTeam.css'

const TEAMS_DATA = [
    {
        id: 1,
        name: 'Team Titans',
        location: 'Delhi',
        sport: 'Cricket',
        members: 12
    },
    {
        id: 2,
        name: 'Team Blasters',
        location: 'Mumbai',
        sport: 'Soccer',
        members: 15
    },
    {
        id: 3,
        name: 'Team Warriors',
        location: 'Bangalore',
        sport: 'Basketball',
        members: 10
    },
    {
        id: 4,
        name: 'Team Mavericks',
        location: 'Chennai',
        sport: 'Volleyball',
        members: 14
    },
    {
        id: 5,
        name: 'Team Strikers',
        location: 'Kolkata',
        sport: 'Badminton',
        members: 8
    },
]

function JoinTeam({ setToggleView }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredTeams, setFilteredTeams] = useState(TEAMS_DATA)
    const [requestedTeams, setRequestedTeams] = useState(new Set())
    const [isSearching, setIsSearching] = useState(false)

    const handleSearch = (e) => {
        e.preventDefault()
        setIsSearching(true)
        
        // Simulate search delay
        setTimeout(() => {
            const filtered = TEAMS_DATA.filter(team =>
                team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                team.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                team.sport.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredTeams(filtered)
            setIsSearching(false)
        }, 300)
    }

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleRequestJoin = (teamId) => {
        const newRequested = new Set(requestedTeams)
        if (newRequested.has(teamId)) {
            newRequested.delete(teamId)
        } else {
            newRequested.add(teamId)
        }
        setRequestedTeams(newRequested)
    }

    return (
        <div className="join-team-container">
            <div className="back-btn-container">
                <button 
                    type='button' 
                    onClick={() => setToggleView?.(0)} 
                    className="back-btn"
                    aria-label="Go back"
                >
                    ← Back
                </button>
            </div>

            <h1 className="join-title">Find & Join Your Perfect Team</h1>

            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search team name, location, or sport..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button type="submit" className="search-btn">
                    {isSearching ? 'Searching...' : 'Search'}
                </button>
            </form>

            <div className={`table-container ${isSearching ? 'loading' : ''}`}>
                {filteredTeams.length > 0 ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>Location</th>
                                <th>Sport</th>
                                <th>Members</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTeams.map((team) => (
                                <tr key={team.id}>
                                    <td data-label="Team Name">{team.name}</td>
                                    <td data-label="Location">{team.location}</td>
                                    <td data-label="Sport">{team.sport}</td>
                                    <td data-label="Members">{team.members}</td>
                                    <td data-label="Action">
                                        <button
                                            className="request-join-btn"
                                            onClick={() => handleRequestJoin(team.id)}
                                            disabled={isSearching}
                                        >
                                            {requestedTeams.has(team.id) ? '✓ Requested' : 'Request Join'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="empty-state">
                        <div className="empty-state-icon">🔍</div>
                        <p>No teams found matching your search.</p>
                        <p>Try different keywords!</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default JoinTeam