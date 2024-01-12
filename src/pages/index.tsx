import { MainBlock } from "@app/components/MainBlock/MainBlock";
import { MovieRow } from "@app/components/MovieRow/MovieRow";

export default function Home() {
  const typePage = [
    {
      type: "now-playing",
      name: "Програються",
    },
    {
      type: "popular",
      name: "Популярні",
    },
    {
      type: "top-rated",
      name: "Топ оцінка",
    },
    {
      type: "upcoming",
      name: "Скоро в кіно",
    },
  ];
  return (
    <main>
      <MainBlock />
      <div className="px-5 sm:px-10 xl:px-40 my-8 md:my-12 mb-32">
        {typePage.map(({ type, name }) => (
          <MovieRow title={name} key={type} movieType={type} />
        ))}
      </div>
    </main>
  );
}
