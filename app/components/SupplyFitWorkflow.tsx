const steps = [
  {
    number: "01",
    title: "Diagnose Issue",
    description: "Full computer diagnostics with Land Rover SDD.",
  },
  {
    number: "02",
    title: "Recommend Parts",
    description: "Genuine or OEM options with clear pricing.",
  },
  {
    number: "03",
    title: "Customer Approval",
    description: "No work begins without your written go-ahead.",
  },
  {
    number: "04",
    title: "Supply the Parts",
    description: "Sourced from approved UK distributors only.",
  },
  {
    number: "05",
    title: "Professional Fitting",
    description: "Carried out by Land Rover trained technicians.",
  },
  {
    number: "06",
    title: "Testing & Delivery",
    description: "Road test, recoding and a 12-month warranty.",
  },
];

export default function SupplyFitWorkflow() {
  return (
    <section className="w-full bg-[#F3F4F6]">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">

        {/* Header */}
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#4CA66B]">
          Workflow
        </p>
        <h2 className="mb-3 text-[36px] font-black leading-tight text-gray-900 sm:text-[42px]">
          How It Works
        </h2>
        <p className="mb-14 max-w-[560px] text-[15px] leading-[1.65] text-gray-600">
          A transparent six-step process designed to make specialist Land Rover repair feel
          effortless from quote to keys.
        </p>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — runs from centre of circle 01 to centre of circle 06 */}
          <div
            className="absolute top-[22px] hidden h-px lg:block"
            style={{
              background: "linear-gradient(90deg, #11633A 0%, #4CA66B 100%)",
              left: "60px",
              width: "calc(100% - 120px)",
            }}
          />

          {/* Mobile / tablet grid */}
          <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-3 lg:hidden">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gray-900">
                  <span className="text-[13px] font-bold tracking-wide text-white">{step.number}</span>
                </div>
                <h3 className="mb-1.5 text-[14px] font-bold text-gray-900">{step.title}</h3>
                <p className="text-[13px] leading-[1.6] text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Desktop flex — step 01 flush left, step 06 flush right */}
          <div className="hidden w-full items-start justify-between lg:flex">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center" style={{ width: "120px" }}>
                <div className="relative z-10 mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-gray-900">
                  <span className="text-[13px] font-bold tracking-wide text-white">{step.number}</span>
                </div>
                <h3 className="mb-1.5 text-[14px] font-bold text-gray-900">{step.title}</h3>
                <p className="text-[13px] leading-[1.6] text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
