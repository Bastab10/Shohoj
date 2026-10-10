
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Painting",
    description: "Give your walls a fresh, beautiful look.",
    image: "/images/painting.jpg",
  },
  {
    number: "02",
    title: "Tiffin Services",
    description: "Everyday meals delivered with care.",
    image: "/images/tiffin.jpg",
  },
  {
    number: "03",
    title: "Carpentry",
    description: "Furniture, fittings and woodwork.",
    image: "/images/carpentry.jpg",
  },
  {
    number: "04",
    title: "Electrician",
    description: "Electrical repairs and installations.",
    image: "/images/electrician.jpg",
  },
  {
    number: "05",
    title: "AC Repair",
    description: "Cooling, servicing and maintenance.",
    image: "/images/ac-repair.jpg",
  },
  {
    number: "06",
    title: "Catering",
    description: "Food arrangements for every gathering.",
    image: "/images/catering.jpg",
  },
  {
    number: "07",
    title: "Band Party",
    description: "Music to make celebrations memorable.",
    image: "/images/band-party.jpg",
  },
  {
    number: "08",
    title: "Sound System",
    description: "Sound equipment for events and functions.",
    image: "/images/sound-system.jpg",
  },
  {
    number: "09",
    title: "Lighting & Decoration",
    description: "Beautiful setups for special occasions.",
    image: "/images/lighting-decoration.jpg",
  },
  {
    number: "10",
    title: "Naam Party",
    description: "Assamese cultural naam-kirtan arrangements.",
    image: "/images/naam-party.png",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-20 text-[#10284C] sm:py-28"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:mb-16">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] sm:text-xs">
              <span className="h-px w-9 bg-[#DCAF24]" />
              Discover what we do
            </p>

            <h2 className="font-serif text-5xl font-normal leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Services for
              <br />
              <span className="italic text-[#DCAF24]">
                every occasion.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#10284C]/65 sm:text-base">
            From everyday home needs to your biggest celebrations,
            find the right service with সহজ.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => (
            <Link
              key={service.number}
              href="/#contact"
              aria-label={`Book ${service.title}`}
              className="group overflow-hidden border border-[#10284C]/10 bg-white"
            >
              {/* Service Image */}
              <div className="relative h-56 overflow-hidden bg-white sm:h-60">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />

                <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[10px] font-bold tracking-widest text-[#10284C]">
                  {service.number}
                </span>

                <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5CA35] text-[#10284C]">
                  <ArrowUpRight size={19} />
                </span>
              </div>

              {/* Service Details */}
              <div className="p-5 sm:p-6">
                <h3 className="font-serif text-2xl leading-tight tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#10284C]/65">
                  {service.description}
                </p>

                <p className="mt-5 border-t border-[#10284C]/10 pt-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#10284C]/70">
                  Explore service
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
