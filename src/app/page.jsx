import About from "@/Components/home/About";
import Bannar from "@/Components/home/Bannar";
import ServicesOverview from "@/Components/home/ServiceOverview";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen items-center  bg-zinc-50 font-sans dark:bg-black">
      <section>
        <Bannar></Bannar>
      </section>
      <section>
        <About></About>
      </section>
      <section>
        <ServicesOverview></ServicesOverview>
      </section>
    </div>
  );
}
