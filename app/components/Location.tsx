export default function Location() {
  const mapsEmbedUrl =
    "https://maps.google.com/maps?q=51.4741169,0.3034999&output=embed&z=17";

  return (
    <section className="w-full bg-white py-16 xl:py-20">

      {/* Label */}
      <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#4CA66B]">
        Professional Solutions
      </p>
      <h2 className="mb-2 text-center text-[28px] font-black text-gray-900 sm:text-[36px]">
        Visit Our Workshop
      </h2>
      <p className="mb-10 text-center text-[15px] text-gray-500">
        We provide specialist engine services and vehicle recovery in all surrounding areas.
      </p>

      {/* Outer card */}
      <div className="mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px]">
        <div className="overflow-hidden rounded-3xl border border-[#2a2a2a]" style={{ minHeight: "520px" }}>
          <div className="flex flex-col lg:flex-row" style={{ minHeight: "520px" }}>

            {/* Left — contact info */}
            <div className="flex flex-col p-6 sm:p-8 lg:w-1/2 xl:p-12" style={{ background: "#F9FDFA" }}>

              {/* Green top line */}
              <div className="mb-6 h-[3px] w-12 bg-[#11633A]" />

              <h2 className="mb-3 text-3xl font-black text-gray-900">
                Contact Information
              </h2>
              <p className="mb-8 text-[14px] leading-relaxed text-gray-500">
                It is a long established fact that a reader be by the readable distracted layout.
              </p>

              {/* Address + Contact row */}
              <div className="mb-8 grid grid-cols-2 gap-6">

                {/* Address */}
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#11633A]">
                    Address
                  </p>
                  <div className="mb-3 h-[2px] w-8 bg-[#11633A]" />
                  <p className="text-[14px] font-bold leading-relaxed text-gray-900">
                    Unit 1 Hedley Ave<br />
                    Grays RM20 4EL<br />
                    United Kingdom
                  </p>
                </div>

                {/* Contact */}
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#11633A]">
                    Contact
                  </p>
                  <div className="mb-3 h-[2px] w-8 bg-[#11633A]" />
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Phone:</p>
                  <p className="mb-4 text-[15px] font-bold text-gray-900">07477 733313</p>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Email:</p>
                  <p className="text-[14px] font-bold text-gray-900">sales@rangerovergarage.co.uk</p>
                </div>

              </div>

              {/* Opening Hours */}
              <div>
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#11633A]">
                  Opening Hours
                </p>
                <div className="mb-4 h-[2px] w-8 bg-[#11633A]" />
                <p className="mb-2 text-[14px] text-gray-900">
                  Monday - Friday: <strong className="font-bold">9:00 AM - 6:00 PM</strong>
                </p>
                <p className="mb-2 text-[14px] text-gray-900">
                  Saturday: <strong className="font-bold">7:00 AM - 1:00 PM</strong>
                </p>
                <p className="text-[14px] font-bold text-gray-900">
                  Sunday: <span className="text-red-500">Closed</span>
                </p>
              </div>

            </div>

            {/* Right — map */}
            <div className="flex-1">
              <iframe
                src={mapsEmbedUrl}
                className="h-full w-full"
                style={{ minHeight: "420px", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Range Rover Garage Location"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
