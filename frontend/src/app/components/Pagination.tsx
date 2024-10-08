// Interface representing a single to-do item
interface todoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type dataType = todoItem[];

// Props interface for the Pagination component
interface PaginationProps {
  data: dataType;
  setPage: (page: number) => void;
  page: number;
  pageSize: number;
}

// Pagination component for navigating between pages
const Pagination: React.FC<PaginationProps> = ({
  data,
  setPage,
  page,
  pageSize,
}) => {
  // Function to navigate to the next page
  const handleNext = () => {
    setPage(page + 1);
  };

  // Function to navigate to the previous page
  const handlePrevious = () => {
    setPage(page - 1);
  };

  return (
    <div>
      {/* Disable "Previous" button if on the first page */}
      <button disabled={page === 1} onClick={handlePrevious}>
        {"<"}
      </button>
      {page}
      {/* Disable "Next" button if on the last page */}
      <button disabled={page * pageSize >= data?.length} onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
};

Pagination.displayName = "Pagination";

export default Pagination;
