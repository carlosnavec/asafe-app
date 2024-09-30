import { Photo } from '../domain/Photo';
import { PhotoRepository } from '../domain/PhotoRepository';

export class GetPhotosUseCase {
  constructor(private photoRepository: PhotoRepository) {}

  async execute(): Promise<Photo[]> {
    return this.photoRepository.getPhotos();
  }
}