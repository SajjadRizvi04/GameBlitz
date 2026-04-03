import React, { useState } from 'react';
import './CreateTeam.css';
import NormalButton from '../../shared/NormalButton';

const SPORTS = [
    { id: 1, name: 'Soccer' },
    { id: 2, name: 'Basketball' },
    { id: 3, name: 'Cricket' },
    { id: 4, name: 'Volleyball' },
    { id: 5, name: 'Badminton' },
];

const LOCATION = [
    { id: 1, name: 'Delhi' },
    { id: 2, name: 'Mumbai' },
    { id: 3, name: 'Bangalore' },
    { id: 4, name: 'Chennai' },
    { id: 5, name: 'Hyderabad' },
    { id: 6, name: 'Kolkata' },
    { id: 7, name: 'Pune' },
    { id: 8, name: 'Ahmedabad' },
    { id: 9, name: 'Surat' },
    { id: 10, name: 'Jaipur' },
]

function CreateTeam({ setToggleView }) {
    const [formData, setFormData] = useState({
        teamName: '',
        teamDescription: '',
        teamSport: SPORTS[0].name,
        teamLocation: LOCATION[0].name,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.teamName.trim()) {
            newErrors.teamName = 'Team name is required';
        } else if (formData.teamName.trim().length < 2) {
            newErrors.teamName = 'Team name must be at least 2 characters';
        } else if (formData.teamName.trim().length > 50) {
            newErrors.teamName = 'Team name must be less than 50 characters';
        }

        if (!formData.teamDescription.trim()) {
            newErrors.teamDescription = 'Description is required';
        } else if (formData.teamDescription.trim().length < 10) {
            newErrors.teamDescription = 'Description must be at least 10 characters';
        } else if (formData.teamDescription.trim().length > 500) {
            newErrors.teamDescription = 'Description must be less than 500 characters';
        }

        return newErrors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            console.log('Submitting form data:', formData);
            
            // TODO: Replace with actual API call
            // const response = await fetch('/api/teams/create', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });
            
            // if (response.ok) {
            //     // Handle success - redirect or show success message
            // }

            // For demo purposes
            alert('Team created successfully!');
            setFormData({
                teamName: '',
                teamDescription: '',
                teamSport: SPORTS[0].name,
                teamLocation: LOCATION[0].name,
            });
        } catch (error) {
            console.error('Error creating team:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container">
            <form className="create-team-form" onSubmit={handleSubmit}>
                
                <div className="form-container">
                    <div className="back-btn-container">
                        <button type='button' onClick={() => setToggleView(0)} className="back-btn">
                            ← Back
                        </button>
                    </div>
                    <h2 className="form-title">Create Your Team</h2>
                    
                    <div className="form-group">
                        <label htmlFor="teamName" className="form-label">Team Name *</label>
                        <input
                            type="text"
                            id="teamName"
                            name="teamName"
                            placeholder="Enter your team name"
                            value={formData.teamName}
                            onChange={handleInputChange}
                            className="form-control"
                            maxLength="50"
                        />
                        {errors.teamName && <span className="error-message">{errors.teamName}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="teamDescription" className="form-label">About Your Team *</label>
                        <textarea
                            id="teamDescription"
                            name="teamDescription"
                            placeholder="Tell us about your team, goals, and playing style..."
                            value={formData.teamDescription}
                            onChange={handleInputChange}
                            className="form-control"
                            maxLength="500"
                        ></textarea>
                        <small style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>
                            {formData.teamDescription.length}/500 characters
                        </small>
                        {errors.teamDescription && <span className="error-message">{errors.teamDescription}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="teamSport" className="form-label">Select Sport *</label>
                        <select
                            id="teamSport"
                            name="teamSport"
                            value={formData.teamSport}
                            onChange={handleInputChange}
                            className="form-select"
                        >
                            <option value="">--- Select a Sport ---</option>
                            {SPORTS.map((sport) => (
                                <option key={sport.id} value={sport.name}>
                                    {sport.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="teamLocation" className="form-label">Location *</label>
                        <select
                            id="teamLocation"
                            name="teamLocation"
                            value={formData.teamLocation}
                            onChange={handleInputChange}
                            className="form-select"
                        >
                            <option value="">--- Select a Location ---</option>
                            {LOCATION.map((location) => (
                                <option key={location.id} value={location.name}>
                                    {location.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="form-submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Creating Team...' : 'Create Team'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateTeam;