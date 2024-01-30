import { MainBlock } from "@app/components/MainBlock/MainBlock";
import { MovieRow } from "@app/components/MovieRow/MovieRow";
import { headerLinks } from "@app/constants/headerLinks";

export default function Home() {
  return (
    <>
      <div className="hidden lg:block">
        <MainBlock />
      </div>
      <div className="px-5 sm:px-10 xl:px-40 my-8 md:my-12 mb-32">
        {headerLinks.map(({ type, name, path }) => (
          <MovieRow title={name} key={type} movieType={type} path={path} />
        ))}
      </div>
    </>
  );
}
