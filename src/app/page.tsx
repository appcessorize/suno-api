"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
// import TodoList from "@/components/TodoList";
import TodoList from "../app/components/TodoList";
import Song from "../app/components/Song";
import CustomSong from "../app/components/CustomSong";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col snap-y overflow-y-scroll snap-mandatory`}
    >
      <div className="min-h-screen w-full bg-red-100 flex items-center justify-center snap-start">
        <div className="prose">
          <Song />
          <p>!</p>
          <div>
            <CustomSong />
          </div>
        </div>
      </div>
      <div className="h-screen w-full bg-black flex items-center flex-col justify-center snap-start bg-[url('https://c4.wallpaperflare.com/wallpaper/914/522/554/david-bowie-musician-smoking-wallpaper-preview.jpg')] bg-cover">
        <div className="bg-black/60 w-full h-full flex items-center flex-col justify-center">
          <p className="font-bold text-white px-4 md:px-10 w-full md:w-1/2 text-2xl md:text-5xl lg:text-7xl drop-shadow-lg text-center md:text-left">
            Music itself is going to become like running water or electricity
          </p>
          <div className="flex justify-end w-full mt-4 md:mt-0">
            <p className="font-bold text-gray-200 px-4 md:px-10 w-full md:w-1/2 text-xl md:text-2xl lg:text-3xl mt-4 drop-shadow-lg text-center md:text-right">
              David Bowie
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen w-full bg-yellow-100 flex items-center justify-center snap-start">
        <div className="prose">
          <p className="px-4 md:px-10 text-center">
            The absolute transformation of everything that we ever thought about
            music will take place within 10 years, and nothing is going to be
            able to stop it.
          </p>
          <p className="px-4 md:px-10 text-center">
            I see absolutely no point in pretending that it’s not going to
            happen.
          </p>
        </div>
      </div>
      <div className="h-screen w-full bg-black flex items-center flex-col justify-center snap-start">
        <p className="font-bold text-white px-4 md:px-10 w-full md:w-1/2 text-2xl md:text-5xl lg:text-5xl drop-shadow-lg text-center md:text-left">
          What if your todo list could sing?
        </p>
        <p className="font-bold text-white px-4 md:px-10 w-full md:w-1/2 text-2xl md:text-5xl lg:text-5xl drop-shadow-lg text-center md:text-left mt-8">
          Would it help you to remember what you have to do?
        </p>
      </div>
      <div className="w-full bg-black flex items-center justify-center snap-start">
        <TodoList />
      </div>
      <div className="h-screen w-full bg-red-100 flex items-center justify-center snap-start">
        <p>hi</p>
      </div>
    </main>
  );
}
