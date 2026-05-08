export default function AboutSection() {
  return (
    <section className="w-full bg-white py-14 xl:py-20">
      <div className="mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.55fr] lg:gap-14">

          {/* Left — text */}
          <div>
            <h2 className="mb-6 text-[42px] font-black leading-tight text-gray-900 sm:text-[52px]">
              About us
            </h2>

            <div className="flex flex-col gap-3 text-[15px] leading-[1.6] text-gray-700" style={{ textAlign: "justify" }}>
              <p>
                Range Rover Garage is the UK&apos;s premier independent specialist for Range Rover and Land Rover engine services. Based in Grays, Essex, we have spent years perfecting the craft of engine rebuilding, replacement, and diagnostics — delivering factory-level performance at a fraction of the main dealer cost.
              </p>
              <p>
                Our team of master technicians brings decades of hands-on experience with the full JLR engine range, from the TDV6 and SDV8 diesel platforms to the latest Ingenium petrol and hybrid powertrains. Every vehicle that enters our workshop is treated with the same level of care and precision, regardless of age or specification.
              </p>
              <p>
                We believe that owning a Range Rover or Land Rover should be a pleasure, not a financial burden. That is why we offer fully reconditioned engines, genuine OEM parts, and transparent pricing — giving our customers confidence that their vehicle is in the best possible hands.
              </p>
              <p>
                From timing chain replacements and turbo rebuilds to full engine swaps and performance upgrades, our workshop is equipped with the latest diagnostic tools and specialist equipment. We back every job with a comprehensive warranty and a commitment to getting it right the first time.
              </p>
              <p>
                Whether you are a private owner dealing with an unexpected engine failure or a fleet operator looking for a reliable long-term partner, Range Rover Garage is here to provide expert solutions with honesty, skill, and genuine passion for these iconic vehicles.
              </p>
            </div>
          </div>

          {/* Right — image with green quarter-circle decoration */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
              <img
                src="/range-rover/range%20rover%20garage%20image%203.jpg"
                alt="Range Rover Garage workshop"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Green quarter-circle decoration */}
            <div
              className="absolute bottom-0 right-0 h-28 w-28"
              style={{
                background: "#11633A",
                borderTopLeftRadius: "100%",
                borderBottomRightRadius: "16px",
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
