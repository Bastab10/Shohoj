import Link from "next/link";
import { ArrowUpRight, Search, Clock3, Layers3 } from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Search,
    title: "Stop Searching Everywhere",
    description:
      "Explore different services in one place instead of spending time searching for each service separately.",
  },
  {
    number: "02",
    icon: Clock3,
    title: "Save Time and Effort",
    description:
      "Make service enquiries more conveniently and spend more time on the things that matter to you.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Multiple Needs, One Destination",
    description:
      "From household work and daily needs to catering and celebrations, সহজ brings a wide range of services together.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-16 text-[#10284C] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14 xl:px-20">
        {/* Section Heading */}
        <div className="mb-12 max-w-4xl sm:mb-16">
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#10284C]/60 sm:text-xs">
            <span className="h-px w-9 bg-[#DCAF24]" />
            About সহজ
          </p>

          <h2 className="font-serif text-5xl font-normal leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Your time is valuable.
            <br />
            Finding services
            <br />
            should be <span className="italic text-[#DCAF24]">সহজ.</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          {/* Business Story */}
          <div>
            <p className="max-w-2xl text-xl leading-9 text-[#10284C]/85 sm:text-2xl sm:leading-10">
              Life is busy. Finding a reliable service for every little need
              shouldn&apos;t make it busier.
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-[#10284C]/70 sm:text-base">
              Need a painter for your home, an electrician for a repair, a
              carpenter for furniture, or catering for a special event?
              Searching for each service separately takes time and effort.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#10284C]/70 sm:text-base">
              That&apos;s why we created{" "}
              <strong>সহজ — One Stop Service Solutions.</strong> Our idea is
              simple: bring a wide range of services together so you can explore
              your needs and make enquiries from one place.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#10284C]/70 sm:text-base">
              From painting, carpentry and electrical work to tiffin, AC repair,
              catering, sound systems and event arrangements, সহজ aims to make
              finding the services you need more convenient.
            </p>

            {/* CTA */}
            <Link
              href="/#services"
              className="mt-8 inline-flex items-center gap-4 bg-[#10284C] px-6 py-4 text-sm font-semibold text-white"
            >
              Explore Our Services
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Benefits */}
          <div className="border-t border-[#10284C]/15">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.number}
                  className="grid grid-cols-[44px_1fr] gap-4 border-b border-[#10284C]/15 py-6 sm:grid-cols-[52px_1fr] sm:gap-5 sm:py-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center bg-[#F5CA35]/20 sm:h-12 sm:w-12">
                    <Icon
                      size={21}
                      strokeWidth={1.6}
                      className="text-[#9A7410]"
                    />
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-bold tracking-[0.16em] text-[#B58A12]">
                      {benefit.number}
                    </p>

                    <h3 className="text-base font-semibold sm:text-lg">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#10284C]/65">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
