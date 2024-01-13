import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@app/components/ui/sheet";
import { GenreType } from "@app/types/movies/movie";
import { Button } from "@app/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@app/components/ui/accordion";
import { Checkbox } from "@app/components/ui/checkbox";
import { useState } from "react";
import { ScrollArea } from "@app/components/ui/scroll-area";

export type Filter = {
  genres: number[];
};

type MovieFilterProps = {
  genres: GenreType[];
  handleSubmitFilters: (filters: Filter) => void;
  handleResetFilters: () => void;
};

export const MovieFilter = ({
  genres,
  handleSubmitFilters,
  handleResetFilters,
}: MovieFilterProps) => {
  const [genreFilter, setGenreFilter] = useState<number[]>([]);
  const handleChangeGenre = (genreId: number, checked: boolean | string) => {
    if (checked) {
      setGenreFilter([...genreFilter, genreId]);
    } else {
      const updatedGenres = genreFilter.filter((genre) => genre !== genreId);
      setGenreFilter(updatedGenres);
    }
  };

  const handleSubmit = () => {
    handleSubmitFilters({ genres: genreFilter });
  };

  return (
    <Sheet>
      <div className="text-end mb-4">
        <SheetTrigger>Filters</SheetTrigger>
      </div>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>

        <SheetDescription>
          <ScrollArea className="h-[calc(100vh_-_170px)] rounded-md border p-4 mt-8">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="Genres">
                <AccordionTrigger className="text-base">
                  Genres
                </AccordionTrigger>
                <AccordionContent>
                  {genres.map((genre) => (
                    <div
                      key={genre.id}
                      className="flex items-center space-x-2 mb-2.5"
                    >
                      <Checkbox
                        onCheckedChange={(checked) => {
                          handleChangeGenre(genre.id, checked);
                        }}
                        checked={genreFilter.includes(genre.id)}
                        id={genre.id.toString()}
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {genre.name}
                      </label>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollArea>
        </SheetDescription>
        <SheetFooter className="absolute bottom-5 flex justify-end w-full right-5">
          <SheetClose>
            <Button
              variant="secondary"
              onClick={handleResetFilters}
              className="mr-5"
            >
              Reset
            </Button>
          </SheetClose>
          <SheetClose>
            <Button onClick={handleSubmit}>Apply</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
