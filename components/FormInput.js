import React from "react";

function FormInput({ label, type, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="text-sunrise-red block mb-2">{label}</label>
      <input
        type={type}
        className="border rounded-md py-2 px-4"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
