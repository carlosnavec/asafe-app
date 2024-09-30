"use client"
import ProductChart from './products/components/ProductChart';
import ProductList from './products/components/ProductList';

function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-4 rounded shadow">
        <ProductList/>
        <ProductChart/>
      </div>
    </div>
  );
}

export default DashboardPage;