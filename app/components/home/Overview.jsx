export default function Overview() {
  return (
    <div className="w-full min-h-[450px] px-4 sm:px-8 md:px-16 lg:px-28 py-8 md:py-16">
      <div className="h-full flex flex-col lg:flex-row gap-8 lg:gap-0">
        {/* Content Section */}
        <div className="w-full lg:w-4/7 py-6 md:py-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Event Overview
          </h1>
          <h2 className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl font-bold leading-tight">
            Celebrating 150 Years of Richmond — Building Our Future Together
          </h2>
          <p className="mt-3 md:mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            As part of the Richmond College 150th Anniversary celebrations, this
            digital raffle aims to unite our global community and raise LKR 25
            million to support the development of college sports,
            infrastructure, and extra-curricular activities.
          </p>
          <div className="mt-4 md:mt-6 space-y-2">
            <p className="text-sm sm:text-base">
              <span className="font-medium">Date of draw:</span> December 31,
              2026
            </p>
            <p className="text-sm sm:text-base">
              <span className="font-medium">Target audience:</span> Students,
              Old Boys, Parents, Teachers, Well-wishers
            </p>
          </div>
        </div>

        {/* Image/Media Section */}
        <div className="w-full lg:w-3/7 lg:pl-16 xl:pl-28">
          <div className="bg-gray-500 w-full h-64 sm:h-80 md:h-96 lg:h-full min-h-[250px] rounded-lg">
            {/* Placeholder for image/media content */}
          </div>
        </div>
      </div>
    </div>
  );
}
