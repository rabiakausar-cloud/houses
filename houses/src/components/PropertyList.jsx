import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties, deleteProperty } from "../redux/propertySlice";

export default function PropertyList() {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.list);

  useEffect(() => {
    dispatch(fetchProperties());
  }, []);

  return (
    <div>
      {properties.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.location}</p>
          <p>{p.price}</p>

          {p.image && <img src={`http://127.0.0.1:8000${p.image}`} width="150" />}

          <button onClick={() => dispatch(deleteProperty(p.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
