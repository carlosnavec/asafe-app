"use client"

import Image from 'next/image';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import Link from 'next/link';
import Head from 'next/head';
import usePhotos from './hooks/usePhotos';


const PhotoList: React.FC = () => {
  const { photos, loading, error } = usePhotos();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const Row: React.FC<ListChildComponentProps> = ({ index, style }) => (
    <div
      style={style}
      className="flex flex-col md:flex-col items-center p-4 border-b border-gray-200"
    >
        <Image
          src={photos[index].thumbnailUrl}
          alt={photos[index].title}
          width={150}
          height={150}
          className="mb-2"
        />
      <h2 className="text-center text-sm md:text-lg lg:text-xl font-bold truncate w-full">{photos[index].title}</h2>
    </div>
  );

  return (
    <>
    <Head>
        {photos.slice(0, 5).map(photo => (
          <Link
            key={photo.id}
            rel="preload"
            href={photo.thumbnailUrl}
            as="image"
          />
        ))}
      </Head>
      <List
      height={600}
      itemCount={photos.length}
      itemSize={220}
      width="100%"
    >
      {Row }
    </List>
    </>
    
  );
};

export default PhotoList;