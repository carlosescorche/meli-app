import React, { FormEvent, useState } from "react";

import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";
import Form from "src/components/Form";

import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate(`/items?search=${encodeURIComponent(search)}`);
  }

  return (
    <React.Fragment>
      <Header>
        <Form
          search={search}
          onSubmit={handleSubmit}
          onChange={(s: string) => {
            setSearch(s);
          }}
        />
      </Header>
      <main>
        <div style={{ margin: "50px 0", textAlign: "center" }}>
          <h1>404</h1>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default NotFound;
