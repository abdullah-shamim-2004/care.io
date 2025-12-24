const About = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold">
            Caring for Families, Like Our Own
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our platform was created with one simple mission —
            <span className="font-semibold">
              {" "}
              to make trusted caregiving accessible for every family.
            </span>
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether it’s baby care, elderly assistance, or caring for a sick
            loved one, we connect families with verified, trained, and
            compassionate caregivers who truly care.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We believe caregiving is not just a service — it’s a responsibility.
            That’s why safety, trust, and dignity are at the heart of everything
            we do.
          </p>

          <div className="flex gap-4 pt-4">
            <a href="/services" className="btn btn-primary">
              Explore Services
            </a>
            <a href="/about" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>

        {/* Right Stats / Values */}
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-base-200 rounded-xl text-center shadow-sm">
            <h3 className="text-3xl font-bold text-primary">100%</h3>
            <p className="text-sm text-gray-600 mt-1">Verified Caregivers</p>
          </div>

          <div className="p-6 bg-base-200 rounded-xl text-center shadow-sm">
            <h3 className="text-3xl font-bold text-primary">24/7</h3>
            <p className="text-sm text-gray-600 mt-1">Care Availability</p>
          </div>

          <div className="p-6 bg-base-200 rounded-xl text-center shadow-sm">
            <h3 className="text-3xl font-bold text-primary">Trusted</h3>
            <p className="text-sm text-gray-600 mt-1">By Families</p>
          </div>

          <div className="p-6 bg-base-200 rounded-xl text-center shadow-sm">
            <h3 className="text-3xl font-bold text-primary">Care+</h3>
            <p className="text-sm text-gray-600 mt-1">With Heart</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
