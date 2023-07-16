import type { V2_MetaFunction } from "@remix-run/node";
import About from "~/components/About";
import Footer from "~/components/Footer";
import IdeTools from "~/components/IdeTools";
import MainNavigation from "~/components/MainNavigation";
import Profile from "~/components/Profile";
import Project from "~/components/Project";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="text-center items-center px-5">
      <header>
        <MainNavigation />
      </header>
      <main>
        <Profile />
        <About />
        <Project />
        <IdeTools />
        <Footer/>
      </main>
    </div>
  );
}
