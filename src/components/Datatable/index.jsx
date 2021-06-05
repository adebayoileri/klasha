import React from "react";
import SearchIcon from "../../assets/icons/Search.png";
import CalendarIcon from "../../assets/icons/Calendar.svg";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";

export default function DataTable() {
  const [startDate, setStartDate] = React.useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className="datatable__date-picker">
      <input value={value} placeholder="Search something..." />{" "}
      <img
        onClick={onClick}
        ref={ref}
        src={CalendarIcon}
        className="datatable__calendar-icon"
        alt="calendar button"
      />
    </div>
  ));
  return (
    <div>
      <div className="datatable">
        <div className="datatable__header">
          <div className="datatable__title">Payout table</div>
          <div className="datatable__action">
            <div className="datatable__search">
              <input type="text" placeholder="Search something..." />{" "}
              <img
                src={SearchIcon}
                className="datatable__search-icon"
                alt="search button"
              />
            </div>
            <div>
              <DatePicker
                style={{}}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MMMM, yyyy"
                customInput={<CustomDateInput />}
              />
            </div>

            <button className="btn btn--secondary">Payout</button>
          </div>
        </div>

        <div className="datatable__content">
          <table className="k-table">
            <tr className="k-tr">
              <th className="k-th">Payout ID</th>
              <th className="k-th">Source</th>
              <th className="k-th">Date</th>
              <th className="k-th">Amount</th>
            </tr>
            {Array(4)
              .fill(" ")
              .map((_, idx) => (
                <tr className="k-tr" key={idx}>
                  <td className="k-td">KLA12578DHQ</td>
                  <td className="k-td">Vel pellentesque ornare</td>
                  <td className="k-td">25th November, 2020</td>
                  <td className="k-td">$1,200</td>
                </tr>
              ))}
          </table>
          <div className="datatable-next">See more</div>
        </div>
      </div>
    </div>
  );
}
