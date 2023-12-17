import Link from "next/link";
import TextToImageLandingPageImage from "@/public/text-to-image.png";
import Image from "next/image";
export function LandignPage() {
  return (
    <>
      <section className="w-full  px-5">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-14 xl:gap-5 space-y-10 w-full xl:h-screen">
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
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
