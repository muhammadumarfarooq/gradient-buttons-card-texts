import React from "react";

import icon from "./web.png";

// titles in arrays

const tableContents = {
  mdCol: 2,
  smCol: 3,
  col: 4,
  tableClassName: "orange-gradient",
  // oddRowClassName: "bluish-row-gradient",
  evenRowClassName: "full-bluish-gradient",
  content: ["Game", "Time", "ID", "Player", "wager", "Payout"]
};

const indexing = [1, 2, 3, 4, 5];

const Table = ({ children }) => {
  const {
    mdCol,
    smCol,
    col,
    content,
    tableClassName,
    oddRowClassName,
    evenRowClassName
  } = tableContents;

  const giveGradient = index => {
    return index % 2 === 0 ? evenRowClassName : oddRowClassName;
  };

  return (
    <div className='table'>
      <div className='container'>
        <div className='row' style={{ padding: "30px", paddingBottom: "15px" }}>
          {content.map(ar => (
            <div className={`col-md-${mdCol} col-sm-${smCol} col-${col}`}>
              {ar}
            </div>
          ))}
        </div>
        <div className={`row table-wraper ${tableClassName}`}>
          <div className='col-md-12'>
            {/* <div className='row table-row'>{children}</div> */}
            {indexing.map((item, index) => {
              return (
                <div
                  className={`row table-row ${
                    oddRowClassName ? giveGradient(index) : evenRowClassName
                  }`}
                >
                  <div className='col-md-2 col-sm-2 col-2 table-img'>
                    <img src={icon} alt='table-icon' />
                  </div>
                  <div className='col-md-2 col-sm-2 col-2'>08.20</div>
                  <div className='col-md-2 col-sm-2 col-3'>Z7394Z</div>
                  <div className='col-md-2 col-sm-2 col-2'>Player</div>
                  <div className='col-md-2 col-sm-2 col-1'>05</div>
                  <div className='col-md-2 col-sm-2 col-1'>1.3</div>
                </div>
              );
            })}

            {/* <div className='row table-row table-row-colored'>
              <div className='col-md-12'></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
