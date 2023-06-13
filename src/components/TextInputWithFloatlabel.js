import React from 'react'
import { Form, FloatingLabel } from "react-bootstrap";

function TextInputWithFloatLabel({
  label,
  name,
  value,
  type,
  placeholder,
  onChange,
}) {
  return (
    <FloatingLabel label={label} className="mb-3" size="sm">
      <Form.Control
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </FloatingLabel>
  );
}

export default TextInputWithFloatLabel