import React, { useState } from 'react' 
import {HorizontalBar} from 'react-chartjs-2'
import image from '../../Images/Pikachu.gif'
import  './styles.css'

const BarChart = ({ pokemonDetails }) => {
    const [ populateChart ] = useState({
        labels: ['HP', 'Attack', 'Defence', 'Special Attack', 'Special Defence', 'Speed'],
        values: [
            {
                data: [
                    pokemonDetails.stats[0].base_stat,
                    pokemonDetails.stats[1].base_stat,
                    pokemonDetails.stats[2].base_stat,
                    pokemonDetails.stats[3].base_stat,
                    pokemonDetails.stats[4].base_stat,
                    pokemonDetails.stats[5].base_stat
                ],
                backgroundColor: [
                    'rgb(25,200,80)',
                    'rgb(248,208,48)',
                    'rgb(240,128,48)',
                    'rgb(104,144,240)',
                    'rgb(160,64,160)',
                    'rgb(238,153,172)'
                ]
            }
        ]
    });
    
    
    
    
    
    return (
        <div>
        { pokemonDetails &&
            <div className= 'chart'>
                <HorizontalBar
                    data= {populateChart}
                    options={{
                        legend: {
                            display: false,
                            labels: {fontColor: 'black'}
                        },
                        elements: {
                            bar: {
                              borderWidth: 2,
                            }
                          },
                        responsive: true,
                        maintainAspectRatio: false,
                        beginAtZero: true,
                        hover: {
                            color: 'white'
                        },
                        scales: {
                            xAxes: [
                                {
                                    ticks: {min: 0, max:255, display: false, fontColor: 'black'},
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            yAxes: [
                                {
                                    ticks: { fontColor: 'black', fontWeight: 700 },
                                    categoryPercentage: 1.0,
                                    barPercentage: 0.8,
                                    
                                }
                            ]
                        }
                    }}
                
                />
            </div>
        }
        </div>
    );
}
 
export default BarChart;