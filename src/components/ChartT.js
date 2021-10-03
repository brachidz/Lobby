import React from 'react';
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import moment from 'moment';

import './chart.css'




export default function ApexChart() {
  const UpdatedData = useSelector(state => state.staticDetailsReducer);
  console.log(UpdatedData);
  let currentYear = moment().format("YYYY")
  const state = {
    series: [

      {
        name: "Contacts",
        data: [UpdatedData.contacts[1], UpdatedData.contacts[2], UpdatedData.contacts[3], UpdatedData.contacts[4], UpdatedData.contacts[5], UpdatedData.contacts[6], UpdatedData.contacts[7], UpdatedData.contacts[8], UpdatedData.contacts[9], UpdatedData.contacts[10], UpdatedData.contacts[11], UpdatedData.contacts[12]]
      },
      {
        name: "Papers",
        data: [UpdatedData.papers[1], UpdatedData.papers[2], UpdatedData.papers[3], UpdatedData.papers[4], UpdatedData.papers[5], UpdatedData.papers[6], UpdatedData.papers[7], UpdatedData.papers[8], UpdatedData.papers[9], UpdatedData.papers[10], UpdatedData.papers[11], UpdatedData.papers[12]]
      },

      {
        name: "Deals",
        data: [UpdatedData.projects[1], UpdatedData.projects[2], UpdatedData.projects[3], UpdatedData.projects[4], UpdatedData.projects[5], UpdatedData.projects[6], UpdatedData.projects[7], UpdatedData.projects[8], UpdatedData.projects[9], UpdatedData.projects[10], UpdatedData.projects[11], UpdatedData.projects[12]]
      },
      {
        name: "Tasks",
        data: [UpdatedData.tasks[1], UpdatedData.tasks[2], UpdatedData.tasks[3], UpdatedData.tasks[4], UpdatedData.tasks[5], UpdatedData.tasks[6], UpdatedData.tasks[7], UpdatedData.tasks[8], UpdatedData.tasks[9], UpdatedData.tasks[10], UpdatedData.tasks[11], UpdatedData.tasks[12]]
      }

    ],
    options: {

      title: {
        text: `Total Year ${currentYear}`,
        align: 'center',
        margin: 15,
        floating: false,
        style: {
          fontSize: '12px',
          fontWeight: 'bold',
          fontFamily: undefined,
          color: '#263238',
          textAlign: 'center',
        },
      },
      legend: {
        show: false,
      },
      scales: {
      },
      colors: ['rgb(221, 162, 4)', 'rgb(14, 186, 165)', 'rgb(103, 114, 222)', 'rgb(253, 36, 67)'],

      chart: {
        background: '#fff',
        zoom: { enabled: false },
        height: 350,
        type: "line",
        stacked: false,
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        show: false,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false
          }
        },
      },
      stroke: {
        curve: 'smooth',
        width: 1,
      },
      xaxis: {
        categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      },
    },
  };
  return (
    <div id="chart" className="return-chart">
      {UpdatedData.leaderStatic.sumDeals}
      <ReactApexChart options={state.options} series={state.series} type="line" height="110%" width="88%" />
    </div>
  );

}
