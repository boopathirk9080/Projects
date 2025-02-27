import { Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddEmployeeData.css';

function AddEmployeeData() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        department: '',
        mail: ''
    });

    // Fetch existing data on mount
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:4500/employee/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setFormData(data); // Set the existing data in form
                } else {
                    console.error("Failed to fetch employee data.");
                }
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        }

        if (id) {
            fetchData();
        }
    }, [id]); // Runs when `id` changes

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await fetch(`http://localhost:4500/employee/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log("Data updated successfully!");
                navigate('/'); // Redirect to home page
            } else {
                console.error("Failed to update data.");
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
                    <Typography variant='h5' className="form-title">Update Employee Data</Typography>
                    
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id='name' type="text" className="input-field" name="name" value={formData.name} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input id='age' type="text" className="input-field" name="age" value={formData.age} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <input id='gender' type="text" className="input-field" name="gender" value={formData.gender} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <input id='department' type="text" className="input-field" name="department" value={formData.department} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mail">Mail</label>
                        <input id='mail' type="text" className="input-field" name="mail" value={formData.mail} onChange={handleChange} />
                    </div>

                    <button type="submit" className="submit-button">Save</button>
                </Paper>
            </center>
        </div>
    );
}

export default AddEmployeeData;
