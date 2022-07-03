import Link from "next/link";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

export default function FeaturedItem({ data }) {
  return (
    <Link href={`/product/${data.id}`}>
      <div className="p-4 bg-gray-100 rounded-3xl group cursor-pointer space-y-4 hover:brightness-75 transition-all">
        <img
          src={data.thumbnail}
          className="mx-auto rounded-2xl w-72 h-72 border"
        />
        <div className="flex justify-between items-center space-x-4">
          <div>
            <h5 className="font-semibold text-lg line-clamp-1">{data.title}</h5>
            <p className="text-gray-500 text-sm">${data.price}</p>
          </div>
          <ArrowSmRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
