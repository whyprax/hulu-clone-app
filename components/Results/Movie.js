import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

const Movie = ({ result }) => {
  console.log(result);
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  const myLoader = ({ src }) => {
    return (
      `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
      `${BASE_URL}${result.poster_path}`
    );
  };

  return (
    <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        loader={myLoader}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={1920}
        height={1080}
        alt=""
      />
      <div>
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_title}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} • `}
          {result.release_date && `${result.release_date} •`}
          <ThumbUpIcon className="w-4 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Movie;
