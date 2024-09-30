import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js/auto';
import { ChartProps, CustomChart } from 'stories/chart/CustomChart';
import useProducts from './hooks/useProducts';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ProductChart: React.FC = () => {

  const products = useProducts();

  const resistanceChartProps: ChartProps = {
    type: 'bar',
    label: 'Impact Resistance',
    productNames: products.map(product => product.name),
    dataSets: products.map(product => product.impact_resistance),  
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
  };

  const visibilityChartProps: ChartProps = {
    type: 'line',
    label: 'Visibility',
    productNames: products.map(product => product.name),
    dataSets: products.map(product => product.visibility),  
    backgroundColor: 'rgba(75, 8, 192, 0.2)',
  };

  

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-1/2 p-2 flex items-center justify-center">
        <CustomChart {...resistanceChartProps} />
      </div>
      <div className="w-full md:w-1/2 p-2 flex items-center justify-center">
        <CustomChart {...visibilityChartProps} />
      </div>
    </div>
  )
};

export default ProductChart;