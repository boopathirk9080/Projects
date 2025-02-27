// import { useState, useEffect } from "react";
// import axios from "axios";

// const TimerApp = () => {
//   const [time, setTime] = useState(0);
//   const [running, setRunning] = useState(false);
//   const [values, setValues] = useState([]);
//   const [divisor, setDivisor] = useState(5); // Default divisor
//   const [average, setAverage] = useState(null);
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     let timer;
//     if (running) {
//       timer = setInterval(() => setTime((prev) => prev + 1), 1000);
//     } else {
//       clearInterval(timer);
//     }
//     return () => clearInterval(timer);
//   }, [running]);

//   const startTimer = () => setRunning(true);
//   const stopTimer = () => setRunning(false);
//   const resetTimer = () => {
//     setRunning(false);
//     setTime(0);
//     setValues([]);
//     setAverage(null);
//   };

//   const getTime = () => {
//     if (values.length < 5) {
//       const newValues = [...values, time];
//       setValues(newValues);

//       if (newValues.length === 5) {
//         const sum = newValues.reduce((acc, val) => acc + val, 0);
//         const avg = sum / divisor; 
//         setAverage(avg);
//         saveToAPI(newValues, avg);
//       }
//     }
//     setTime(0); // Restart timer
//   };

//   const saveToAPI = async (values, avg) => {
//     const newData = { values, average: avg };
//     await axios.post("http://localhost:5000/timingData", newData);
//     setHistory([...history, newData]);
//   };

//   useEffect(() => {
//     axios.get("http://localhost:5000/timingData").then((res) => {
//       setHistory(res.data);
//     });
//   }, []);

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Timer App</h1>

//       <div className="text-3xl font-semibold mb-4">{time} sec</div>

//       <div className="flex space-x-2">
//         <button onClick={startTimer} className="px-4 py-2 bg-green-500 text-white rounded">
//           Start
//         </button>
//         <button onClick={stopTimer} className="px-4 py-2 bg-red-500 text-white rounded">
//           Stop
//         </button>
//         <button onClick={resetTimer} className="px-4 py-2 bg-yellow-500 text-white rounded">
//           Reset
//         </button>
//         <button onClick={getTime} className="px-4 py-2 bg-blue-500 text-white rounded">
//           Get Time
//         </button>
//       </div>

//       <div className="mt-4">
//         <label className="mr-2">Divisor:</label>
//         <select value={divisor} onChange={(e) => setDivisor(Number(e.target.value))}
//           className="p-2 border rounded">
//           <option value="5">5</option>
//           <option value="10">10</option>
//           <option value="15">15</option>
//           <option value="20">20</option>
//         </select>
//       </div>

//       <div className="mt-6">
//         <h2 className="text-lg font-bold mb-2">Collected Values:</h2>
//         <div className="flex space-x-2">
//           {values.map((val, index) => (
//             <span key={index} className="px-3 py-1 bg-gray-300 rounded">{val}</span>
//           ))}
//         </div>
//       </div>

//       {average !== null && (
//         <div className="mt-4 text-lg font-semibold">
//           <span>Average: </span>
//           <span className="text-blue-600">{average.toFixed(2)}</span>
//         </div>
//       )}

//       <div className="mt-6 w-full max-w-md">
//         <h2 className="text-lg font-bold mb-2">History Table</h2>
//         <table className="w-full border-collapse border border-gray-400">
//           <thead>
//             <tr className="bg-gray-300">
//               <th className="border p-2">Values</th>
//               <th className="border p-2">Average</th>
//             </tr>
//           </thead>
//           <tbody>
//             {history.map((entry, index) => (
//               <tr key={index} className="text-center">
//                 <td className="border p-2">{entry.values.join(", ")}</td>
//                 <td className="border p-2">{entry.average.toFixed(2)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TimerApp;






// import { useState, useEffect } from "react";
// import axios from "axios";

// const TimerApp = () => {
//   const [time, setTime] = useState(0);
//   const [running, setRunning] = useState(false);
//   const [values, setValues] = useState([]);
//   const [divisor, setDivisor] = useState(5);
//   const [average, setAverage] = useState(null);
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     let timer;
//     if (running) {
//       timer = setInterval(() => setTime((prev) => prev + 1), 1000);
//     } else {
//       clearInterval(timer);
//     }
//     return () => clearInterval(timer);
//   }, [running]);

