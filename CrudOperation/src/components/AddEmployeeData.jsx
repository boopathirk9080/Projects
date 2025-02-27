import { Paper, Typography } from '@mui/material';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddEmployeeData.css';

function AddEmployeeData() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        department: '',
        mail: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await fetch('http://localhost:4500/employee', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log("Data added successfully!");
                setFormData({
                    name: '',
                    age: '',
                    gender: '',
                    department: '',
                    mail: ''
                });
                navigate('/')
            } else {
                console.error("Failed to add data.");
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    }

    return (
        <div className="container">
            <button className="home-button" onClick={() => navigate('/')}>Home</button>
            <center>
                <Paper component='form' elevation={20} className="form-container" onSubmit={handleSubmit}>
                    <Typography variant='h5' className="form-title">New Data</Typography>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id='name' type="text" className="input-field" value={formData.name} required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input id='age' type="text" className="input-field" value={formData.age} required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <input id='gender' type="text" className="input-field" value={formData.gender} required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <input id='department' type="text" className="input-field" value={formData.department} required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mail">Mail</label>
                        <input id='mail' type="text" className="input-field" value={formData.mail} required onChange={handleChange} />
                    </div>
                    <button type="submit" className="submit-button">Add Data</button>
                </Paper>
            </center>
        </div>
    );
}

export default AddEmployeeData;
