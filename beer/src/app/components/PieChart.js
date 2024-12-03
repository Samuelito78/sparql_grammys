import Chart from 'chart.js/auto';
import { useEffect, useRef, useState } from "react";

export default function PieChart({ jsonData }) {
    const chartRef = useRef(null);
    const [chartType, setChartType] = useState("bar");

    useEffect(() => {
        if (!jsonData) return;

        const { labels, data } = processChartData(jsonData);

        const existingChart = Chart.getChart(chartRef.current);
        if (existingChart) {
            existingChart.destroy();
        }

        new Chart(chartRef.current, {
            type: chartType,
            data: {
                labels,
                datasets: [
                    {
                        label: "Winning Genres",
                        data,
                        backgroundColor: generateColors(labels.length),
                        hoverOffset: 4,
                    },
                ],
            },
            // options: {
            //     layout: {
            //         padding: {
            //             top: chartRef.current.clientHeight * 0.50,
            //             bottom: chartRef.current.clientHeight * 0.35,
            //             left: chartRef.current.clientWidth * 0.50,
            //             right: chartRef.current.clientWidth * 0.50,
            //         },
            //     },
            // },
        });
    }, [jsonData, chartType]); // update if `jsonData` or `chartType` change

    const toggleChartType = () => {
        setChartType((prevType) => (prevType === "bar" ? "pie" : "bar"));
    };

    return (
        <>
            <button
                className="chart-type"
                onClick={toggleChartType}
            >
                {chartType === "bar" ? "Pie" : "Bar"}
            </button>
            <canvas ref={chartRef}></canvas>
        </>
    );
}

const processChartData = (jsonData) => {
    const labels = [];
    const data = [];

    jsonData.results.bindings.forEach((item) => {
        labels.push(item.wikidataGenreLabel.value);
        data.push(parseInt(item.genreCount.value, 10));
    });

    return { labels, data };
};

const generateColors = (count) =>
    Array.from({ length: count }, () => `hsl(${Math.random() * 360}, 70%, 60%)`);
