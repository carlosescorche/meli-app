import React from "react";
import Input from "../Input";

type FormProps = {
  search: string;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (v: string) => void;
};

const Form: React.FC<FormProps> = ({ search, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <Input
        id="search"
        name="search"
        placeholder="Buscar productos, marcas y más…"
        maxLength={120}
        value={search}
        onChange={onChange}
      />
    </form>
  );
};

export default Form;
