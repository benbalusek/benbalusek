"use client";

import Link from "next/link";

type PageInfo = {
  label: string;
  path: string;
};

type Props = {
  previous?: PageInfo;
  next?: PageInfo;
};

function FooterNav({ previous, next }: Props) {
  return (
    <div className="flex justify-between items-center mt-16 mb-6 border-t pt-6 text-sm text-gray-600">
      {/* Previous Page */}
      {previous ? (
        <Link href={previous.path} className="hover:underline">
          ← {previous.label}
        </Link>
      ) : (
        <div />
      )}

      {/* Next Page */}
      {next ? (
        <Link href={next.path} className="hover:underline">
          {next.label} →
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}

export default FooterNav;
