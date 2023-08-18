interface InputProps {
  className?: string;
}

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { DropDownIcon } from "../../../../assets/icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineChart = ({ className }: InputProps) => {
  return (
    <>
      <div className={`${className} my-12`}>
        <div className="md:flex justify-between">
          <div>
            <p>Inflow</p>
            <p className="text-[#219653] font-bold text-[14px] md:text-[24px]">N1,567,552</p>
          </div>
          <div>
            <p >Outflow</p>
            <p className="text-[#EF4444] font-bold text-[14px] md:text-[24px]">N1,567,552</p>
          </div>
          <p className="flex items-center md:justify-center gap-2">Inflow/Outflow <span><DropDownIcon width={16} className="cursor-pointer w-[12px] md:w-[16px]"/></span></p>
        </div>
        <Line
          data={{
            labels: [
              "JAN",
              "FEB",
              "MAR",
              "APR",
              "MAY",
              "JUN",
              "JUL",
              "AUG",
              "SEP",
              "OCT",
              "NOV",
              "DEC",
            ],
            datasets: [
              {
                label: "Dataset 1",
                data: [12, 34, 56, 102, 676, 98, 46, 461, 576.981, 746, 423],
                borderColor: "rgba(33, 150, 83, 1)",
                backgroundColor: "rgba(33, 150, 83, 1)",
                tension: 0.5,
                borderWidth: 4,
              },
              {
                label: "Dataset 2",
                data: [105, 134, 156, 12, 676, 8, 26, 465, 398, 645],
                borderColor: "rgba(239, 68, 68, 0.45)",
                backgroundColor: "rgba(239, 68, 68, 0.45)",
                tension: 0.5,
                borderWidth: 4,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                font: { size: 25 },
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: true,
                },
              },
            },
          }}
        />
      </div>
    </>
  );
};