//   const startTimer = () => setRunning(true);
//   const stopTimer = () => setRunning(false);
//   const resetTimer = () => {
//     setRunning(false);
//     setTime(0);
//     setValues([]);
//     setAverage(null);
//   };

//   const getTime = () => {
//     if (values.length < divisor) {
//       const newValues = [...values, time];
//       setValues(newValues);

//       if (newValues.length === divisor) {
//         calculateAndSave(newValues);
//       }
//     }
//     setTime(0);
//   };

//   const calculateAndSave = async (newValues) => {
//     const sum = newValues.reduce((acc, val) => acc + val, 0);
//     const avg = sum / divisor;
//     const allowance = avg * 0.15;
//     const adjustedValue = avg + allowance;
//     const finalValue = adjustedValue * 0.75;

//     setAverage(finalValue);
//     saveToAPI(newValues, finalValue);
//   };

//   const saveToAPI = async (values, avg) => {
//     const newData = { values, average: avg };
//     await axios.post("http://localhost:5000/timingData", newData);
//     setHistory([...history, newData]);
//   };

//   useEffect(() => {
//     axios.get("http://localhost:5000/timingData").then((res) => {
//       setHistory(res.data);
//     });
//   }, []);

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Timer App</h1>
//       <div className="text-3xl font-semibold mb-4">{time} sec</div>
//       <div className="flex space-x-2">
//         <button onClick={startTimer} className="px-4 py-2 bg-green-500 text-white rounded">Start</button>
//         <button onClick={stopTimer} className="px-4 py-2 bg-red-500 text-white rounded">Stop</button>
//         <button onClick={resetTimer} className="px-4 py-2 bg-yellow-500 text-white rounded">Reset</button>
//         <button onClick={getTime} className="px-4 py-2 bg-blue-500 text-white rounded">Get Time</button>
//       </div>
//       <div className="mt-4">
//         <label className="mr-2">Divisor:</label>
//         <select value={divisor} onChange={(e) => setDivisor(Number(e.target.value))} className="p-2 border rounded">
//           {[5, 10, 15, 20].map((num) => (
//             <option key={num} value={num}>{num}</option>
//           ))}
//         </select>
//       </div>
//       <div className="mt-6">
//         <h2 className="text-lg font-bold mb-2">Collected Values:</h2>
//         <div className="flex space-x-2">
//           {values.map((val, index) => (
//             <span key={index} className="px-3 py-1 bg-gray-300 rounded">{val}</span>
//           ))}
//         </div>
//       </div>
//       {average !== null && (
//         <div className="mt-4 text-lg font-semibold">
//           <span>Final Value: </span>
//           <span className="text-blue-600">{average.toFixed(2)} sec</span>
//           <span> ({(average / 60).toFixed(3)} min)</span>
//         </div>
//       )}
//       <div className="mt-6 w-full max-w-md">
//         <h2 className="text-lg font-bold mb-2">History Table</h2>
//         <table className="w-full border-collapse border border-gray-400">
//           <thead>
//             <tr className="bg-gray-300">
//               <th className="border p-2">Values</th>
//               <th className="border p-2">Final Value (sec)</th>
//               <th className="border p-2">Final Value (min)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {history.map((entry, index) => (
//               <tr key={index} className="text-center">
//                 <td className="border p-2">{entry.values.join(", ")}</td>
//                 <td className="border p-2">{entry.average.toFixed(2)}</td>
//                 <td className="border p-2">{(entry.average / 60).toFixed(3)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TimerApp;







// import { useState, useEffect } from "react";
// import axios from "axios";

// const TimerApp = () => {
//   const [time, setTime] = useState(0);
//   const [running, setRunning] = useState(false);
//   const [values, setValues] = useState([]);
//   const [divisor, setDivisor] = useState(5);
//   const [average, setAverage] = useState(null);
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     let timer;
//     if (running) {
//       timer = setInterval(() => setTime((prev) => prev + 1), 1000);
//     } else {
//       clearInterval(timer);
//     }
//     return () => clearInterval(timer);
//   }, [running]);

//   const startTimer = () => setRunning(true);
//   const stopTimer = () => setRunning(false);
//   const resetTimer = () => {
//     setRunning(false);
//     setTime(0);
//     setValues([]);
//     setAverage(null);
//   };

//   const getTime = () => {
//     if (values.length < divisor) {
//       const newValues = [...values, time];
//       setValues(newValues);

//       if (newValues.length === divisor) {
//         calculateAndSave(newValues);
//       }
//     }
//     setTime(0);
//   };

