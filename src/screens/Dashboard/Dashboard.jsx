import React from "react";
import Header from "../../components/Header/Header";
import "../../common/common.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import doctorImage1 from "../../assets/images/doctor1.jpg";
import doctorImage2 from "../../assets/images/doctor2.jpg";
import doctorImage3 from "../../assets/images/doctor3.jpg";
import doctorImage4 from "../../assets/images/doctor4.jpg";
import doctorImage5 from "../../assets/images/doctor5.jpg";
import { useSelector } from "react-redux";
import { getMenuStatus } from "../../features/functionalities/functionSlice";

const Dashboard = () => {
  const menuStatus = useSelector(getMenuStatus);

  return (
    <div>
      <Header />
      <section class="main">
        <Sidebar />
        <div className={menuStatus ? "main--content active" : "main--content"}>
          <div class="overview">
            <div class="title">
              <h2 class="section--title">Overview</h2>
              <select name="date" id="date" class="dropdown">
                <option value="today">Today</option>
                <option value="lastweek">Last Week</option>
                <option value="lastmonth">Last Month</option>
                <option value="lastyear">Last Year</option>
                <option value="alltime">All Time</option>
              </select>
            </div>
            <div class="cards">
              <div class="card card-1">
                <div class="card--data">
                  <div class="card--content">
                    <h5 class="card--title">Total Doctors</h5>
                    <h1>152</h1>
                  </div>
                  <i class="ri-user-2-line card--icon--lg"></i>
                </div>
                <div class="card--stats">
                  <span>
                    <i class="ri-bar-chart-fill card--icon stat--icon"></i>65%
                  </span>
                  <span>
                    <i class="ri-arrow-up-s-fill card--icon up--arrow"></i>10
                  </span>
                  <span>
                    <i class="ri-arrow-down-s-fill card--icon down--arrow"></i>2
                  </span>
                </div>
              </div>
              <div class="card card-2">
                <div class="card--data">
                  <div class="card--content">
                    <h5 class="card--title">Total Patients</h5>
                    <h1>1145</h1>
                  </div>
                  <i class="ri-user-line card--icon--lg"></i>
                </div>
                <div class="card--stats">
                  <span>
                    <i class="ri-bar-chart-fill card--icon stat--icon"></i>82%
                  </span>
                  <span>
                    <i class="ri-arrow-up-s-fill card--icon up--arrow"></i>230
                  </span>
                  <span>
                    <i class="ri-arrow-down-s-fill card--icon down--arrow"></i>
                    45
                  </span>
                </div>
              </div>
              <div class="card card-3">
                <div class="card--data">
                  <div class="card--content">
                    <h5 class="card--title">Schedule</h5>
                    <h1>102</h1>
                  </div>
                  <i class="ri-calendar-2-line card--icon--lg"></i>
                </div>
                <div class="card--stats">
                  <span>
                    <i class="ri-bar-chart-fill card--icon stat--icon"></i>27%
                  </span>
                  <span>
                    <i class="ri-arrow-up-s-fill card--icon up--arrow"></i>31
                  </span>
                  <span>
                    <i class="ri-arrow-down-s-fill card--icon down--arrow"></i>
                    23
                  </span>
                </div>
              </div>
              <div class="card card-4">
                <div class="card--data">
                  <div class="card--content">
                    <h5 class="card--title">Beds Available</h5>
                    <h1>15</h1>
                  </div>
                  <i class="ri-hotel-bed-line card--icon--lg"></i>
                </div>
                <div class="card--stats">
                  <span>
                    <i class="ri-bar-chart-fill card--icon stat--icon"></i>8%
                  </span>
                  <span>
                    <i class="ri-arrow-up-s-fill card--icon up--arrow"></i>11
                  </span>
                  <span>
                    <i class="ri-arrow-down-s-fill card--icon down--arrow"></i>2
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="doctors">
            <div class="title">
              <h2 class="section--title">Doctors</h2>
              <div class="doctors--right--btns">
                <select name="date" id="date" class="dropdown doctor--filter">
                  <option>Filter</option>
                  <option value="free">Free</option>
                  <option value="scheduled">Scheduled</option>
                </select>
                <button class="add">
                  <i class="ri-add-line"></i>Add Doctor
                </button>
              </div>
            </div>
            <div class="doctors--cards">
              <a href="#" class="doctor--card">
                <div class="img--box--cover">
                  <div class="img--box">
                    <img src={doctorImage1} alt="" />
                  </div>
                </div>
                <p class="free">Free</p>
              </a>
              <a href="#" class="doctor--card">
                <div class="img--box--cover">
                  <div class="img--box">
                    <img src={doctorImage2} alt="" />
                  </div>
                </div>
                <p class="scheduled">Scheduled</p>
              </a>
              <a href="#" class="doctor--card">
                <div class="img--box--cover">
                  <div class="img--box">
                    <img src={doctorImage3} alt="" />
                  </div>
                </div>
                <p class="scheduled">Scheduled</p>
              </a>
              <a href="#" class="doctor--card">
                <div class="img--box--cover">
                  <div class="img--box">
                    <img src={doctorImage4} alt="" />
                  </div>
                </div>
                <p class="free">Free</p>
              </a>
              <a href="#" class="doctor--card">
                <div class="img--box--cover">
                  <div class="img--box">
                    <img src={doctorImage5} alt="" />
                  </div>
                </div>
                <p class="scheduled">Scheduled</p>
              </a>
              <a href="#" class="doctor--card">
                <div class="img--box--cover">
                  <div class="img--box">
                    <img src={doctorImage5} alt="" />
                  </div>
                </div>
                <p class="free">Free</p>
              </a>
              <a href="#" class="doctor--card">
                <div class="img--box--cover">
                  <div class="img--box">
                    <img src={doctorImage5} alt="" />
                  </div>
                </div>
                <p class="scheduled">Scheduled</p>
              </a>
            </div>
          </div>
          <div class="recent--patients">
            <div class="title">
              <h2 class="section--title">Recent Patients</h2>
              <button class="add">
                <i class="ri-add-line"></i>Add Doctor
              </button>
            </div>
            <div class="table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date in</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Status</th>
                    <th>Settings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cameron Williamson</td>
                    <td>30/07/2022</td>
                    <td>Male</td>
                    <td>61kg</td>
                    <td class="pending">pending</td>
                    <td>
                      <span>
                        <i class="ri-edit-line edit"></i>
                        <i class="ri-delete-bin-line delete"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>George Washington</td>
                    <td>30/07/2022</td>
                    <td>Male</td>
                    <td>54kg</td>
                    <td class="confirmed">Confirmed</td>
                    <td>
                      <span>
                        <i class="ri-edit-line edit"></i>
                        <i class="ri-delete-bin-line delete"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>John Adams</td>
                    <td>29/07/2022</td>
                    <td>Male</td>
                    <td>56kg</td>
                    <td class="confirmed">Confirmed</td>
                    <td>
                      <span>
                        <i class="ri-edit-line edit"></i>
                        <i class="ri-delete-bin-line delete"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Thomas Jefferson</td>
                    <td>29/07/2022</td>
                    <td>Male</td>
                    <td>11kg</td>
                    <td class="rejected">Rejected</td>
                    <td>
                      <span>
                        <i class="ri-edit-line edit"></i>
                        <i class="ri-delete-bin-line delete"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>James Madison</td>
                    <td>29/07/2022</td>
                    <td>Male</td>
                    <td>69kg</td>
                    <td class="confirmed">Confirmed</td>
                    <td>
                      <span>
                        <i class="ri-edit-line edit"></i>
                        <i class="ri-delete-bin-line delete"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Andrew Jackson</td>
                    <td>28/07/2022</td>
                    <td>Male</td>
                    <td>88kg</td>
                    <td class="confirmed">Confirmed</td>
                    <td>
                      <span>
                        <i class="ri-edit-line edit"></i>
                        <i class="ri-delete-bin-line delete"></i>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
