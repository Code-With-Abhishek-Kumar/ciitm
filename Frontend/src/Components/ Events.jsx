import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Mini_Components/AlbumCard';

const Events = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await axios.get('/admin/album');
        setAlbums(res.data);

        if (res.data.error) {
          setError(res.data.message);
        } else {
          setError(null);
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="album__Container w-screen h-[68vh] bg-blue-600 flex flex-col p-8">
      <h1 className="album__Title text-white text-3xl text-center m-6">
        Albums
      </h1>
      {albums.length > 0 ? (
        <div className="flex h-4/5">
          {albums.map(album => (
            <Card
              key={album.__v} // Ensure this is a unique identifier
              Album__Title={album.aName}
              Album__Image={album.aImage}
            />
          ))}
        </div>
      ) : (
        <div>No albums found.</div>
      )}
    </div>
  );
};

export default Events;
