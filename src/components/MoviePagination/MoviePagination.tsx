import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
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
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => {
              if (page !== 1) onChangePage(page - 1);
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => onChangePage(1)}
            href="#"
            isActive={page === 1}
          >
            1
          </PaginationLink>
        </PaginationItem>
        {page > 2 ? (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => onChangePage(page - 1)} href="#">
                {page - 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                onClick={() => onChangePage(page)}
                isActive
                href="#"
              >
                {page}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => onChangePage(page + 1)} href="#">
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          </>
        ) : (
          <>
            <PaginationItem>
              <PaginationLink
                onClick={() => onChangePage(2)}
                isActive={page === 2}
                href="#"
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                onClick={() => onChangePage(3)}
                isActive={page === 3}
                href="#"
              >
                3
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => onChangePage(totalPages)}
            isActive={page === totalPages}
            href="#"
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => {
              if (page !== totalPages) onChangePage(page + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
