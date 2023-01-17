import React, { FormEvent, useState, useEffect } from "react";
import axios from "axios";

import Header from "src/components/Header";
import Footer from "src/components/Footer/Footer";
import Breadcrumbs from "src/components/Breadcrumbs";
import Form from "src/components/Form";
import Loading from "../../components/Loading/Loading";

import { BACKEND_URL } from "src/consts";
import { default as ProductDetail } from "src/components/Product";
import { useParams, useNavigate } from "react-router-dom";
import { useTitle } from "src/utils";

const Product: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const [search, setSearch] = useState("");
  const [data, setData] = useState<DetailResponse>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(true);
  const setTitle = useTitle();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const resp = await axios.get<DetailResponse>(
          `${BACKEND_URL}/items/${id}`
        );

        if (resp.status === 200) {
          setLoading(false);
          setData(resp.data);
          setTitle(`${resp.data.item.title} | Mercado Libre`);
          return;
        }
        throw new Error();
      } catch (e) {
        setLoading(false);
        setTitle("Mercado Libre");
        setError("Producto no encontrado");
      }
    })();
  }, [id, setTitle]);

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
        {!error ? (
          !loading ? (
            <React.Fragment>
              <Breadcrumbs
                items={data?.item.breadcrumbs.slice(0, 4) || [search]}
              />
              <ProductDetail item={data?.item} />
            </React.Fragment>
          ) : (
            <Loading />
          )
        ) : (
          <ProductDetail item={undefined} />
        )}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Product;
