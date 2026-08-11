import { aboutData } from "../data/about/AboutData";
export default function AboutSection() {
  return (
    <section className="w-full bg-white py-14 xl:py-20">
      <div className="mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.55fr] lg:gap-14">
          <div>
            <h2 className="mb-6 text-[42px] font-black leading-tight text-gray-900 sm:text-[52px]">
              {aboutData.heading}
            </h2>

            <div
              className="flex flex-col gap-3 text-[15px] leading-[1.6] text-gray-700"
              style={{ textAlign: "justify" }}
            >
              <p>{aboutData.body}</p>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
              <img
                src="/range-rover/range%20rover%20garage%20image%203.jpg"
                alt="Range Rover Garage workshop"
                className="h-full w-full object-cover"
              />
            </div>

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
