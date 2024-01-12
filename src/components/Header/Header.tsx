import { Separator } from "@app/components/ui/separator";
import { Fragment } from "react";
import Link from "next/link";

export const Header = () => {
  const headerLinks = [
    {
      title: "Програються",
      path: "/now-playing",
    },
    {
      title: "Популярні",
      path: "/popular",
    },
    {
      title: "Топ оцінка",
      path: "top-rated",
    },
    { title: "Скоро в кіно", path: "upcoming" },
  ];
  return (
    <div className="mt-8">
      <div className="flex justify-between px-5 sm:px-10 xl:px-40 border-b-neutral-600">
        <Link href="/">Logo</Link>
        <div className="flex gap-5">
          {headerLinks.map((link, index) => (
            <Fragment key={link.title}>
              <Link href={`movies/${link.path}`}>{link.title}</Link>
              {index !== headerLinks.length - 1 && (
                <Separator orientation="vertical" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <Separator className="mt-8" />
    </div>
  );
};
