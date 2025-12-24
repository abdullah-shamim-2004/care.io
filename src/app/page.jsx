import About from "@/Components/home/About";
import Bannar from "@/Components/home/Bannar";
import ServicesOverview from "@/Components/home/ServiceOverview";
import TestimonialsMetrics from "@/Components/home/Testmonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-zinc-50 dark:bg-black text-base-content">
      {/* Hero / Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        <Bannar />
      </section>

      {/* About */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <About />
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <ServicesOverview />
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center">
        <span className="h-1 w-24 bg-primary rounded-full opacity-60 my-10" />
      </div>

      {/* Testimonials & Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <TestimonialsMetrics />
        </div>
      </section>
    </div>
  );
}
