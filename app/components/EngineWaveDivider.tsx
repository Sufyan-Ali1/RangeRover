interface EngineWaveDividerData {
  eyebrow: string;
  title: string;
  description: string;
  paragraphs: string[];
}

export default function EngineWaveDivider({ data }: { data: EngineWaveDividerData }) {
  return (
    <section aria-labelledby="engine-workshop-intro-title" className="relative isolate overflow-hidden bg-white px-5 pb-28 pt-14 sm:px-8 lg:pb-32 lg:pt-16">
      <div className="relative z-10 mx-auto max-w-[1216px] text-left">
        <p className="text-xs font-bold uppercase tracking-wide text-[#11633A]">{data.eyebrow}</p>
        <h2 id="engine-workshop-intro-title" className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-[#0d4f2d] sm:text-4xl">{data.title}</h2>
        <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">{data.description}</p>
        <div className="mt-5 space-y-5">
          {data.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-sm leading-7 text-gray-600 sm:text-base">{paragraph}</p>
          ))}
        </div>
      </div>
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 210"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 -bottom-12 -z-10 mx-auto h-[180px] w-full max-w-[1216px]"
        focusable="false"
      >
        <path
          d="M0 30C125 83 202 56 330 28C463-2 512 12 655 39C806 68 851 43 972 11C1060-12 1132 7 1200 16V210H0Z"
          fill="#0d4f2d"
        />
        <path
          d="M0 30C153 100 232 59 333 46C454 30 505 78 645 80C796 83 877 28 1010 44C1091 54 1150 82 1200 101V210H0Z"
          fill="#11633A"
        />
        <path
          d="M0 77C141 101 207 90 293 94C410 100 458 128 585 111C705 95 750 65 850 79C965 93 1009 130 1200 105V210H0Z"
          fill="#388358"
        />
        <path
          d="M0 145C145 154 253 107 402 108C551 109 628 125 739 137C871 153 944 120 1048 123C1105 124 1157 128 1200 129V210H0Z"
          fill="#489567"
        />
        <path
          d="M0 145C139 134 226 170 343 167C450 165 476 150 600 159C730 169 806 154 919 153C1020 151 1118 151 1200 153V210H0Z"
          fill="#56a575"
        />
      </svg>
    </section>
  );
}
