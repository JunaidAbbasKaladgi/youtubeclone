import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBarWithImage = ({ captureQuery, submitQuery }) => {
    return (
        <div className="flex justify-between items-center ">
            <img 
                src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" 
                alt="Logo" 
                className="w-52 h-20 mr-4"
            />
            <div className="flex justify-center">
                <input 
                    onChange={captureQuery} 
                    type="text" 
                    className="border border-black w-[457px] h-[40px] rounded-l-lg pl-4 text-lg focus:outline-none" 
                    placeholder="Search..."
                />
                <button 
                    onClick={submitQuery} 
                    className="bg-gray-200 border border-black h-[40px] rounded-r-lg flex items-center justify-center px-4 hover:bg-gray-300"
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="text-gray-600" />
                </button>
                
            </div>
            <div></div>
        </div>
    );
};

export default SearchBarWithImage;
