import React, { useState, useEffect } from "react";
import Button from "./Button";

function ApiData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  const PAGE_SIZE = 10;

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((json) => {
        // Filter by search
        const filtered = json.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );
        setTotalPages(Math.ceil(filtered.length / PAGE_SIZE));
        // Paginate
        const start = (page - 1) * PAGE_SIZE;
        setData(filtered.slice(start, start + PAGE_SIZE));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page, search]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 mt-4">API Data</h2>
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // Reset to first page on search
        }}
        className="mb-4 p-2 bg-gray-200 rounded w-full"
      />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="grid gap-4">
        {data.map((item) => (
          <li key={item.id} className="p-4 rounded shadow-md bg-gray-100 hover:bg-gray-200 transition">
            <h3 className="font-semibold">{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
      {/* Pagination */}
      <div className="flex gap-2 mt-4 justify-center">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Prev
        </Button>
        <span className="px-2 py-1">{page} / {totalPages}</span>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default ApiData;