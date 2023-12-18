import Link from "next/link";
import TextToImageLandingPageImage from "@/public/text-to-image.png";
import Image from "next/image";
export function LandignPage() {
  return (
    <>
      <section className="w-full flex justify-center items-center">
        <div className="container">
          <div className="flex flex-col items-center justify-center w-full gap-8 ">
            <Image
              src={TextToImageLandingPageImage}
              alt={"Hero Gif"}
              width={"1000"}
              height={"1000"}
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Welcome to TextSnap Inc.
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  We are committed to building the best platform for your
                  business to capture your thoughts with TextSnap. Simply type,
                  click, and download.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
