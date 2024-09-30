import { Product } from "app/dashboard/products/domain/Product";

export interface TableProps {
  headers: string[];
  products: Product[];
}


export const Table = ({
  headers,
  products,
}: TableProps) => {

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl md:text-2xl font-bold mb-4">Products List</h1>
      {/* <ProductChart products={products} /> */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
            {headers.map((header, index) => (
                <th key={index}
                className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">{header}</th>
            ))}
            </tr>
          </thead>
            <tbody>
            {products.map((product, index) => (
                <tr key={index} className="hover:bg-gray-100 text-center">
                <td className="px-4 py-2 text-xs md:text-sm">{product.name}</td>
                <td className="px-4 py-2 text-xs md:text-sm">{product.usage}</td>
                <td className="px-4 py-2 text-xs md:text-sm">{product.impact_resistance}</td>
                <td className="px-4 py-2 text-xs md:text-sm">{product.visibility}</td>
                <td className="px-4 py-2 text-xs md:text-sm">{product.material}</td>
                <td className="px-4 py-2 text-xs md:text-sm">${product.cost}</td>
                <td className="px-4 py-2 text-xs md:text-sm">{product.durability_years}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;


