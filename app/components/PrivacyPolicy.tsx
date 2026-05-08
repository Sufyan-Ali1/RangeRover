import Navbar from "@/app/components/Navbar";
import { privacyPolicy } from "@/app/data/legal";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-white">
        <div className="mx-auto w-full max-w-[1728px] px-6 py-12 sm:px-10 sm:py-16 xl:px-[101px]">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            {privacyPolicy.title}
          </h1>

          <div className="space-y-12">
            {privacyPolicy.sections.map((section, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <div className="w-16 h-1 bg-[#4CA66B] mb-6" />
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-[15px]">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
