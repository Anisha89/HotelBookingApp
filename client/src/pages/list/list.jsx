import React, { useState } from 'react'
import Navbar from '../../components/navbar/navbar.jsx';
import Header from '../../components/header/Header.jsx'
import SearchItem from '../../components/SearchItem/SearchItem.jsx'
import './list.css';
import { useLocation } from 'react-router-dom';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';

const List = () => {
  const location= useLocation();
  console.log(location);
  const [destination,setDestination]= useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [date,setDate] = useState(location.state.date);
  const [options,setOptions]= useState(location.state.options)
  return (
    <div>
     <Navbar/>
     <Header  type="list"/>    
      <div className='listContainer'>
        <div className="listWrapper">
          <div className='listSearch'>
          <h1 className='lsTitle'>Search</h1>
          <div className='lsItem'>
          <label>Destination</label>
        <input type="text" placeholder={destination}/>
          </div>
          <div className='lsItem'>
          <label>Check-in-Date</label>
        <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && ( <DateRange onChange={item=>setDate([item.selection])} minDate={new Date()} ranges={date}/>)}
             </div>
          <div className='lsItem'>
            <label>Options</label>
            <div className='lsOptions'>
            <div className='lsOptionItem'>
              <span className='lsOptionText'>Min price <small>per night</small></span>
              <input type="number" className='lsOptionInput'/>
            </div>
            <div className='lsOptionItem'>
              <span className='lsOptionText'>Max price <small>per night</small></span>
              <input type="number" className='lsOptionInput'/>
            </div>
            <div className='lsOptionItem'>
              <span className='lsOptionText'>Adult<small>per night</small></span>
              <input type="number" min={1} className='lsOptionInput' placeholder={options.adult}/>
            </div>
            <div className='lsOptionItem'>
              <span className='lsOptionText'>Children <small>per night</small></span>
              <input type="number" min={0} className='lsOptionInput' placeholder={options.children}/>
            </div>
            <div className='lsOptionItem'>
              <span className='lsOptionText'>Room <small>per night</small></span>
              <input type="number" min={1} className='lsOptionInput' placeholder={options.room}/>
            </div>
            </div>
          </div>
          <button>Search</button>
          </div>
          <div className='listResult'>
               <SearchItem/>
               <SearchItem/> 
                <SearchItem/>  
                <SearchItem/> 
                 <SearchItem/>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default List