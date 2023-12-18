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
    
  }

  const [textColour, setTextColour] = useState();
  const [textFont, setTextFont] = useState();
  const [fontSize, setFontSize] = useState();
  const [background, setBackground] = useState();

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
    <main className="flex flex-col items-center justify-center h-screen bg-white px-4">
      <Card className="w-full max-w-3xl">
        <CardHeader className="p-4 bg-black rounded-t-md flex flex-row justify-between">
          <h2 className="text-lg text-white font-sans font-semibold p-2">
            Text Editor
          </h2>
          <button
            className="w-24 text-center bg-green-600 font-sans text-white p-2 rounded-md font-semibold"
            onClick={downloadDivToPng}
          >
            Download
          </button>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex justify-evenly mb-4">
            <Button className="w-24 text-center rounded-md bg-black text-white">
              Align Left
            </Button>
            <Button className="w-24 text-center rounded-md bg-black text-white">
              Center
            </Button>
            <Button className="w-24 text-center rounded-md bg-black text-white">
              Align Right
            </Button>
            <Button className="w-24 text-center rounded-md bg-black text-white">
              Justify
            </Button>
          </div>
          <div className="flex space-x-2 mb-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Font" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Arial">Arial</SelectItem>
                <SelectItem value="Verdana">Verdana</SelectItem>
                <SelectItem value="Georgia">Georgia</SelectItem>
                <SelectItem value="Times New Roman">Times New Roman</SelectItem>
                <SelectItem value="Courier New">Courier New</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
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
              <SelectTrigger className="w-[180px]">
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
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Background Color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="white">White</SelectItem>
                <SelectItem value="lightgray">Light Gray</SelectItem>
                <SelectItem value="darkgray">Dark Gray</SelectItem>
                <SelectItem value="black">Black</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="border border-gray-300 rounded-md" ref={ref}>
            <textarea
              aria-label="Text editor area"
              className="w-full h-64 p-2 resize-none"
              placeholder="Start writing here..."
            />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
