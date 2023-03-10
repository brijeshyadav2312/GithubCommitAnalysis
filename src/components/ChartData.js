import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ChartData = ({ item }) => {
    const[chartData,setChartdata] = useState([]);

    async function getData(){
        const res = await fetch(`https://api.github.com/repos/${item.owner.login}/${item.name}/stats/participation`);
        const data = await res.json();
        setChartdata(data)
      }
  
      useEffect(() =>{
        getData();
      },[])

  const options = {

    title: {
        text: 'Weekly Commit Count',
        align: 'left'
    },

    subtitle: {
        text: 'Source: <a href="https://docs.github.com/en/rest/metrics/statistics?apiVersion=2022-11-28#get-the-weekly-commit-count" target="_blank">GITHUB</a>',
        align: 'left'
    },

    yAxis: {
        title: {
            text: 'Commit'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 1 to 200'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1
        }
    },

    series: [{
        name: 'All',
        data: chartData.all
    }, {
        name: 'owner',
        data: chartData.owner
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

}
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ChartData;
