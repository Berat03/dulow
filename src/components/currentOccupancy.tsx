import React, { useState, useEffect } from 'react';

const LibraryOccupancy: React.FC = () => {
    interface LevelData {
        free: number;
        total: number;
        freePercentage: number;
        usedPercentage: number;
    }

    interface OccupancyData {
        telepen: LevelData;
        affluence: Record<string, LevelData>;
    }

    const [occupancyData, setOccupancyData] = useState<OccupancyData | null>(null);
    const apiUrl = 'https://apps.dur.ac.uk/study-spaces/library/bill-bryson/occupancy/display?json&affluence';

    useEffect(() => {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data: OccupancyData) => {
                console.log('Fetched data:', data);
                setOccupancyData(data);
            })
            .catch(error => {
                console.error('There was a problem fetching the data:', error);
            });
    }, [apiUrl]);

    return (
        <div className="text-white text-2xl">
            <h1>Library Occupancy</h1>
            {occupancyData ? (
                <div>
                    <h2>Telepen Data:</h2>
                    <p>Occupancy: {occupancyData.telepen.free}</p>
                    <p>Total Capacity: {occupancyData.telepen.total}</p>
                    <p>Free Percentage: {occupancyData.telepen.freePercentage}%</p>
                    <p>Used Percentage: {occupancyData.telepen.usedPercentage}%</p>

                    <h2>Affluence Data:</h2>
                    {Object.keys(occupancyData.affluence).map(level => (
                        <div key={level}>
                            <h3>Level: {level}</h3>
                            <p>Occupancy: {occupancyData.affluence[level].free}</p>
                            <p>Total Capacity: {occupancyData.affluence[level].total}</p>
                            <p>Free Percentage: {occupancyData.affluence[level].freePercentage}%</p>
                            <p>Used Percentage: {occupancyData.affluence[level].usedPercentage}%</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default LibraryOccupancy;
