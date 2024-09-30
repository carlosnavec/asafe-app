import { Photo } from '../domain/Photo';
import { PhotoRepository } from '../domain/PhotoRepository';

export class PhotoRepositoryImpl implements PhotoRepository {
  async getPhotos(): Promise<Photo[]> {
    const apiUrlPhotos = process.env.API_URL_PHOTOS as string;
    if (!apiUrlPhotos) {
      throw new Error('Invalid API URL');
    }
    const response = await fetch(apiUrlPhotos);
    const data = await response.json();
    return data;
  }
}