//   const calculateAndSave = async (newValues) => {
//     const sum = newValues.reduce((acc, val) => acc + val, 0);
//     const avg = sum / divisor;
//     const allowance = avg * 0.15;
//     const adjustedValue = avg + allowance;
//     const finalValue = adjustedValue * 0.75;

//     setAverage(finalValue);
//     saveToAPI(newValues, finalValue);
//   };

//   const saveToAPI = async (values, avg) => {
//     const newData = { values, average: avg };
//     await axios.post("http://localhost:5000/timingData", newData);
//     setHistory([...history, newData]);
//   };

//   const deleteEntry = async (index) => {
//     const updatedHistory = history.filter((_, i) => i !== index);
//     setHistory(updatedHistory);
//     await axios.delete(`http://localhost:5000/timingData/${index}`);
//   };

//   const deleteAll = async () => {
//     setHistory([]);
//     await axios.delete("http://localhost:5000/timingData");
//   };

//   useEffect(() => {
//     axios.get("http://localhost:5000/timingData").then((res) => {
//       setHistory(res.data);
//     });
//   }, []);

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Timer App</h1>
//       <div className="text-3xl font-semibold mb-4">{time} sec</div>
//       <div className="flex space-x-2">
//         <button onClick={startTimer} className="px-4 py-2 bg-green-500 text-white rounded">Start</button>
//         <button onClick={stopTimer} className="px-4 py-2 bg-red-500 text-white rounded">Stop</button>
//         <button onClick={resetTimer} className="px-4 py-2 bg-yellow-500 text-white rounded">Reset</button>
//         <button onClick={getTime} className="px-4 py-2 bg-blue-500 text-white rounded">Get Time</button>
//       </div>
//       <div className="mt-4">
//         <label className="mr-2">Divisor:</label>
//         <select value={divisor} onChange={(e) => setDivisor(Number(e.target.value))} className="p-2 border rounded">
//           {[5, 10, 15, 20].map((num) => (
//             <option key={num} value={num}>{num}</option>
//           ))}
//         </select>
//       </div>
//       <div className="mt-6">
//         <h2 className="text-lg font-bold mb-2">Collected Values:</h2>
//         <div className="flex space-x-2">
//           {values.map((val, index) => (
//             <span key={index} className="px-3 py-1 bg-gray-300 rounded">{val}</span>
//           ))}
//         </div>
//       </div>
//       {average !== null && (
//         <div className="mt-4 text-lg font-semibold">
//           <span>Final Value: </span>
//           <span className="text-blue-600">{average.toFixed(2)} sec</span>
//           <span> ({(average / 60).toFixed(3)} min)</span>
//         </div>
//       )}
//       <div className="mt-6 w-full max-w-md">
//         <h2 className="text-lg font-bold mb-2">History Table</h2>
//         <button onClick={deleteAll} className="mb-2 px-4 py-2 bg-red-600 text-white rounded">Delete All</button>
//         <table className="w-full border-collapse border border-gray-400">
//           <thead>
//             <tr className="bg-gray-300">
//               <th className="border p-2">Values</th>
//               <th className="border p-2">Final Value (sec)</th>
//               <th className="border p-2">Final Value (min)</th>
//               <th className="border p-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {history.map((entry, index) => (
//               <tr key={index} className="text-center">
//                 <td className="border p-2">{entry.values.join(", ")}</td>
//                 <td className="border p-2">{entry.average.toFixed(2)}</td>
//                 <td className="border p-2">{(entry.average / 60).toFixed(3)}</td>
//                 <td className="border p-2">
//                   <button onClick={() => deleteEntry(index)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TimerApp;











import { useState, useEffect } from "react";
import axios from "axios";

