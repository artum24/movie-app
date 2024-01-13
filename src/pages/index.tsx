import { MainBlock } from "@app/components/MainBlock/MainBlock";
import { MovieRow } from "@app/components/MovieRow/MovieRow";

export default function Home() {
  const typePage = [
    {
      type: "now-playing",
      name: "Програються",
      path: "movies/now-playing",
    },
    {
      type: "popular",
      name: "Популярні",
      path: "movies/popular",
    },
    {
      type: "top-rated",
      name: "Топ оцінка",
      path: "movies/top-rated",
    },
    {
      type: "upcoming",
      name: "Скоро в кіно",
      path: "movies/upcoming",
    },
  ];
  return (
    <main>
      <MainBlock />
      <div className="px-5 sm:px-10 xl:px-40 my-8 md:my-12 mb-32">
        {typePage.map(({ type, name, path }) => (
          <MovieRow title={name} key={type} movieType={type} path={path} />
        ))}
      </div>
    </main>
  );
}
