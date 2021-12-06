import React, { useReducer } from "react";
import List from "./packages/List";
import SearchForm from "./packages/SearchForm";
import "./App.css";

import Http from "./http";
import { StateTypes } from "./packages/types";
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

const Query = (search_term: string) => {
  return Http.get(`${API_ENDPOINT}${search_term}`);
};

const SearchReducer = (state: StateTypes, action: { type: string; data?: any }): StateTypes => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, data: action.data, error: false };
    case "FETCH_ERROR":
      return { ...state, error: true };
    default:
      return state;
  }
};

function App() {
  const [state, Dispatch] = useReducer<typeof SearchReducer>(SearchReducer, {
    data: [],
    error: false,
  });
  const [searchTerm, SetSearchTerm] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const handleSearchInput = (e: React.FormEvent<HTMLInputElement>) => {
    SetSearchTerm(e.currentTarget.value);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const res = await Query(searchTerm);
      Dispatch({
        type: "FETCH_SUCCESS",
        data: res.hits,
      });
    } catch (error) {
      Dispatch({ type: "FETCH_ERROR" });
    }
    setLoading(false);
  };
  return (
    <div className='App'>
      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSubmit}
        disabled={loading || !searchTerm}
      />
      <List data={state.data} />
    </div>
  );
}

export default App;
