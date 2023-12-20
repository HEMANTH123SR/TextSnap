"use client";
import React, { useCallback, useRef, useState } from "react";
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
    xl_4 = "text-4xl",
    xl_6 = "text-6xl",
    xl_9 = "text-9xl",
  }

  const [textColour, setTextColour] = useState<TextColour>();
  const [textFont, setTextFont] = useState<Fonts>();
  const [fontSize, setFontSize] = useState<FontSize>();
  const [background, setBackground] = useState<BackgroundColour>();
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
            <Select
              onValueChange={(e) => {
                setTextFont(e as Fonts);
              }}
            >
              <SelectTrigger className="w-full md:w-[180mx]">
                <SelectValue placeholder="Font" />
              </SelectTrigger>
              <SelectContent position="popper">
                {Object.values(Fonts).map((font) => (
                  <SelectItem value={font} key={font}>
                    {font}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              onValueChange={(e) => {
                setFontSize(e as FontSize);
              }}
            >
              <SelectTrigger className="w-full md:w-[180mx]">
                <SelectValue placeholder="Font Size" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(FontSize).map((fontSize) => (
                  <SelectItem value={fontSize} key={fontSize}>
                    {fontSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              onValueChange={(e) => {
                setTextColour(e as TextColour);
              }}
            >
              <SelectTrigger className="w-full md:w-[180mx]">
                <SelectValue placeholder="Text Color" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(TextColour).map((textColour) => (
                  <SelectItem value={textColour} key={textColour}>
                    {textColour}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              onValueChange={(e) => {
                setBackground(e as BackgroundColour);
              }}
            >
              <SelectTrigger className="w-full md:w-[180mx]">
                <SelectValue placeholder="Background Color" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(BackgroundColour).map((backgroundColour) => (
                  <SelectItem value={backgroundColour} key={backgroundColour}>
                    {backgroundColour}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select></Select>
          </div>

          <div className="border border-gray-300 rounded-md" ref={ref}>
            <textarea
              typeof="string"
              aria-label="Text editor area"
              className={`w-full h-64 p-2 resize-none ${textColour} ${textFont} ${background}  ${fontSize} `}
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
