import React from 'react';
const Table = ({yearly_prices}) => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>2020</th>
            <th>2019</th>
            <th>2018</th>
            <th>2017</th>
            <th>2016</th>
            <th>2015</th>
            <th>2014</th>
            <th>2013</th>
          </tr>
        </thead>
        <tbody>
        { (yearly_prices.length > 0) ? yearly_prices.map((yearly_price, index) => {
           return (
            <tr key={ index }>
              <td>{ yearly_price.company_name }</td>
              <td>{ yearly_price.prices_2020 }</td>
              <td>{ yearly_price.prices_2019 }</td>
              <td>{ yearly_price.prices_2018 }</td>
              <td>{ yearly_price.prices_2017 }</td>
              <td>{ yearly_price.prices_2016 }</td>
              <td>{ yearly_price.prices_2015 }</td>
              <td>{ yearly_price.prices_2014 }</td>
              <td>{ yearly_price.prices_2013 }</td>
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
        </tbody>
      </table>
    );
}

export default Table