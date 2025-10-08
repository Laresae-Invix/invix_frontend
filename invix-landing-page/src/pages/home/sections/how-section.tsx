import { useState, useEffect } from "react";
import { Step } from "../../../components/stepsCard";

export default function HowSection() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.2 }
    );
    const section = document.getElementById("how-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="how-section"
      className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 transition-opacity duration-700 ease-in-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          Cara Kerja
        </h3>
        <p className="text-slate-600 text-lg sm:text-xl mt-4">
          3 langkah mudah — selesai dalam{" "}
          <span className="font-semibold">kurang dari 2 menit</span>.
        </p>
      </div>
      <ol className="mt-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Step
          no={1}
          title="Pilih Template"
          desc="Temukan gaya favoritmu dari ratusan pilihan."
        />
        <Step
          no={2}
          title="Isi Detail"
          desc="Nama, tanggal, lokasi, dan foto/video."
        />
        <Step
          no={3}
          title="Bagikan"
          desc="Link & QR siap disebar ke semua tamu."
        />
      </ol>
    </section>
  );
}
