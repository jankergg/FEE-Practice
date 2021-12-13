import React, { useCallback, useReducer } from "react";
import { List, SearchForm, SortingBar, SearchHistory } from "@/components/SortingLists";
import Http from "@/http";
import { DataItem, StateTypes } from "@/components/types";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

const Query = (search_term: string, page: number) => {
  return Http.get(`${API_ENDPOINT}${search_term}&page=${page}`);
};

const INIT_STATE = {
  data: [],
  error: false,
  sortType: "",
  loading: false,
  page: 0,
  totalPage: 1,
  finished: false,
};
const SearchReducer = (state: StateTypes, action: { type: string; data?: any }): StateTypes => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...INIT_STATE, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        error: false,
        loading: false,
        ...action.data,
      };
    case "FETCH_ERROR":
      return { ...state, error: true, loading: false };
    case "SORT_BY":
      return { ...state, error: false, ...action.data };
    default:
      return state;
  }
};

function App() {
  const [state, Dispatch] = useReducer<typeof SearchReducer>(SearchReducer, { ...INIT_STATE });
  const [searchTerm, SetSearchTerm] = React.useState<string>("");
  const [searchHistory, SetSearchHistory] = React.useState<string[]>([]);
  const handleSearchInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    SetSearchTerm(e.currentTarget.value);
  }, []);
  const updateSearchHistory = useCallback(
    (term: string) => {
      const newTerms = [term].concat(searchHistory.filter((s) => s !== term));
      if (newTerms.length > 5) newTerms.pop();
      SetSearchHistory(newTerms);
    },
    [searchHistory]
  );
  const onClickHistory = useCallback(
    (v: string) => {
      if (state.loading) {
        return;
      }
      SetSearchTerm(v);
      fetchData(v);
    },
    [state.loading]
  );
  const fetchData = async (key: string) => {
    Dispatch({ type: "FETCH_INIT" });
    try {
      const res = await Query(key, state.page);
      Dispatch({
        type: "FETCH_SUCCESS",
        data: { data: res.hits, totalPage: res.nbPages, page: state.page + 1 },
      });
      updateSearchHistory(key);
    } catch (error) {
      Dispatch({ type: "FETCH_ERROR" });
    }
  };
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (state.loading || !searchTerm) {
        return;
      }
      fetchData(searchTerm);
    },
    [state.loading, searchTerm]
  );
  const SortBy = (type: string, data: DataItem[], reverse: boolean) => {
    console.log("sort by..", type, data);
    data.sort((a: any, b: any) => {
      if (a[type] > b[type]) {
        return typeof a[type] === "number" ? -1 : 1;
      } else if (a[type] < b[type]) {
        return typeof a[type] === "number" ? 1 : -1;
      } else {
        return 0;
      }
    });

    Dispatch({
      type: "SORT_BY",
      data: { data: reverse ? data.reverse() : data, sortType: type },
    });
  };
  const handleSort = useCallback(
    (type, rev) => {
      console.log("sort...", type, "Rev:", rev, state.data);
      SortBy(type, state.data, rev);
    },
    [state.data]
  );
  return (
    <div className='container p-3'>
      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSubmit}
        disabled={state.loading || !searchTerm}
      />
      <SearchHistory SearchTerms={searchHistory} onClick={onClickHistory} />
      <SortingBar onSort={handleSort} sortType={state.sortType} />
      {state.data?.length > 0 ? <List data={state.data} /> : state.loading ? "loading..." : null}
    </div>
  );
}

export default React.memo(App);
