import { Separator } from "@app/components/ui/separator";
import { Fragment } from "react";
import Link from "next/link";
import { LogoIcon } from "@app/icons/Logo";

export const Header = () => {
  const headerLinks = [
    {
      title: "Програються",
      path: "/movies/now-playing",
    },
    {
      title: "Популярні",
      path: "/movies/popular",
    },
    {
      title: "Топ оцінка",
      path: "/movies/top-rated",
    },
    { title: "Скоро в кіно", path: "/movies/upcoming" },
  ];
  return (
    <div className="mt-2">
      <div className="flex justify-between px-5 sm:px-10 xl:px-40 border-b-neutral-600 items-center">
        <Link href="/">
          <LogoIcon />
        </Link>
        <div className="flex gap-5">
          {headerLinks.map((link, index) => (
            <Fragment key={link.title}>
              <Link href={link.path}>{link.title}</Link>
              {index !== headerLinks.length - 1 && (
                <Separator className="h-8" orientation="vertical" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <Separator className="mt-2" />
    </div>
  );
};
