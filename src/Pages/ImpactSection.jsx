import { FaHeart, FaLanguage, FaUsers,FaUserTimes,FaChartLine } from 'react-icons/fa';

const ImpactSection = () => {
  return (
    <>
    <section className="bg-white py-8 md:px-8 lg:px-8">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-800 mb-2">
            <span className='text-red-600'>Blood Cancer</span> Crisis in Pakistan          </h2>
          <p className="text-gray-600 mb-6 text-base text-center md:text-lg leading-relaxed">
            Every year, thousands of patients struggle to find donors. The situation is dire, and awareness remains low.
          </p>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
      {/* Blood Cancer Statistics Section */}
<div className="space-y-8">
  <div className="text-center md:text-left">
    <h2 className="text-3xl font-bold text-gray-900 mb-2">
      The <span className="text-red-600">Harsh Reality</span> in Pakistan
    </h2>
    <p className="text-gray-600 max-w-2xl">
      Blood cancer patients face unique challenges in our region. Here's why we need immediate action:
    </p>
  </div>

  <div className="space-y-6">
    <StatCard 
      label="72%" 
      title="No Matched Donors" 
      desc="Most patients can't find a family match and rely on unrelated donors."
      icon={<FaUserTimes className="text-red-500" />}
    />
    <StatCard 
      label="3x" 
      title="Higher Mortality Rate" 
      desc="Compared to developed countries due to late diagnosis and treatment."
      icon={<FaChartLine className="text-amber-500" />}
    />
    <StatCard 
      label="0.01%" 
      title="Registry Participation" 
      desc="Compared to 2% in Western countries - we need more donors."
      icon={<FaUsers className="text-blue-500" />}
    />
  </div>
</div>

        {/* RIGHT: Cultural Awareness */}
     <div className="bg-red-50 rounded-2xl p-8 md:p-10 shadow-md">
  <h3 className="text-2xl font-semibold text-red-700 mb-6">
    Cultural Awareness & Progress
  </h3>

  <ul className="space-y-5">
    <FeatureItem
      icon={<FaHeart className="text-red-600 text-xl" />}
      title="Religious Endorsements"
      desc="Fatwas from trusted scholars encourage stem cell donation."
    />
    <FeatureItem
      icon={<FaLanguage className="text-red-600 text-xl" />}
      title="Local Language Advocacy"
      desc="Educational programs in Urdu, Pashto, and Sindhi."
    />
    <FeatureItem
      icon={<FaUsers className="text-red-600 text-xl" />}
      title="Women's Participation"
      desc="Empowering female voices in donation drives."
    />
  </ul>

  {/* PDF Download Button */}
  <div className="mt-8 text-center">
    <a
      href="/Assets/Images/Documents/Fatwa_Hopecell.pdf"
      download
      className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
    >
      Download Fatwa Certificate (PDF)
    </a>
  </div>
</div>
      </div>
           
    </section>
 
    </>
  );
};

// ✅ Small reusable card for stats
const StatCard = ({ label, title, desc }) => (
  <div className="flex items-start space-x-4">
    <div className="text-red-600 font-bold text-3xl">{label}</div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  </div>
);

// ✅ Reusable feature item
const FeatureItem = ({ icon, title, desc }) => (
  <li className="flex items-start space-x-4">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h4 className="text-base font-semibold">{title}</h4>
      <p className="text-sm text-red-700">{desc}</p>
    </div>
  </li>
);

export default ImpactSection;
