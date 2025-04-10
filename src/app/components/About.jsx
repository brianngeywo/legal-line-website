import DelayedFadeIn from "../effects/DelayedFadeIn";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-4">
            About Legal Line
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-green-700 mx-auto"></div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:min-h-[400px]">
          {/* Image Section */}
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0 sm:pr-8 h-[300px] sm:h-[400px]">
            <img
              src="/images/lawyer.jpg"
              alt="About Legal Line"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full sm:w-1/2">
            <h3 className="text-xl sm:text-2xl font-semibold text-green-800 mb-4">
              Our Story
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Legal Line was founded in 2015 with a mission to provide
              accessible and professional legal services to the people of South
              Sudan. Our team of experienced attorneys is committed to upholding
              the highest standards of legal practice.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With offices in Juba and a network of legal professionals across
              the country, we are well-positioned to serve clients from all
              regions of South Sudan.
            </p>

            {/* Mission & Vision Cards */}
            <DelayedFadeIn delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-green-50 p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-green-800 mb-2">Mission</h4>
                  <p className="text-gray-700">
                    To deliver exceptional legal services with integrity and
                    professionalism.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-green-800 mb-2">Vision</h4>
                  <p className="text-gray-700">
                    To be the leading legal service provider in South Sudan.
                  </p>
                </div>
              </div>
            </DelayedFadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
