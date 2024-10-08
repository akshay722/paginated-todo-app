import { useState, useMemo } from "react";

// Interface representing a single to-do item
interface todoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Type definition for the data (an array of to-do items)
type dataType = todoItem[];

// Custom hook for handling pagination
export default function usePagination(data: dataType) {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  // Memoized function to calculate the data for the current page
  const pageData = useMemo(() => {
    const start = pageSize * (page - 1);
    const end = page * pageSize;
    return data?.slice(start, end) ?? [];
  }, [data, page, pageSize]);

  return { page, setPage, pageSize, setPageSize, pageData };
}
