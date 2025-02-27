import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';

// Import required AG Grid modules for v33+
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { useNavigate } from 'react-router-dom'; // For navigate a route

// Register the required module
ModuleRegistry.registerModules([ClientSideRowModelModule]);

function FetchData() {

    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    'https://678fcf3549875e5a1a93731f.mockapi.io/TodoAPI/todolistAPI'
                );
                setRowData(response.data); // Store fetched data in state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    // Define column structure for AG Grid
    const columnDefs = [
        { headerName: 'Mission', field: 'mission', sortable: true, filter: true },
        { headerName: 'Company', field: 'company', sortable: true, filter: true },
        { headerName: 'Location', field: 'location', sortable: true, filter: true },
        { headerName: 'Date', field: 'date', sortable: true, filter: true },
        { headerName: 'Price', field: 'price', sortable: true, filter: true },
    ];

    const navigate = useNavigate();

    // Add a button to navigate to "Add Data"
    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 1200 }}>
            <button onClick={() => navigate("/adddata", { state: { rowData } })}>Add Data</button>
            <AgGridReact columnDefs={columnDefs} rowData={rowData} rowModelType="clientSide" />
        </div>
    );
}

export default FetchData;
