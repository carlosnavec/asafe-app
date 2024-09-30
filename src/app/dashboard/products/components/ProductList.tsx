import Table from 'stories/table/Table';
import useProducts from './hooks/useProducts';



const ProductList: React.FC= () => {
  const products = useProducts();

  return (
    <>
      <Table headers={['Name', 'Usage', 'Impact Resistance', 'Visibility', 'Material', 'Cost', 'Durability Years']} 
        products={products} />
      {/* <ProductChart products={products} /> */}
    </>
      
     
  );
};

export default ProductList;