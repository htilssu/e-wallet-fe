import { useState, useEffect } from 'react';
import {Line } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, Filler, } from 'chart.js';

ChartJS.register(CategoryScale,LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    Filler
);

const Statistical = () => {
    const [statistics, setStatistics] = useState({
        totalTransactions: 1200,
        totalUsers: 300,
        totalWallets: 150,
        totalMoneyTransactions: 50000,
        transactionData: [
            { date: "2023-01-01", count: 30 },
            { date: "2023-02-01", count: 45 },
            { date: "2023-03-01", count: 60 },
            { date: "2023-04-01", count: 80 },
            { date: "2023-05-01", count: 100 },
        ],
        moneyData: [
            { date: "2023-01-01", amount: 1000 },
            { date: "2023-02-01", amount: 1500 },
            { date: "2023-03-01", amount: 2000 },
            { date: "2023-04-01", amount: 2500 },
            { date: "2023-05-01", amount: 3000 },
        ],
    });

    useEffect(() => {
        const fetchData = async () => {
            setTimeout(() => {
                setStatistics({
                    totalTransactions: 1200,
                    totalUsers: 300,
                    totalWallets: 150,
                    totalMoneyTransactions: 50000,
                    transactionData: [
                        { date: "2023-01-01", count: 30 },
                        { date: "2023-02-01", count: 45 },
                        { date: "2023-03-01", count: 60 },
                        { date: "2023-04-01", count: 80 },
                        { date: "2023-05-01", count: 100 },
                    ],
                    moneyData: [
                        { date: "2023-01-01", amount: 1700 },
                        { date: "2023-02-01", amount: 1500 },
                        { date: "2023-03-01", amount: 1600 },
                        { date: "2023-04-01", amount: 2000 },
                        { date: "2023-05-01", amount: 1900 },
                    ],
                });
            }, 1000);
        };

        fetchData();
    }, []);


    const moneyChartData = {
        labels: statistics.moneyData.map(data => data.date),
        datasets: [
            {
                label: 'Money',
                data: statistics.moneyData.map(data => data.amount),
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
            },
        ],
    };

    return (
        <div className="p-6">
            <div className="bg-white shadow-lg rounded-lg p-4">
                <h2 className="text-lg font-medium mb-4">Monthly Money Over Time</h2>
                <Line data={moneyChartData} />
            </div>
        </div>
    );
}

export default Statistical;