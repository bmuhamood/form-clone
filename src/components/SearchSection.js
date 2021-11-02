import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function SearchSection() {
    const [selectedDate, setSelectedDate] = useState(null)
  return (
      <>
      <div className="header-text header-text-flex">
          <p>Permanent Roamers Analysis</p>
          <ArrowDropUpIcon className="arrown-up" />  
      </div> 

    <div className="container-fluid">
    <form className="DataSearch">
        <div className="topSearch">
            <div className="flexbox-item flexbox-item-1">
            <label className="label-text">Client<span className="star-color">*</span></label></div>
            <div className="dropdown-btn flexbox-item flexbox-item-4">ARETC<ArrowDropDownIcon className="arrow"/></div>
            <div className="flexbox-item flexbox-item-2">
            <label className="label-text">Search By</label></div>
            <div className="dropdown-btn flexbox-item flexbox-item-5">By Country<ArrowDropDownIcon className="arrow"/></div>
            <div className="flexbox-item flexbox-item-3">
            <label className="label-text">Country:</label></div> <Form.Check className="apply-top"label="All"/>
           <div className="dropdown-btn flexbox-item flexbox-item-6">Choose One<ArrowDropDownIcon className="arrow"/></div>
        </div>
        <div className="topSearch mt-0">
            <div className="flexbox-item flexbox-item-1">
            <label className="label-text">Stay Period (Days):</label></div>
            <div className="dropdown-btn flexbox-item flexbox-item-1">            
            <Form.Check type="radio" aria-label="radio 1" />30
            <Form.Check type="radio" aria-label="radio 1" />90
            <Form.Check type="radio" aria-label="radio 1" />270
            <Form.Check type="radio" aria-label="radio 1" />365
            </div>

            <div className="flexbox-item flexbox-item-2">
            <label className="label-text">Date From<span className="star-color">*</span></label></div>
            <div className="dropdown-btn flexbox-item flexbox-item-1">            
            <DatePicker className="date-pick"
            selected={selectedDate} 
            onChange={date => setSelectedDate(date)}
            placeholderText="DD-MM-YYYY" />
            <ArrowDropDownIcon className="arrow"/>
            </div>

            <div className="flexbox-item flexbox-item-1">
            <label className="label-text">Date To<span className="star-color">*</span></label></div>
            <div className="dropdown-btn flexbox-item flexbox-item-1">            
            <DatePicker className="date-pick"
            selected={selectedDate} 
            onChange={date => setSelectedDate(date)}
            placeholderText="DD-MM-YYYY" />
            <ArrowDropDownIcon className="arrow"/>
            </div>

        </div>
        <div className="topSearch">
            <div className="flexbox-item flexbox-item-1">
            <label className="label-text">Analysis Description</label></div>
            <InputGroup className="text-box">
                <FormControl
                placeholder="Analysis Description"
                aria-label="Analysis Description" />
                <Button className="analysis-btn-1" variant="primary">Submit Job</Button>
                <Button className="analysis-btn-2" variant="primary">Refresh</Button>
            </InputGroup>
        </div>
        </form>
    </div>
    </>
  );
}

export default SearchSection;
