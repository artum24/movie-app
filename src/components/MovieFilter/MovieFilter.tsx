import { GenreType } from "@app/types/movies/movie";
import { Button } from "@app/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@app/components/ui/select";
import { CURRENT_YEAR, MIN_YEAR } from "@app/constants/time";

export type MovieFilter = {
  genre: string;
  year: string;
  rating: string;
};

type MovieFilterProps = {
  genres: GenreType[];
  filter: MovieFilter;
  setFilter: Dispatch<SetStateAction<MovieFilter>>;
};

export const MovieFilter = ({
  genres,
  filter,
  setFilter,
}: MovieFilterProps) => {
  const onChangeGenres = (e: string) => {
    setFilter({ ...filter, genre: e });
  };

  const onChangeYear = (e: string) => {
    setFilter({ ...filter, year: e });
  };

  const onChangeRating = (e: string) => {
    setFilter({ ...filter, rating: e });
  };

  const handleResetFilter = () =>
    setFilter({ genre: "", year: "", rating: "" });

  const yearsArray = Array.from(Array(CURRENT_YEAR - MIN_YEAR).keys()).map(
    (value) => CURRENT_YEAR - value,
  );
  return (
    <div className="flex items-end mb-8 gap-x-10 gap-y-3 flex-wrap">
      <div className="w-full sm:w-auto">
        <p className="font-bold mb-4">Жанри</p>
        <Select onValueChange={onChangeGenres} value={filter.genre}>
          <SelectTrigger className="min-w-60">
            <SelectValue placeholder="Жанри" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Жанри</SelectLabel>
              {genres.map((genre) => (
                <SelectItem value={genre.id.toString()} key={genre.id}>
                  {genre.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full sm:w-auto">
        <p className="font-bold mb-4">Рік випуску</p>
        <Select onValueChange={onChangeYear} value={filter.year}>
          <SelectTrigger className="min-w-60">
            <SelectValue placeholder="Рік випуску" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Рік випуску</SelectLabel>
              {yearsArray.map((year) => (
                <SelectItem value={year.toString()} key={`year-${year}`}>
                  {year}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full sm:w-auto">
        <p className="font-bold mb-4">Рейтинг</p>
        <Select onValueChange={onChangeRating} value={filter.rating}>
          <SelectTrigger className="min-w-60">
            <SelectValue placeholder="Рейтинг" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Рейтинг</SelectLabel>
              {Array.from(Array(10).keys())
                .reverse()
                .map((rating) =>
                  rating !== 0 ? (
                    <SelectItem
                      value={rating.toString()}
                      key={`rating-${rating}`}
                    >
                      {rating}
                    </SelectItem>
                  ) : null,
                )}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleResetFilter} variant="link">
        Очистити фільтри
      </Button>
    </div>
  );
};
