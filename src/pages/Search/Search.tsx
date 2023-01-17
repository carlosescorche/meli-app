import React, { FormEvent, useState, useEffect } from "react";
import axios from "axios";

import Breadcrumbs from "src/components/Breadcrumbs";
import Header from "src/components/Header";
import List from "src/components/List";
import Footer from "src/components/Footer/Footer";
import Form from "src/components/Form";
import Loading from "src/components/Loading";
import Alert from "src/components/Alert";

import { BACKEND_URL } from "src/consts";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "src/utils";

const Search: React.FC = () => {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState(params.get("search") ?? "");
  const [query, setQuery] = useState(search);
  const [data, setData] = useState<SearchResponse>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(true);
  const setTitle = useTitle();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const params = { q: query, limit: 4 };
        const resp = await axios.get<SearchResponse>(`${BACKEND_URL}/items`, {
          params,
        });

        if (resp.status === 200) {
          setLoading(false);
          setData(resp.data);
          setTitle(`${query} | Mercado Libre`);
          return;
        }

        throw new Error();
      } catch (e) {
        setLoading(false);
        setError("Ha ocurrido un error");
        setTitle("Mercado Libre");
      }
    })();
  }, [query, setTitle]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setQuery(search);
    setParams({ search });
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
              <Breadcrumbs items={data?.categories.slice(0, 4) || [search]} />
              <List items={data?.items || []} />
            </React.Fragment>
          ) : (
            <Loading />
          )
        ) : (
          <Alert type="info" message="Ha ocurrido un error" />
        )}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Search;
