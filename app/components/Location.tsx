export default function Location() {
  const mapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42627.347792855464!2d0.3158840742122115!3d51.46191600322437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b76dba1fd2e1%3A0xf0dc09e9187bf7f8!2sRange%20Rover%20Garage!5e0!3m2!1sen!2suk!4v1778589373205!5m2!1sen!2suk";
  const phoneNumber = "07477 733313";
  const phoneHref = "tel:07477733313";
  const emailAddress = "sales@rangerovergarage.co.uk";

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
        Our fully equipped workshop in Grays, Essex serves customers across London, the South East,<br className="hidden sm:block" /> and the whole of the UK — with free nationwide collection and delivery available.
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
                Visit our specialist workshop in Grays, Essex. We welcome walk-ins and pre-booked appointments for all Range Rover and Land Rover engine enquiries.
              </p>

              {/* Address + Contact row */}
              <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">

                {/* Contact */}
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#11633A]">
                    Contact
                  </p>
                  <div className="mb-3 h-[2px] w-8 bg-[#11633A]" />
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Phone:</p>
                  <a href={phoneHref} className="mb-4 block text-[15px] font-bold text-gray-900 transition hover:text-[#11633A]">
                    {phoneNumber}
                  </a>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Email:</p>
                  <a href={`mailto:${emailAddress}`} className="block text-[14px] font-bold text-gray-900 transition hover:text-[#11633A]">
                    {emailAddress}
                  </a>
                </div>

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
            <div className="min-h-[420px] flex-1 lg:min-h-0 lg:w-1/2">
              <iframe
                src={mapsEmbedUrl}
                className="h-[420px] w-full lg:h-full"
                style={{ border: 0 }}
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
