import Chart from 'chart.js/auto';
import { useEffect, useRef } from "react";

export default function PieChart({ jsonData }) {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!jsonData) return;

        const { labels, data } = processChartData(jsonData);

        const chart = new Chart(chartRef.current, {
            type: "bar",
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
            options: {
                layout: {
                    padding: {
                        top: chartRef.current.clientHeight * 0.50,
                        bottom: chartRef.current.clientHeight * 0.35,
                        left: chartRef.current.clientWidth * 0.50,
                        right: chartRef.current.clientWidth * 0.50,
                    },
                },
            },
        });
        

        return () => {
            chart.destroy();
        };
    }, [jsonData]);

    return (
        <div>
            <canvas ref={chartRef}></canvas>
        </div>
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
