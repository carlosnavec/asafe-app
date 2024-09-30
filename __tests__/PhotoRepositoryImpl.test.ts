import { PhotoRepositoryImpl } from '../src/app/dashboard/photo/infrastructure/PhotoRepositoryImpl';
import { Photo } from '../src/app/dashboard/photo/domain/Photo';

describe('PhotoRepositoryImpl', () => {
  let photoRepository: PhotoRepositoryImpl;

  beforeEach(() => {
    photoRepository = new PhotoRepositoryImpl();
  });

  it('should throw an error if the API URL is empty or null', async () => {
    process.env.API_URL_PHOTOS = '';
    await expect(photoRepository.getPhotos()).rejects.toThrow('Invalid API URL');
  });

  it('should return data if the API URL is valid', async () => {
    process.env.API_URL_PHOTOS = 'https://jsonplaceholder.typicode.com/photos';
    const photos: Photo[] = await photoRepository.getPhotos();
    expect(photos).not.toBeUndefined();
    expect(photos.length).toBeGreaterThan(0);
  });
});