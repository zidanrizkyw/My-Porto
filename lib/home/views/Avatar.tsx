import Image from "next/image";
import { homeVM } from "@/injector";

// Cut-out portrait that pops out of an accent circle: the frame is taller
// than the circle and only its bottom is rounded, so the head clears the top.
export default function Avatar() {
  const { name, photo } = homeVM.getProfile();

  return (
    <div className="relative mb-8 h-44 w-36">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 aspect-square rounded-full bg-linear-to-b from-accent/40 via-accent/10 to-surface ring-1 ring-line"
      />
      <div className="absolute inset-0 overflow-hidden rounded-b-full">
        <Image
          src={photo.src}
          alt={name}
          width={photo.width}
          height={photo.height}
          sizes="144px"
          preload
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
