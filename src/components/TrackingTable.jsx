import React from "react";
import { Package } from "lucide-react";
import "./TrackingTable.css"; // Import the CSS file

const trackingData = [
  {
    date: "2/06/2017",
    day: "Monday",
    time: "8:56 pm",
    activity: "In transit",
    location: "ELLENWOOD, GA",
  },
  {
    date: "2/05/2017",
    day: "Sunday",
    time: "9:21 pm",
    activity: "In transit",
    location: "ELLENWOOD, GA",
  },
  {
    date: "2/04/2017",
    day: "Saturday",
    time: "7:47 pm",
    activity: "In transit",
    location: "ATLANTA, GA",
  },
  {
    date: "2/04/2017",
    day: "Saturday",
    time: "6:39 am",
    activity: "In transit",
    location: "CHECOTAH, OK",
  },
  {
    date: "2/03/2017",
    day: "Friday",
    time: "5:27 pm",
    activity: "In transit",
    location: "PREWITT, NM",
  },
  {
    date: "2/03/2017",
    day: "Friday",
    time: "4:17 am",
    activity: "Left FedEx origin facility",
    location: "SANTA FE SPRINGS, CA",
  },
  {
    date: "2/02/2017",
    day: "Thursday",
    time: "9:03 pm",
    activity: "Arrived at FedEx location",
    location: "SANTA FE SPRINGS, CA",
  },
  {
    date: "2/02/2017",
    day: "Thursday",
    time: "6:20 pm",
    activity: "Picked up",
    location: "SANTA FE SPRINGS, CA",
  },
  {
    date: "1/19/2017",
    day: "Thursday",
    time: "1:32 am",
    activity: "Shipment information sent to FedEx",
    location: "",
  },
];

export default function TrackingTable() {
  return (
    <div className="tracking-container">
      <div className="tracking-header">
        <Package className="package-icon" size={24} />
        <h2 className="tracking-title">Tracking Details</h2>
      </div>

      <div className="table-wrapper">
        <table className="tracking-table">
          <thead className="table-header">
            <tr>
              <th>Date/Time</th>
              <th>Activity</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {trackingData.map((entry, index) => (
              <tr key={index} className="table-row">
                <td className="table-cell">
                  <div className="date-time">
                    {entry.date} - {entry.day}
                  </div>
                  <div className="time">{entry.time}</div>
                </td>
                <td className="table-cell">{entry.activity}</td>
                <td className="table-cell">{entry.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
