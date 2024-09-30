import { useState, useEffect } from 'react';
import { GetPhotosUseCase } from '../../application/GetPhotosUseCase';
import { PhotoRepositoryImpl } from '../../infrastructure/PhotoRepositoryImpl';
import { Photo } from '../../domain/Photo';

const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const getPhotosUseCase = new GetPhotosUseCase(new PhotoRepositoryImpl());
        const photos = await getPhotosUseCase.execute();
        setPhotos(photos);
      } catch (error){
        console.error(error);
        setError('Failed to fetch photos');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { photos, loading, error };
};

export default usePhotos;