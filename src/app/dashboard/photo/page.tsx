import PhotoList from '../photo/components/PhotoList';

const PhotosPage: React.FC = () => {
  return (
    <div className='p-8'>
      <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
      <PhotoList />
    </div>
  );
};

export default PhotosPage;