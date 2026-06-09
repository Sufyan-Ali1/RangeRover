export default function SupplyFitContent() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">

        {/* Heading */}
        <h2 className="mb-6 text-[28px] font-black leading-tight text-gray-900 sm:text-[32px]">
          Supply &amp; Fit Services for Range Rover &amp; Land Rover,{" "}
          <span style={{ color: "#11633A" }}>Trusted Across London &amp; Essex</span>
        </h2>

        {/* Body paragraphs */}
        <div className="flex flex-col gap-5 text-[15px] leading-[1.75] text-gray-700">
          <p>
            Our supply and fit service is the complete solution for Range Rover and Land Rover owners who need genuine or OEM-quality parts sourced and professionally installed by marque specialists. Unlike general garages, every technician at our Grays workshop has dedicated experience with the full JLR model range — from the Classic to the latest Sport and Defender — ensuring the right part is fitted correctly, first time, every time.
          </p>
          <p>
            We work directly with Land Rover-approved distributors and authorised parts suppliers across the UK, which means every component we supply meets or exceeds manufacturer specification. Whether you require a replacement turbocharger, an air suspension compressor, a transfer box, or a full engine assembly, we can source the part, confirm fitment compatibility with your specific VIN, and complete the installation within a timeframe that suits you — often on the same day for in-stock components.
          </p>
          <p>
            Transparency is central to how we operate. Before any work begins, you will receive a full written quote covering the cost of the part and the labour separately. There are no hidden fees, no inflated mark-ups on parts, and no surprises on collection. Every supply and fit job carried out at our workshop is backed by our 12-month parts and labour warranty, giving you complete peace of mind long after you leave our forecourt.
          </p>

          {/* Bullet list */}
          <ul className="flex flex-col gap-2 pl-1">
            {[
              "All parts sourced from Land Rover-approved UK distributors.",
              "Full written quote provided before any work begins.",
              "Same-day fitting available for the majority of in-stock components.",
              "12-month warranty on all parts and labour as standard.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
