"use client";

// Import necessary hooks and components
import { useCallback } from "react";

import Pagination from "./components/Pagination";
import Table from "./components/Table";
import TodoForm from "./components/TodoForm";

import useFetchAPI from "./hooks/useFetchAPI";
import usePagination from "./hooks/usePagination";

import { addTodo, toggleComplete, deleteTodo } from "./services/api";

import styles from "./page.module.css";

export default function Home() {
  // Fetch data from an API (in this case, sample data from JSONPlaceholder)
  const { data, isLoading, setData } = useFetchAPI("todos/");

  // Handle pagination logic using a custom hook
  const { page, setPage, pageSize, pageData } = usePagination(data);

  // Memoized callback to change the page when user navigates
  const handleSetPage = useCallback(
    (previousNumber: number) => {
      setPage(previousNumber);
    },
    [setPage]
  );

  const handleAddTodo = async (title: string) => {
    const newTodo = await addTodo(title);
    if (newTodo) {
      setData([...data, newTodo]);
    }
  };

  const handleToggleComplete = async (id: number, completed: boolean) => {
    const updatedTodo = await toggleComplete(id, completed);
    if (updatedTodo) {
      setData(
        data.map((todo: any) =>
          todo.id === id ? { ...todo, completed } : todo
        )
      );
    }
  };

  const handleDeleteTodo = async (id: number) => {
    const success = await deleteTodo(id);
    if (success) {
      setData(data.filter((todo: any) => todo.id !== id));
    }
  };

  // Display a loading state while data is being fetched
  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className={styles.page}>
      <TodoForm onAddTodo={handleAddTodo} />

      {/* Table component to display paginated data */}
      <Table
        pageData={pageData}
        onToggleComplete={handleToggleComplete}
        onDeleteTodo={handleDeleteTodo}
      />

      {/* Pagination component to navigate through pages */}
      <Pagination
        data={data}
        setPage={handleSetPage}
        page={page}
        pageSize={pageSize}
      />
    </div>
  );
}
