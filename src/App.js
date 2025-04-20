import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ArtifactCard from './components/ArtifactCard';
import Footer from './components/Footer';

// Import images for Home page
import heroBg from './assets/HOME.jpeg';
import inkeraguama from './assets/INKERARUGAMBA.jpeg';
import imbonezamakuza from './assets/IMBONEZMAKUZA.jpeg';
import ngombwamubacu from './assets/NGOMBWA.jpg';
import ingeriyasumbyeinyko from './assets/INGERIYASUMBYEINKIKO.jpeg';
import imbonezamyambi from './assets/IMBONEZAMYAMBI.jpeg';
import ikibyangiryambo from './assets/INYAMBO n I rwanda.jpeg';

// Import image for About page


// Home Page Component
function Home() {
  const featuredExhibits = [
    {
      title: "INKERARUGAMBA",
      image: inkeraguama
    },
    {
      title: "IMBONEZAMAKUZA",
      image: imbonezamakuza
    },
    {
      title: "NGOMBWA MU BACU",
      image: ngombwamubacu
    },
    {
      title: "INGERI YASUMBYE INKIKO",
      image: ingeriyasumbyeinyko
    },
    {
      title: "IMBONEZAMYAMBI",
      image: imbonezamyambi
    },
    {
      title: "IKIBYAGIRANYAMBO",
      image: ikibyangiryambo
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">WELCOME TO PAST & PIXELS MUSEUM</h1>
          <Link to="/artifacts">
            <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-600">
              Explore the Museum
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Exhibits Section */}
      <section className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-orange-500 py-2 text-white">FEATURED EXHIBITS TO EXPLORE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredExhibits.map((exhibit, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={exhibit.image}
                alt={exhibit.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold text-center">{exhibit.title}</h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/artifacts">
            <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-600">
              VIEW ALL
            </button>
          </Link>
        </div>
      </section>

      {/* Magical Story Section (Partial) */}
      <section className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">THE MAGICAL STORY OF PAST & PIXELS MUSEUM</h2>
        {/* Additional content can be added here as per the Figma design */}
      </section>
    </div>
  );
}

// Artifacts Page Component
function Artifacts() {
  const artifacts = [
    {
      title: "AGASEKE",
      description: "The Agaseke is a traditional woven basket typically used in Rwanda, where cultural secrecy keeping and solidarity. This painting reflects the integrity of Rwandans: whenever a relative, a friend or a neighbor has a ceremony, the basket is used to carry gifts as a sign of support and unity."
    },
    {
      title: "IGISABO",
      description: "In Rwandan culture, 'igisabo' refers to a gourd, typically used for storing liquid, especially milk and its derivatives like butter or ghee. It’s also used to ferment milk in kivuguto, a traditional fermented milk product. Igisabo are often wrapped in banana fibers, and are often used to show hospitality and nourishment in Rwandan society."
    },
    {
      title: "UMUGARA",
      description: "In Rwandan culture, 'Umugara' refers to the headdress worn by intore dancers, the chosen ones, and is a symbol of the elite status and accomplishment of the dancers. It’s often adorned with flowing fibers from banana heart or sisal, creating a dramatic wave during performances, and is similar in design to the kings crown."
    },
    {
      title: "AMAYUGI",
      description: "In Rwandan culture, AMAYUGI are small bells that are traditionally worn by intore dancers on their ankles. The bells create a rhythmic beat during the intore dance, which celebrates victory and showcases Rwandan heritage. Intore dancers, known as the chosen ones, represent the elite and are trained in a specific institution called itorero."
    },
    {
      title: "UMWIRONGI",
      description: "In Rwandan culture, 'umwirongi' refers to a traditional wind instrument, a type of flute, that is often played by herders. It’s made from natural materials like specific plant stems or wood and produces a melodic sound. Umwirongi is used to accompany herding activities, storytelling, and cultural ceremonies."
    },
    {
      title: "IKONDERA",
      description: "In Rwandan culture, 'ikondera' refers to a traditional ensemble of musical instruments, primarily horns and drums, used in various ceremonies and celebrations. It’s a generic term encompassing instruments like umurangi, inkorogane, urugunda, inanka, and insengo horns, as well as drums like ruharage and ingarabara. The ikondera is often played in honor of important people or to accompany intore dancers."
    },
    {
      title: "IBITAKO",
      description: "In Rwandan culture, 'ibitako' refers to a set of beaded ornaments worn by intore dancers across their shoulders or torso. These ornaments are considered part of the intore costume and symbolize proper adornment, and are believed to offer protection, according to Rwandan tradition."
    },
    {
      title: "IMIGONGO",
      description: "A distinctively Rwandan craft is the Imigongo or cow dung paintings that are produced by a local co-operative in the village of Nyakarambi near the border with Tanzania. Dominated by black, brown and white whirls and other geometric shapes, these unique and earthy artworks can be bought in craft markets throughout the country."
    },
    {
      title: "INGOMA 'KARINGA'",
      description: "In Rwandan history, 'Ingoma ya Karinga' (Karinga drum) is a sacred drum that represents the king and the male power in the Rwandan monarchy. The karinga, one of the most important ingoma (drums), symbolizes the king, the male sex, and Rwandan domination. It was believed to have originated with Ruganzu II Ndori (1590-1617) and was used in various ceremonies and to signal important events, including death sentences."
    },
    {
      title: "INANGA",
      description: "The inanga, the traditional Rwandan musical instrument, holds significant historical and cultural importance in Rwandan society. It’s a trough-zither, a stringed instrument with a flat soundboard and concave sides. The inanga’s history is intertwined with Rwandan culture, music, and even politics, serving as a tool for storytelling, celebrations, and even incitement to conflict."
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">ARTIFACTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {artifacts.map((artifact, index) => (
          <ArtifactCard
            key={index}
            title={artifact.title}
            description={artifact.description}
          />
        ))}
      </div>
    </div>
  );
}

