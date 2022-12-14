import React from 'react';
import {BsCurrencyDollar} from "react-icons/bs";
import {GoPrimitiveDot} from "react-icons/go";
import {Stacked, Pie, Button, SparkLine} from "../components";
import {earningData, SparklineAreaData, ecomPieChartData} from "../data/dummy";

import {useStateContext} from "../contexts/ContextProvider";

function Ecommerce() {
    return (
        <div className="mt-12">
            <div className="flex flex-wrap lg:flex-nowrap justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold text-gray-4000">Earnings</p>
                            <p className="text-2xl">$500000</p>
                        </div>
                                <button
                                  type="button"
                                  style={{ backgroundColor: currentColor }}
                                  className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4">
                                  <BsCurrencyDollar />
                                </button>
                                    </div>
                                    <div className="mt-6">
                                        <Button
                                            color="white"
                                            bgColor={currentColor}
                                            text="Download"
                                            borderRadius="10px"

                                     />
            
                         </div>
                     </div>
                </div>
            </div>
            <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                {earningData.map((item) =>
                    (
                    <div key={item.title}
                         className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-3 pt-9 rounded-2xl">
                        <button type="button" style={{color: item.iconColor, backgroundColor: item.iconBg}}
                                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"></button>
                    </div>
                    ))}

            </div>
        </div>
    );
}

export default Ecommerce;