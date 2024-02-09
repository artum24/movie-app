import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@app/components/ui/pagination";

type MoviePaginationProps = {
  onChangePage: (page: number) => void;
  page: number;
  totalPages: number;
};

export const MoviePagination = ({
  page,
  onChangePage,
  totalPages,
}: MoviePaginationProps) => {
  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationPrevious
          href="#"
          onClick={() => {
            if (page !== 1) onChangePage(page - 1);
          }}
          className="hidden md:flex"
        />
        <PaginationLink
          onClick={() => onChangePage(1)}
          href="#"
          isActive={page === 1}
        >
          1
        </PaginationLink>
        {page > 2 ? (
          <>
            <PaginationEllipsis />
            <PaginationLink onClick={() => onChangePage(page - 1)} href="#">
              {page - 1}
            </PaginationLink>
            <PaginationLink
              onClick={() => onChangePage(page)}
              isActive
              href="#"
            >
              {page}
            </PaginationLink>
            <PaginationLink onClick={() => onChangePage(page + 1)} href="#">
              {page + 1}
            </PaginationLink>
          </>
        ) : (
          <>
            <PaginationLink
              onClick={() => onChangePage(2)}
              isActive={page === 2}
              href="#"
            >
              2
            </PaginationLink>
            <PaginationLink
              onClick={() => onChangePage(3)}
              isActive={page === 3}
              href="#"
            >
              3
            </PaginationLink>
          </>
        )}
        <PaginationEllipsis />
        <PaginationLink
          onClick={() => onChangePage(totalPages)}
          isActive={page === totalPages}
          href="#"
        >
          {totalPages}
        </PaginationLink>
        <PaginationNext
          href="#"
          onClick={() => {
            if (page !== totalPages) onChangePage(page + 1);
          }}
          className="hidden md:flex"
        />
      </PaginationContent>
    </Pagination>
  );
};
