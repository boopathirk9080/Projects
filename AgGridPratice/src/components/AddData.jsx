import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function AddData() {
    const location = useLocation();
    const navigate = useNavigate();
    const { setRowData } = location.state || {}; // ✅ Get `setRowData` from state if available

    const [formData, setFormData] = useState({
        mission: "",
        company: "",
        location: "",
        date: "",
        price: "",
    });

    // ✅ Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const [errorpass, setErrorPass] = useState(false)

    // ✅ Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

        try {
            const response = await axios.post(
                "https://678fcf3549875e5a1a93731f.mockapi.io/TodoAPI/todolistAPI",
                formData
            );

            console.log("Data added successfully!", response.data);

            // ✅ Update `rowData` in FetchData component
            if (setRowData) {
                setRowData((prevData) => [...prevData, response.data]);
            }

            // ✅ Redirect back to home page after submission
            navigate("/");
        } catch (error) {
            console.error("Error adding data:", error);
            setErrorPass(true)
        }
    };

    return (
        <div>
            <h3>Add Data</h3>
            <form onSubmit={handleSubmit}>
                <label>Mission:</label>
                <input type="text" name="mission" value={formData.mission} onChange={handleChange} required />

                <label>Company:</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} required />

                <label>Location:</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} required />

                <label>Date:</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />

                <label>Price:</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} required />

                <button type="submit">Submit</button> {/* ✅ Submit button */}
            </form>
            {errorpass ?alert("saved   adata"):<p>Network connect error</p> }
        </div>
    );
}

export default AddData;