const TimerApp = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [values, setValues] = useState([]);
    const [divisor, setDivisor] = useState(5);
    const [allowance, setAllowance] = useState(15);
    const [rating, setRating] = useState(75);
    const [average, setAverage] = useState(null);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        let timer;
        if (running) {
            timer = setInterval(() => setTime((prev) => prev + 1), 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [running]);

    const startTimer = () => setRunning(true);
    const stopTimer = () => setRunning(false);
    const resetTimer = () => {
        setRunning(false);
        setTime(0);
        setValues([]);
        setAverage(null);
    };

    const getTime = () => {
        if (values.length < divisor) {
            const newValues = [...values, time];
            setValues(newValues);

            if (newValues.length === divisor) {
                calculateAndSave(newValues);
            }
        }
        setTime(0);
    };

    const calculateAndSave = async (newValues) => {
        const sum = newValues.reduce((acc, val) => acc + val, 0);
        const avg = sum / divisor;
        const allowanceValue = avg * (allowance / 100);
        const adjustedValue = avg + allowanceValue;
        const finalValue = adjustedValue * (rating / 100);

        setAverage(finalValue);
        saveToAPI(newValues, finalValue);
    };

    const saveToAPI = async (values, avg) => {
        const newData = { values, average: avg };
        const response = await axios.post("https://678fcf3549875e5a1a93731f.mockapi.io/timingData/todolistAPI", newData);
        setHistory([...history, { ...newData, id: response.data.id }]);
    };

    const deleteEntry = async (id) => {
        await axios.delete(`https://678fcf3549875e5a1a93731f.mockapi.io/timingData/todolistAPI/${id}`);
        setHistory(history.filter(entry => entry.id !== id));
    };

    const deleteAll = async () => {
        try {
            const res = await axios.get("https://678fcf3549875e5a1a93731f.mockapi.io/timingData/todolistAPI");
            const deleteRequests = res.data.map(entry => axios.delete(`https://678fcf3549875e5a1a93731f.mockapi.io/timingData/todolistAPI/${entry.id}`));

            await Promise.all(deleteRequests);
            setHistory([]);
        } catch (error) {
            console.error("Error deleting all entries:", error);
        }
    };


    useEffect(() => {
        axios.get("https://678fcf3549875e5a1a93731f.mockapi.io/timingData/todolistAPI").then((res) => {
            setHistory(res.data);
        });
    }, []);

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Timer App</h1>
            <div className="text-3xl font-semibold mb-4">{time} sec</div>
            <div className="flex space-x-2">
                <button onClick={startTimer} className="px-4 py-2 bg-green-500 text-white rounded">Start</button>
                <button onClick={stopTimer} className="px-4 py-2 bg-red-500 text-white rounded">Stop</button>
                <button onClick={resetTimer} className="px-4 py-2 bg-yellow-500 text-white rounded">Reset</button>
                <button onClick={getTime} className="px-4 py-2 bg-blue-500 text-white rounded">Get Time</button>
            </div>
            <div className="mt-4 flex space-x-4">
                <div>
                    <label className="mr-2">Divisor:</label>
                    <select value={divisor} onChange={(e) => setDivisor(Number(e.target.value))} className="p-2 border rounded">
                        {[5, 10, 15, 20, 25, 30, 35, 40].map((num) => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="mr-2">Allowance (%):</label>
                    <input type="number" value={allowance} onChange={(e) => setAllowance(Number(e.target.value))} className="p-2 border rounded w-16" />
                </div>
                <div>
                    <label className="mr-2">Rating (%):</label>
                    <input type="number" value={rating} onChange={(e) => setRating(Number(e.target.value))} className="p-2 border rounded w-16" />
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-lg font-bold mb-2">Collected Values:</h2>
                <div className="flex space-x-2">
                    {values.map((val, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-300 rounded">{val}</span>
                    ))}
                </div>
            </div>
            {average !== null && (
                <div className="mt-4 text-lg font-semibold">
                    <span>Final Value: </span>
                    <span className="text-blue-600">{average.toFixed(2)} sec</span>
                    <span> ({(average / 60).toFixed(3)} min)</span>
                </div>
            )}
            <div className="mt-6 w-full max-w-md">
                <h2 className="text-lg font-bold mb-2">History Table</h2>
                <button onClick={deleteAll} className="mb-2 px-4 py-2 bg-red-600 text-white rounded">Delete All</button>
                <table className="w-full border-collapse border border-gray-400">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="border p-2">Values</th>
                            <th className="border p-2">Average</th>
                            <th className="border p-2">Final Value (sec)</th>
                            <th className="border p-2">Final Value (min)</th>
                            <th className="border p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((entry) => (
                            <tr key={entry.id} className="text-center">
                                <td className="border p-2">{entry.values.join(", ")}</td>
                                <td className="border p-2">{entry.average}</td>
                                <td className="border p-2">{entry.average.toFixed(2)}</td>
                                <td className="border p-2">{(entry.average / 60).toFixed(3)}</td>
                                <td className="border p-2">
                                    <button onClick={() => deleteEntry(entry.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default TimerApp;
