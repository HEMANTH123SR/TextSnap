import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsFiletypePng, BsFiletypeSvg, BsFiletypeJpg } from "react-icons/bs";

export function PageLinkSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 ">
      <div className="flex justify-center items-center mb-5">
        <div className="text-center w-4/5">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-200 flex justify-center items-center">
            <BsFiletypePng className="text-blue-600 text-2xl font-extrabold" />
          </div>
          <h3 className="mb-2 text-lg font-semibold">PNG Conversion</h3>
          <p className="text-gray-600">
            Convert your files to PNG format with just a single click.
          </p>
          <Link href={"/text-to-png"}>
            <Button
              className="mt-4 w-32 text-center bg-black text-white font-sans font-semibold shadow-md rounded-md"
              variant="secondary"
            >
              Convert to PNG
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center mb-5">
        <div className="text-center w-4/5">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-yellow-200 flex justify-center items-center">
            <BsFiletypeJpg className="text-yellow-600 text-2xl font-extrabold" />
          </div>
          <h3 className="mb-2 text-lg font-semibold">JPG Conversion</h3>
          <p className="text-gray-600">
            Get your files in JPG format with our super-fast conversion tool.
          </p>
          <Link href={"/text-to-jpg"}>
            <Button
              className="mt-4 w-32 text-center bg-black text-white font-sans font-semibold shadow-md rounded-md"
              variant="secondary"
            >
              Convert to JPG
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center mb-5">
        <div className="text-center w-4/5">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-200 flex justify-center items-center">
            <BsFiletypeSvg className="text-green-600 text-2xl font-extrabold" />
          </div>
          <h3 className="mb-2 text-lg font-semibold">SVG Conversion</h3>
          <p className="text-gray-600">
            Choose SVG format for scalable vector graphics conversion.
          </p>
          <Link href={"text-to-svg"}>
            <Button
              className="mt-4 w-32 text-center bg-black text-white font-sans font-semibold shadow-md rounded-md"
              variant="secondary"
            >
              Convert to SVG
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
