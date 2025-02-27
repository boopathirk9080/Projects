import { useParams } from "react-router-dom";

function AddData() {
    const { id } = useParams();
    console.log(id);
  return (
    <div>
      <h3>Add Data</h3>
    </div>
  )
}

export default AddData
