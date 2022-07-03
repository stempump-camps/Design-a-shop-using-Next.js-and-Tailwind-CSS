import Index from "../../components/Index";

import { useState } from "react";

export default function Product({ data }) {
  const [mainImage, setMainImage] = useState(0);

  return (
    <Index title={data.title}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="font-bold text-3xl">{data.title}</h1>
          <p className="text-gray-500">${data.price}</p>
        </div>
        <button
          className="text-white bg-black py-4 px-16 font-medium rounded-2xl hover:opacity-75 transition-opacity
         "
        >
          Buy now
        </button>
      </div>
      <div className="space-y-2">
        <img
          src={data.images[mainImage]}
          className="rounded-3xl h-96 w-full border"
        />
        <div className="flex space-x-2 justify-end rounded-full items-stretch p-2">
          {data.images.map((image, index) => (
            <button
              onClick={() => setMainImage(index)}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                mainImage == index ? "bg-gray-200" : "hover:bg-gray-100 border"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <hr />
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">more information</h3>
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <InfoBlock title="description" desc={data.description} />
          <InfoBlock title="rating" desc={`${data.rating} out of 5 stars`} />
          <InfoBlock title="stock" desc={`${data.stock} remaining`} />
          <InfoBlock title="brand" desc={data.brand} />
        </div>
      </div>
    </Index>
  );
}

function InfoBlock({ title, desc }) {
  return (
    <div className="space-y-1 bg-gray-100 rounded-3xl p-6 flex flex-col items-stretch justify-center">
      <h4 className="font-semibold text-xl">{title}</h4>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const data = await fetch(`https://dummyjson.com/products/${id}`).then((res) =>
    res.json()
  );

  return {
    props: {
      data,
    },
  };
}
