import { useDispatch } from "react-redux";
import { deleteProperty } from "../features/propertyslice";

export default function PropertyCard({ item, onEdit }) {
  const dispatch = useDispatch();

  return (
    <div style={{border:"1px solid #ccc", padding:"15px", margin:"10px", borderRadius:"10px"}}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p><b>Price:</b> {item.price}</p>

      <button onClick={() => onEdit(item)}>Edit</button>
      <button onClick={() => dispatch(deleteProperty(item.id))}>
        Delete
      </button>
    </div>
  );
}
