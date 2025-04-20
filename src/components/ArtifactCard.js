import agaseke from '../assets/Agaseke.jpeg';
import igisabo from '../assets/Igisabo.jpeg';
import umugara from '../assets/umugara.jpg';
import amayugi from '../assets/AMAYUGI.jpeg';
import umwirongi from '../assets/umwirongi.jpg';
import ikondera from '../assets/Ikondera.jpg';
import ibitako from '../assets/Ibitako.webp';
import imigongo from '../assets/IMIGONGO.jpg';
import ingomakaringa from '../assets/Kalinga.jpg';
import inanga from '../assets/inanga.jpg';

const imageMap = {
  'AGASEKE': agaseke,
  'IGISABO': igisabo,
  'UMUGARA': umugara,
  'AMAYUGI': amayugi,
  'UMWIRONGI': umwirongi,
  'IKONDERA': ikondera,
  'IBITAKO': ibitako,
  'IMIGONGO': imigongo,
  "INGOMA 'KARINGA'": ingomakaringa,
  'INANGA': inanga
};

function ArtifactCard({ title, description }) {
  const imageSrc = imageMap[title] || ''; // Fallback to empty string if no image found

  return (
    <div className="bg-orange-500 p-6 rounded-lg flex items-center space-x-4">
      <div className="w-1/3">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="h-40 w-full object-cover rounded"
          />
        ) : (
          <div className="h-40 w-full bg-gray-300 rounded flex items-center justify-center">
            <span className="text-gray-600">Image Not Found</span>
          </div>
        )}
      </div>
      <div className="w-2/3">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

export default ArtifactCard;