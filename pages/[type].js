import FeaturedItem from "../components/FeaturedItem";

import Index from "../components/Index";

import { products } from "../components/global";

export default function Type({ type, data }) {
  return (
    <Index title={type.name}>
      {/* <div className="space-y-4">
        <h3 className="text-xl font-semibold">view products</h3>
        <div className="flex justify-start items-center space-x-4 overflow-x-scroll snap-x">
          {products.map((p) => (
            <ProductTypePill p={p} />
          ))}
        </div>
      </div> */}
      <div
        className={`${type.background} text-white p-24 font-semibold text-center text-4xl rounded-3xl`}
      >
        <h1>{type.name}</h1>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">all products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-4 gap-4">
          {data.products.map((p) => (
            <FeaturedItem data={p} />
          ))}
        </div>
      </div>
    </Index>
  );
}

export async function getServerSideProps({ params }) {
  const { type } = params;

  const data = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );

  return {
    props: {
      type: products.filter((p) => p.slug === type)[0],
      data,
    },
  };
}