// About Page Component
function About() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">ABOUT US</h1>
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-8">
          {/* Who We Are */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg">
              Welcome to Past & Pixels, a cutting-edge digital platform designed to preserve, showcase, and celebrate Rwandan culture and heritage through immersive technology. We blend history, art, and innovation to create an interactive experience where users can explore Rwanda’s rich traditions, historical sites, and artistic expressions in a futuristic digital environment.
            </p>
          </div>

          {/* Our Mission */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              Our mission is to digitally preserve Rwandan heritage while making it more accessible to people around the world. We aim to create a space where users can interact with Rwandan art, historical artifacts, and cultural stories using advanced technologies like Virtual Reality (VR), Augmented Reality (AR), and interactive 3D environments.
            </p>
          </div>

          {/* What We Offer */}
          <div>
            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <ul className="space-y-2 text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <span>Explore Rwandan Art & History – Navigate through digital galleries showcasing traditional Imigongo art, ancient artifacts, and historical sites like the King’s Palace Museum.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <span>Interactive Learning Experiences – Engage with Rwandan cultural stories through interactive features, allowing users to experience history as if they were there.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <span>Create & Share Art – Users can create digital art inspired by Rwandan traditions, blending past and future artistic expressions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <span>Immersive Virtual Spaces – Step into a 3D digital world where Rwanda’s culture comes alive with animated sculptures, storytelling experiences, and historical recreations.</span>
              </li>
            </ul>
          </div>

          {/* Why It Matters */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Why It Matters</h2>
            <p className="text-lg mb-2">
              Rwanda has a deep and powerful cultural history that deserves to be preserved and shared with future generations. This project aims to:
            </p>
            <ul className="space-y-2 text-lg list-disc list-inside">
              <li>Keep Rwandan traditions alive in the digital age.</li>
              <li>Provide an engaging way for people (both locals and foreigners) to learn about Rwandan history.</li>
              <li>Support artists, historians, and cultural enthusiasts by offering them a digital space to contribute and explore.</li>
            </ul>
          </div>

          {/* Our Vision */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg">
              We believe in a future where technology bridges the gap between history and innovation. Our goal is to expand this platform by integrating AI-powered experiences, deeper historical recreations, and user-generated content—ensuring that Rwandan culture thrives in the digital era.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          
        </div>
      </div>
    </div>
  );
}

// Contact Page Component
function Contact() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">CONTACT US</h1>
      <p className="text-center text-lg mb-4">
        Email: ishjoe2001@gmail.com
      </p>
      <p className="text-center text-lg mb-4">
        Phone: +250 738371245
      </p>
      <p className="text-center text-lg">
        Address: Kigali, Rwanda
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artifacts" element={<Artifacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;