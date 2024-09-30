import { Chart, ChartTypeRegistry, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js/auto';
import { useEffect, useRef } from "react";

export interface ChartProps {
  type: keyof ChartTypeRegistry;
  label: string;
  productNames: string[];
  dataSets: any[];
  backgroundColor?: string;
  borderColor?: string
  borderWidth?: number
}

export const CustomChart = ({
  type,
  label,
  productNames,
  dataSets,
  backgroundColor,
  borderColor,
  borderWidth
}: ChartProps) => {

  const customBackgroundColor = backgroundColor ? backgroundColor  : 'rgba(75, 192, 192, 0.2)';
  const customColor = borderColor ? borderColor : 'rgba(75, 192, 192, 1)';
  const chartContainerRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartContainerRef.current && dataSets.length > 0) {
      const ctx = chartContainerRef.current.getContext('2d');
      if (ctx) {
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        chartRef.current = new Chart(ctx, {
          type: type,
          data: {
            labels: productNames,
            datasets: [
              {
                label,
                data: dataSets,
                backgroundColor: customBackgroundColor,
                borderColor: customColor ,
                borderWidth: borderWidth ? borderWidth : 1,
              },
            ],
          },
          options: {
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [dataSets]);

  return <canvas ref={chartContainerRef} className="w-full h-96" />;
};


