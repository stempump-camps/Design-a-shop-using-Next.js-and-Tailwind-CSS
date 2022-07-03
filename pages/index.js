import { PuzzleIcon } from "@heroicons/react/outline";

import FeaturedItem from "../components/FeaturedItem";

import Index from "../components/Index";

import { products } from "../components/global";

import Link from "next/link";

export default function Home({ data }) {
  return (
    <Index>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">view products</h3>
        <div className="flex justify-start items-center space-x-4 overflow-x-scroll snap-x">
          {products.map((p) => (
            <ProductTypePill p={p} />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">featured products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-4 gap-4">
          {data.products.map((p) => (
            <FeaturedItem data={p} />
          ))}
        </div>
      </div>
    </Index>
  );
}

export async function getServerSideProps() {
  const data = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );

  return {
    props: {
      data,
    },
  };
}

function ProductTypePill({ p }) {
  return (
    <Link href={`/${p.slug}`}>
      <div className="flex items-center justify-start py-2 px-4 bg-gray-100 rounded-full font-semibold space-x-2 snap-start hover:brightness-75 transition-all cursor-pointer">
        <PuzzleIcon className="w-5 h-5" />
        <span>{p.name}</span>
      </div>
    </Link>
  );
}
