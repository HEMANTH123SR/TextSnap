"use client";
import React, {
  TextareaHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from "react";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { toPng } from "html-to-image";
export function TextEditor() {
  enum TextColour {
    Blue = "text-blue-600",
    White = "text-white",
    Black = "text-black",
    Gray = "text-gray-600",
    Red = "text-red-600 ",
    Green = "text-green-600",
    Yellow = "text-yellow-600",
    Orange = "text-orange-600",
    Purple = "text-purple-600",
    Teal = "text-teal-600",
  }
  enum BackgroundColour {
    Blue = "bg-blue-600",
    White = "bg-white",
    Black = "bg-black",
    Gray = "bg-gray-600",
    Red = "bg-red-600 ",
    Green = "bg-green-600",
    Yellow = "bg-yellow-600",
    Orange = "bg-orange-600",
    Purple = "bg-purple-600",
    Teal = "bg-teal-600",
  }
  enum Fonts {
    Sans = "font-sans",
    Serif = "font-serif",
    Mono = "font-mono",
  }

  enum FontSize {
    xs = "text-xs",
    sm = "text-sm",
    base = "text-base",
    lg = "text-lg",
    xl = "text-xl",
    xl_2 = "text-2xl",
    xl_3 = "text-3xl",
    xl_4 = "text-4xl",
    xl_5 = "text-5xl",
    xl_6 = "text-6xl",
    xl_7 = "text-7xl",
    xl_8 = "text-6xl",
    xl_9 = "text-7xl",
  }

  const [textColour, setTextColour] = useState<TextColour>(TextColour.Black);
  const [textFont, setTextFont] = useState<Fonts>(Fonts.Sans);
  const [fontSize, setFontSize] = useState<FontSize>(FontSize.base);
  const [background, setBackground] = useState<BackgroundColour>(
    BackgroundColour.White
  );
  const [textInput, setTextInput] = useState("");
  let ref = useRef<HTMLDivElement>(null);
  const downloadDivToPng = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);
  return (
    <main className="h-screen bg-white ">
      <Card className="w-full ">
        <CardHeader className="flex flex-row justify-between items-center">
          <h2 className="text-xl text-black font-sans font-semibold  p-2">
            Type And Convert Your Text To Image
          </h2>
          <button
            className="w-24 text-center bg-black font-sans text-white p-2 rounded-md font-semibold"
            onClick={downloadDivToPng}
          >
            Download
          </button>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-4">
            <Button className="bg-black text-white py-2 px-4 rounded">
              Align Left
            </Button>
            <Button className="bg-black text-white py-2 px-4 rounded">
              Center
            </Button>
            <Button className="bg-black text-white py-2 px-4 rounded">
              Align Right
            </Button>
            <Button className="bg-black text-white py-2 px-4 rounded">
              Justify
            </Button>
          </div>
          <div className="flex flex-col lg:flex-row    justify-center items-center space-x-4 space-y-3 mb-4">
            <Select></Select>
            <Select>
              <SelectTrigger className="w-full md:w-[180mx]">
                <SelectValue placeholder="Font" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="Arial">Arial</SelectItem>
                <SelectItem value="Verdana">Verdana</SelectItem>
                <SelectItem value="Georgia">Georgia</SelectItem>
                <SelectItem value="Times New Roman">Times New Roman</SelectItem>
                <SelectItem value="Courier New">Courier New</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[180mx]">
                <SelectValue placeholder="Font Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12">12</SelectItem>
                <SelectItem value="14">14</SelectItem>
                <SelectItem value="16">16</SelectItem>
                <SelectItem value="18">18</SelectItem>
                <SelectItem value="20">20</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[180mx]">
                <SelectValue placeholder="Text Color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="black">Black</SelectItem>
                <SelectItem value="red">Red</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="yellow">Yellow</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[180mx]">
                <SelectValue placeholder="Background Color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="white">White</SelectItem>
                <SelectItem value="lightgray">Light Gray</SelectItem>
                <SelectItem value="darkgray">Dark Gray</SelectItem>
                <SelectItem value="black">Black</SelectItem>
              </SelectContent>
            </Select>
            <Select></Select>
          </div>

          <div className="border border-gray-300 rounded-md" ref={ref}>
            <textarea
              aria-label="Text editor area"
              className={`w-full h-64 p-2 resize-none ${textColour} ${textFont} ${background} ${fontSize}`}
              placeholder="Start writing here..."
              value={textInput}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setTextInput(e.target.value);
              }}
            />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

/*

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div>
              <CameraIcon className="h-6 w-6" />
            </div>
            <div className="md:hidden">
              <button
                aria-label="toggle menu"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                type="button"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="md:flex items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link className="my-1 text-sm text-gray-700 hover:text-green-500 md:mx-4 md:my-0" href="#">
                Home
              </Link>
              <Link className="my-1 text-sm text-gray-700 hover:text-green-500 md:mx-4 md:my-0" href="#">
                About
              </Link>
              <Link className="my-1 text-sm text-gray-700 hover:text-green-500 md:mx-4 md:my-0" href="#">
                Features
              </Link>
              <Link className="my-1 text-sm text-gray-700 hover:text-green-500 md:mx-4 md:my-0" href="#">
                Contact
              </Link>
            </div>
            <Button className="hidden md:block bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded">
              Download
            </Button>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-6 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Text Editor</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-4">
            <Button className="bg-black text-white py-2 px-4 rounded">Align Left</Button>
            <Button className="bg-black text-white py-2 px-4 rounded">Center</Button>
            <Button className="bg-black text-white py-2 px-4 rounded">Align Right</Button>
            <Button className="bg-black text-white py-2 px-4 rounded">Justify</Button>
          </div>
          <div className="flex flex-wrap gap-4 mb-4">
            <Select>
              <SelectTrigger id="font">
                <SelectValue placeholder="Font" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="arial">Arial</SelectItem>
                <SelectItem value="times-new-roman">Times New Roman</SelectItem>
                <SelectItem value="courier-new">Courier New</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger id="font-size">
                <SelectValue placeholder="Font Size" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="12px">12px</SelectItem>
                <SelectItem value="14px">14px</SelectItem>
                <SelectItem value="16px">16px</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger id="text-color">
                <SelectValue placeholder="Text Color" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="black">Black</SelectItem>
                <SelectItem value="red">Red</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger id="background-color">
                <SelectValue placeholder="Background Color" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="white">White</SelectItem>
                <SelectItem value="yellow">Yellow</SelectItem>
                <SelectItem value="lightblue">Light Blue</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="rounded-lg border-2 border-gray-300 p-4">
            <textarea
              className="w-full h-40 p-2 text-sm text-gray-700 bg-transparent border-none focus:outline-none"
              placeholder="Start writing here..."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function CameraIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

*/
