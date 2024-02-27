// // CompletedTasksChart.js
// import React, { useEffect } from 'react';
// import ApexCharts from 'apexcharts';
// import { TbProgressCheck } from "react-icons/tb";

// const CompletedTasksChart = ({ completedTasks, totalTasks }) => {
//   const calculateProgress = () => {
//     if (totalTasks === 0) {
//       return 0; // To handle division by zero
//     }
//     return (completedTasks / totalTasks) * 100;
//   };

//   const getChartColors = (progress) => {
//     // Customize colors based on your preference
//     const completedColor = "#008FFB"; // Green for completed
//     const nonCompletedColor = "#00E396"; // Red for non-completed

//     // Calculate the percentage of the non-completed tasks
//     const nonCompletedProgress = 100 - progress;

//     // Return an array of colors for each segment
//     return [completedColor, nonCompletedColor];
//   };

//   useEffect(() => {
//     const progress = calculateProgress();
//     const colors = getChartColors(progress);

//     const options = {
//       series: [progress, 100 - progress],
//       chart: {
//         width: 380,
//         type: 'pie',
//       },
//       labels: ['Completed Tasks', 'Non-Completed Tasks'],
//       responsive: [{
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200
//           },
//           legend: {
//             position: 'bottom'
//           }
//         }
//       }],
//       fill: {
//         colors: colors,
//       },
//     };

//     const chart = new ApexCharts(document.querySelector("#completedTasksChart"), options);
//     chart.render();

//     // Cleanup the chart when the component unmounts
//     return () => {
//       chart.destroy();
//     };
//   }, [completedTasks, totalTasks]);

//   return (
//     <div>
//         <div className='flex items-center gap-1'>
//         {/* <TbProgressCheck className=''/> */}
//         </div>
//       <div id="completedTasksChart"></div>
//     </div>
//   );
// };

// export default CompletedTasksChart;

import React from 'react';

const CompletedTasksChart = () => {
  return (
    <div>
      charts
    </div>
  );
};

export default CompletedTasksChart;
