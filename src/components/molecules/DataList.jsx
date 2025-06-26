import React, { useState } from "react";

export default function DataList({ data, onUpdate, onDelete }) {
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const startEdit = (item) => {
    setEditId(item.id);
    setEditValue(item.name);
  };

  const submitEdit = () => {
    onUpdate(editId, editValue);
    setEditId(null);
    setEditValue("");
  };

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {editId === item.id ? (
            <>
              <input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button onClick={submitEdit}>Simpan</button>
            </>
          ) : (
            <>
              {item.name} <button onClick={() => startEdit(item)}>Edit</button>{" "}
              <button onClick={() => onDelete(item.id)}>Hapus</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
