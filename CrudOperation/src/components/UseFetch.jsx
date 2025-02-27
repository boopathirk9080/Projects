import { useEffect, useState } from "react";
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import './UseFetch.css';  // Import the CSS file
import { Button } from "@mui/material";

function UseFetch() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchfunction() {
            try {
                const response = await fetch('http://localhost:4500/employee');
                if (response.ok) {
                    const getingjsonData = await response.json();
                    setData(getingjsonData);
                } else {
                    console.log('Failed to fetch data');
                }
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchfunction();
    }, []);

    const navigate = useNavigate();

    const deleteFunction = async (id) => {
        try {
            const response = await fetch(`http://localhost:4500/employee/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                console.log("Employee deleted successfully!");
                setData((prevEmployees) =>
                    prevEmployees.filter((employee) => employee.id !== id)
                );
            } else {
                console.error("Failed to delete employee.");
            }
        } catch (error) {
            console.error("Error deleting employee:", error.message);
        }
    };

    return (
        <div>
            <Button style={{marginLeft:"20px"}} variant="contained" onClick={() => navigate('/newdata')} >Add Data</Button>
           
            <div className="card-container">
                {data.map((data) => (
                    <Card key={data.id} sx={{ minWidth: 275 }} className="card">
                        <CardContent>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                Name: {data.name}
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                Age: {data.age}
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                Gender: {data.gender}
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                Department: {data.department}
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                Mail: {data.mail}
                            </Typography>
                        </CardContent>
                        <Button  style={{backgroundColor:"#988f8f",color:"white"}} color="secondary" onClick={() => navigate(`/updatedata/${data.id}`)} >Edit</Button>
                       {} <Button  style={{backgroundColor:"#c31e1e",color:"white"}} color="secondary" onClick={() => deleteFunction(data.id)} >Delete</Button>
                      
                    </Card>
                ))}
            </div>
            <br /><br />
        </div>
    );
}

export default UseFetch;
