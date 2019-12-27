import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div className="container-scroller">
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div className="navbar-brand-wrapper d-flex align-items-center justify-content-between">
            <a className="navbar-brand brand-logo" href="index.html">
              <img src="../../images/logo.svg" alt="logo" />
            </a>
            <a className="navbar-brand brand-logo-mini" href="index.html">
              <img src="../../images/logo-mini.svg" alt="logo" />
            </a>
            <button
              className="navbar-toggler navbar-toggler align-self-center"
              type="button"
              data-toggle="minimize"
            >
              <img src="../../images/sidebar/menu.svg" alt="" className="" />
            </button>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <ul className="navbar-nav mr-lg-2">
              <li className="nav-item nav-search d-none d-lg-block">
                <div className="input-group pl-0">
                  <input
                    type="text"
                    className="form-control ml-0"
                    placeholder="Search Projects.."
                    aria-label="search"
                  />
                </div>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex justify-content-center align-items-center font-weight-medium"
                  id="languageDropdown"
                  href="#"
                  data-toggle="dropdown"
                >
                  English
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                  aria-labelledby="languageDropdown"
                >
                  <a className="dropdown-item preview-item">English</a>
                  <a className="dropdown-item preview-item">Arabic</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link  dropdown-toggle d-flex justify-content-center align-items-center"
                  id="messageDropdown"
                  href="#"
                  data-toggle="dropdown"
                >
                  <img
                    src="../../images/sidebar/mail.svg"
                    alt=""
                    className=""
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                  aria-labelledby="messageDropdown"
                >
                  <p className="mb-0 font-weight-normal float-left dropdown-header">
                    Messages
                  </p>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="../../images/faces/face4.jpg"
                        alt="image"
                        className="profile-pic"
                      />
                    </div>
                    <div className="preview-item-content flex-grow">
                      <h6 className="preview-subject ellipsis font-weight-normal">
                        David Grey
                      </h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        The meeting is cancelled
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="../../images/faces/face2.jpg"
                        alt="image"
                        className="profile-pic"
                      />
                    </div>
                    <div className="preview-item-content flex-grow">
                      <h6 className="preview-subject ellipsis font-weight-normal">
                        Tim Cook
                      </h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        New product launch
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="../../images/faces/face3.jpg"
                        alt="image"
                        className="profile-pic"
                      />
                    </div>
                    <div className="preview-item-content flex-grow">
                      <h6 className="preview-subject ellipsis font-weight-normal">
                        {" "}
                        Johnson
                      </h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        Upcoming board meeting
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center justify-content-center"
                  id="notificationDropdown"
                  href="#"
                  data-toggle="dropdown"
                >
                  <img
                    src="../../images/sidebar/notification.svg"
                    alt=""
                    className=" /"
                  />
                  <span className="count-circle"></span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                  aria-labelledby="notificationDropdown"
                >
                  <p className="mb-0 font-weight-normal float-left dropdown-header">
                    Notifications
                  </p>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-success">
                        <i className="mdi mdi-information mx-0"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal">
                        Application Error
                      </h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        Just now
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-warning">
                        <i className="mdi mdi-settings mx-0"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal">
                        Settings
                      </h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        Private message
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-info">
                        <i className="mdi mdi-account-box mx-0"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal">
                        New user registration
                      </h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        2 days ago
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item nav-profile dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  id="profileDropdown-navbar"
                >
                  <img src="../../images/faces/face28.png" alt="profile" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown flat-dropdown"
                  aria-labelledby="profileDropdown-navbar"
                >
                  <div className="flat-dropdown-header">
                    <div className="d-flex">
                      <img
                        src="../../images/faces/face28.png"
                        alt="profile"
                        className="profile-icon mr-2"
                      />
                      <div>
                        <span className="profile-name font-weight-bold">
                          Cecelia Vargas
                        </span>
                        <p className="profile-designation">Sales head</p>
                      </div>
                    </div>
                  </div>
                  <div className="profile-dropdown-body">
                    <ul className="list-profile-items">
                      <li className="profile-item">
                        <a href="#" className="profile-dropdown-link">
                          <div className="d-flex align-items-center">
                            <i className="mdi mdi-account-outline text-primary"></i>
                            <div>
                              <h5 className="item-title">My Profile</h5>
                              <p className="item-detail">
                                Account settings and more
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="profile-item">
                        <a href="#" className="profile-dropdown-link">
                          <div className="d-flex align-items-center">
                            <i className="mdi mdi-email-outline text-info"></i>
                            <div>
                              <h5 className="item-title">My Messages</h5>
                              <p className="item-detail">Inbox and tasks</p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="profile-item">
                        <a href="#" className="profile-dropdown-link">
                          <div className="d-flex align-items-center">
                            <i className="mdi mdi-vector-polyline text-danger"></i>
                            <div>
                              <h5 className="item-title">My Activities</h5>
                              <p className="item-detail">
                                Logs and notifications
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="profile-item">
                        <a href="#" className="profile-dropdown-link">
                          <div className="d-flex align-items-center">
                            <i className="mdi mdi-timer-sand text-success"></i>
                            <div>
                              <h5 className="item-title">My Tasks</h5>
                              <p className="item-detail">
                                latest tasks and projects
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="profile-item">
                        <a href="#" className="profile-dropdown-link">
                          <div className="d-flex align-items-center">
                            <i className="mdi mdi-cash-100 text-warning"></i>
                            <div>
                              <h5 className="item-title">Billing</h5>
                              <p className="item-detail">
                                billing &amp; statements{" "}
                                <span className="badge badge-danger ml-2">
                                  2 Pending
                                </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="profile-item" onClick={this.onLogoutClick}>
                        <a href="#" className="profile-dropdown-link">
                          <div className="d-flex align-items-center">
                            <i className="mdi mdi-power text-dark"></i>
                            <div>
                              <h5 className="item-title mt-0" >Logout</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <button
              className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
              type="button"
              data-toggle="offcanvas"
            >
              <img src="../../images/sidebar/menu.svg" alt="" className="" />
            </button>
          </div>
        </nav>
        <div className="container-fluid page-body-wrapper">
          {/* <!-- partial:partials/_settings-panel.html --> */}
          <div className="theme-setting-wrapper">
            <div id="settings-trigger">
              <i className="mdi mdi-settings"></i>
            </div>
            <div id="theme-settings" className="settings-panel">
              <i className="settings-close mdi mdi-close"></i>
              <p className="settings-heading">SIDEBAR SKINS</p>
              <div
                className="sidebar-bg-options selected"
                id="sidebar-light-theme"
              >
                <div className="img-ss rounded-circle bg-light border mr-3"></div>
                Light
              </div>
              <div className="sidebar-bg-options" id="sidebar-dark-theme">
                <div className="img-ss rounded-circle bg-dark border mr-3"></div>
                Dark
              </div>
              <p className="settings-heading mt-2">HEADER SKINS</p>
              <div className="color-tiles mx-0 px-4">
                <div className="tiles success"></div>
                <div className="tiles warning"></div>
                <div className="tiles danger"></div>
                <div className="tiles primary"></div>
                <div className="tiles info"></div>
                <div className="tiles dark"></div>
                <div className="tiles default"></div>
              </div>
            </div>
          </div>
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item nav-profile dropdown">
                <div>
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    id="profileDropdown"
                    aria-expanded="false"
                  >
                    <div className="d-flex">
                      <img src="../../images/faces/face28.png" alt="profile" />
                      <div>
                        <span className="sidebar-profile-name font-weight-bold">
                          Cecelia Vargas
                        </span>
                        <p className="sidebar-profile-designation text-muted text-small">
                          Sales head
                        </p>
                      </div>
                    </div>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown"
                    aria-labelledby="profileDropdown"
                  >
                    <a className="dropdown-item">
                      <i className="mdi mdi-settings text-primary"></i>
                      Settings
                    </a>
                    <a className="dropdown-item">
                      <i className="mdi mdi-logout text-primary"></i>
                      Logout
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="sidebar-menu-title">
                  <img
                    src="../../images/sidebar/home.svg"
                    alt=""
                    className="sidebar-icon-title"
                  />{" "}
                  <span>Navigation</span>
                </div>
                <ul className="nav submenu-wrapper">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      <span className="menu-title">Dashboard </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <div className="sidebar-menu-title">
                  <img
                    src="../../images/sidebar/ui.svg"
                    alt=""
                    className="sidebar-icon-title"
                  />{" "}
                  <span>Components</span>
                </div>
                <ul className="nav submenu-wrapper">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="collapse"
                      href="#ui-basic"
                      aria-expanded="false"
                      aria-controls="ui-basic"
                    >
                      <span className="menu-title">UI Elements</span>
                      <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="ui-basic">
                      <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/accordions.html"
                          >
                            Accordions
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/buttons.html"
                          >
                            Buttons
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/badges.html"
                          >
                            Badges
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/breadcrumbs.html"
                          >
                            Breadcrumbs
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/dropdowns.html"
                          >
                            Dropdowns
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/modals.html"
                          >
                            Modals
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/progress.html"
                          >
                            Progress bar
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/pagination.html"
                          >
                            Pagination
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/tabs.html"
                          >
                            Tabs
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/typography.html"
                          >
                            Typography
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/tooltips.html"
                          >
                            Tooltips
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/popups.html"
                          >
                            Popups
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/notifications.html"
                          >
                            Notifications
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="collapse"
                      href="#ui-advanced"
                      aria-expanded="false"
                      aria-controls="ui-advanced"
                    >
                      <span className="menu-title">Advanced Elements</span>
                      <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="ui-advanced">
                      <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/dragula.html"
                          >
                            Dragula
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/clipboard.html"
                          >
                            Clipboard
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/context-menu.html"
                          >
                            Context menu
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/slider.html"
                          >
                            Sliders
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/carousel.html"
                          >
                            Carousel
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/colcade.html"
                          >
                            Colcade
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/ui-features/loaders.html"
                          >
                            Loaders
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/forms/text_editor.html"
                          >
                            Text editors
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/forms/code_editor.html"
                          >
                            Code editors
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="collapse"
                      href="#form-elements"
                      aria-expanded="false"
                      aria-controls="form-elements"
                    >
                      <span className="menu-title">Form elements</span>
                      <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="form-elements">
                      <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/forms/basic_elements.html"
                          >
                            Basic Elements
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/forms/advanced_elements.html"
                          >
                            Advanced Elements
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/forms/validation.html"
                          >
                            Validation
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/forms/wizard.html"
                          >
                            Wizard
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="collapse"
                      href="#icons"
                      aria-expanded="false"
                      aria-controls="icons"
                    >
                      <span className="menu-title">Icons</span>
                      <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="icons">
                      <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/icons/flag-icons.html"
                          >
                            Flag icons
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a className="nav-link" href="pages/icons/mdi.html">
                            Mdi icons
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/icons/font-awesome.html"
                          >
                            Font Awesome
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/icons/simple-line-icon.html"
                          >
                            Simple line icons
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/icons/themify.html"
                          >
                            Themify icons
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/ui-features/popups.html"
                    >
                      <span className="menu-title">Popups</span>
                      <div className="badge badge-primary badge-pill">new</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <div className="sidebar-menu-title">
                  <img
                    src="../../images/sidebar/data.svg"
                    alt=""
                    className="sidebar-icon-title"
                  />{" "}
                  <span>Data</span>
                </div>
                <ul className="nav submenu-wrapper">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="collapse"
                      href="#charts"
                      aria-expanded="false"
                      aria-controls="charts"
                    >
                      <span className="menu-title">Charts</span>
                      <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="charts">
                      <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/charts/chartjs.html"
                          >
                            ChartJs
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/charts/morris.html"
                          >
                            Morris
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/charts/flot-chart.html"
                          >
                            Flot
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/charts/google-charts.html"
                          >
                            Google charts
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/charts/sparkline.html"
                          >
                            Sparkline js
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a className="nav-link" href="pages/charts/c3.html">
                            C3 charts
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/charts/chartist.html"
                          >
                            Chartists
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/charts/justGage.html"
                          >
                            JustGage
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="collapse"
                      href="#tables"
                      aria-expanded="false"
                      aria-controls="tables"
                    >
                      <span className="menu-title">Tables</span>
                      <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="tables">
                      <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/tables/basic-table.html"
                          >
                            Basic table
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/tables/data-table.html"
                          >
                            Data table
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/tables/js-grid.html"
                          >
                            Js-grid
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/tables/sortable-table.html"
                          >
                            Sortable table
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="collapse"
                      href="#maps"
                      aria-expanded="false"
                      aria-controls="maps"
                    >
                      <span className="menu-title">Maps</span>
                      <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="maps">
                      <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                          {" "}
                          <a className="nav-link" href="pages/maps/mapael.html">
                            Mapael
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/maps/vector-map.html"
                          >
                            Vector Map
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/maps/google-maps.html"
                          >
                            Google Map
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <div className="sidebar-menu-title">
                  <img
                    src="../../images/sidebar/web.svg"
                    alt=""
                    className="sidebar-icon-title"
                  />{" "}
                  <span>Web Applications</span>
                </div>
                <ul className="nav submenu-wrapper">
                  <li className="nav-item">
                    <a className="nav-link" href="pages/apps/calendar.html">
                      <span className="menu-title">Calendar</span>
                      <label className="hightlight-sidebar bg-success"></label>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/apps/email.html">
                      <span className="menu-title">E-mail</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/widgets/widgets.html">
                      <span className="menu-title">Widgets</span>
                      <label className="hightlight-sidebar bg-primary"></label>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/apps/todo.html">
                      <span className="menu-title">Todo List</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/apps/gallery.html">
                      <span className="menu-title">Gallery</span>
                      <label className="hightlight-sidebar bg-warning"></label>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <div className="sidebar-menu-title">
                  <img
                    src="../../images/sidebar/pages.svg"
                    alt=""
                    className="sidebar-icon-title"
                  />{" "}
                  <span>Pages</span>
                </div>
                <ul className="nav submenu-wrapper">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="collapse"
                      href="#auth"
                      aria-expanded="false"
                      aria-controls="auth"
                    >
                      <span className="menu-title">User Pages</span>
                      <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="auth">
                      <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/samples/login.html"
                          >
                            {" "}
                            Login{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/samples/login-2.html"
                          >
                            {" "}
                            Login 2{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/samples/register.html"
                          >
                            {" "}
                            Register{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/samples/register-2.html"
                          >
                            {" "}
                            Register 2{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/samples/lock-screen.html"
                          >
                            {" "}
                            Lockscreen{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="collapse"
                      href="#error"
                      aria-expanded="false"
                      aria-controls="error"
                    >
                      <span className="menu-title">Error pages</span>
                      <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="error">
                      <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/samples/error-404.html"
                          >
                            {" "}
                            404{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/samples/error-500.html"
                          >
                            {" "}
                            500{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="collapse"
                      href="#general-pages"
                      aria-expanded="false"
                      aria-controls="general-pages"
                    >
                      <span className="menu-title">General Pages</span>
                      <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="general-pages">
                      <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/samples/blank-page.html"
                          >
                            {" "}
                            Blank Page{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/samples/profile.html"
                          >
                            {" "}
                            Profile{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a className="nav-link" href="pages/samples/faq.html">
                            {" "}
                            FAQ{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/samples/faq-2.html"
                          >
                            {" "}
                            FAQ 2{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/samples/news-grid.html"
                          >
                            {" "}
                            News grid{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/samples/timeline.html"
                          >
                            {" "}
                            Timeline{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/samples/search-results.html"
                          >
                            {" "}
                            Search Results{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/samples/portfolio.html"
                          >
                            {" "}
                            Portfolio{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="collapse"
                      href="#e-commerce"
                      aria-expanded="false"
                      aria-controls="e-commerce"
                    >
                      <span className="menu-title">E-commerce</span>
                      <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="e-commerce">
                      <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/samples/invoice.html"
                          >
                            {" "}
                            Invoice{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/samples/pricing-table.html"
                          >
                            {" "}
                            Pricing Table{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            href="pages/samples/orders.html"
                          >
                            {" "}
                            Orders{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <div className="sidebar-menu-title">
                  <img
                    src="../../images/sidebar/doc.svg"
                    alt=""
                    className="sidebar-icon-title"
                  />{" "}
                  <span>Help</span>
                </div>
                <ul className="nav submenu-wrapper">
                  <li className="nav-item">
                    <a
                      href="http://www.urbanui.com/dashflat/docs/documentation.html"
                      className="nav-link"
                    >
                      <span className="menu-title">Documentation</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* <!-- partial --> */}
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-sm-9">
                  <div className="row">
                    <div className="col-sm-12 pr-0">
                      <div className="d-lg-flex">
                        <h3 className="text-dark font-weight-bold mb-0 mr-5">
                          Welcome to Dashboard
                        </h3>
                        <ul className="dashboard-link-btn-wrap mt-lg-0 mt-sm-2">
                          <li>
                            <a href="#" className="text-primary">
                              <span>
                                <i className="mdi mdi-cube-outline"></i>
                              </span>
                              Activities
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <i className="mdi mdi-signal"></i>
                              </span>
                              Statistics
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <i className="mdi mdi-file-document-outline"></i>
                              </span>
                              Summary
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="dropdown float-right">
                    <button
                      className="btn btn-sm bg-white dropdown-toggle font-weight-bold text-dark"
                      type="button"
                      id="dropdownMenuIconButton1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-calendar mr-1"></i>Today
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuIconButton1"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 col-sm-6 col-md-6 col-xl-3 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Customers</h4>
                      <p className="text-small">+5.27% Since last month</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <h2 className="text-dark font-weight-bold">
                          43,981
                          <span className="text-muted text-extra-small">
                            / per month
                          </span>
                        </h2>
                        <div className="text-danger font-weight-bold d-flex justify-content-between align-items-center">
                          <i className="mdi mdi-chevron-down mdi-24px"></i>{" "}
                          <span className=" text-extra-small">40.8%</span>
                        </div>
                      </div>
                      <canvas id="customer"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-xl-3 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Orders</h4>
                      <p className="text-small">-1.08% Since last month</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <h2 className="text-dark font-weight-bold">
                          55,543
                          <span className="text-muted text-extra-small">
                            / per month
                          </span>
                        </h2>
                        <div className="text-success font-weight-bold d-flex justify-content-between align-items-center">
                          <i className="mdi mdi-chevron-up mdi-24px"></i>{" "}
                          <span className=" text-extra-small">130.5%</span>
                        </div>
                      </div>
                      <canvas id="orders"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-xl-3 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Growth</h4>
                      <p className="text-small">+5.27% Since last month</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <h2 className="text-dark font-weight-bold">
                          58.86%
                          <span className="text-muted text-extra-small">
                            / per month
                          </span>
                        </h2>
                        <div className="text-success font-weight-bold d-flex justify-content-between align-items-center">
                          <i className="mdi mdi-chevron-up mdi-24px"></i>{" "}
                          <span className=" text-extra-small">120.3%</span>
                        </div>
                      </div>
                      <canvas id="growth"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-xl-3 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Revenue</h4>
                      <p className="text-small"> +7.00% Since last month</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <h2 className="text-dark font-weight-bold">
                          USD 42,9536
                          <span className="text-muted text-extra-small">
                            / per month
                          </span>
                        </h2>
                      </div>
                      <canvas id="revenue"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-xl-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body px-0 pb-0 border-bottom">
                      <div className="px-4">
                        <div className="d-flex justify-content-between mb-2">
                          <h4 className="card-title ml-2">Analytics</h4>
                          <div className="mr-2">
                            <button className="btn py-0 text-dark btn-sm">
                              1D
                            </button>
                            <button className="btn py-0 text-dark btn-sm">
                              1W
                            </button>
                            <button className="btn py-0 text-dark btn-sm">
                              1M
                            </button>
                            <button className="btn py-0 pr-0 text-dark btn-sm">
                              1Y
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-3">
                      <div>
                        <div className="total-analysis-position">
                          <h6 className="text-dark font-weight-bold mb-2">
                            Total Analytics
                          </h6>
                          <h2 className="text-dark font-weight-bold">
                            $32456.65
                            <span className="text-muted text-extra-small pl-3">
                              10.5% of 20000 Total
                            </span>
                          </h2>
                        </div>
                        <div className="flot-chart-container flothcart-container-dashboard">
                          <div
                            id="flotChart"
                            className="flot-chart flot-chart-dashboard"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-xl-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body pb-4">
                      <h4 className="card-title">Visitors</h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt,
                      </p>
                      <canvas id="visitors"></canvas>
                    </div>
                    <div className="card-body p-0 border-top">
                      <div className="px-4 text-center">
                        <div
                          id="chart-visitors-legend"
                          className="chart-visitors-legend"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row flex-grow ">
                <div className="col-lg-12 col-xl-6 grid-margin-md stretch-card flex-column d-flex">
                  <div className="row flex-grow">
                    <div className="col-sm-12 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body px-0 pb-0 border-bottom">
                          <div className="px-4 pb-3">
                            <h4 className="card-title ml-1">
                              Resources overview
                            </h4>
                          </div>
                        </div>
                        <div className="card-body">
                          <canvas
                            id="resources-overview"
                            className="mt-3"
                          ></canvas>
                          <div className="row mt-4">
                            <div className="col-sm-6">
                              <h6 className="text-dark font-weight-bold">
                                ACTIVE RESOURCE
                              </h6>
                              <h3 className="text-dark font-weight-bold">
                                $123,657
                              </h3>
                              <p className="mt-2 text-small">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                              </p>
                            </div>
                            <div className="col-sm-6">
                              <h6 className="text-dark font-weight-bold">
                                INACTIVE RESOURCE
                              </h6>
                              <h3 className="text-dark font-weight-bold">
                                $100,278
                              </h3>
                              <p className="mt-2 text-small">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-7 pr-3">
                              <div className="row">
                                <div className="col-6 pr-3 text-center">
                                  <div
                                    id="circleProgress1"
                                    className="progressbar-js-circle mb-2 mb-lg-0"
                                  ></div>
                                </div>

                                <div className="col-6 pl-3">
                                  <div
                                    id="circleProgress2"
                                    className="progressbar-js-circle  mb-2 mb-lg-0"
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-5">
                              <h6 className="text-dark font-weight-bold">
                                Avg. Profit share
                              </h6>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                              </p>
                              <h6 className="text-dark font-weight-bold">
                                Avg. Daily sales
                              </h6>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit,
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6 grid-margin stretch-card flex-column">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Sales overview</h4>
                      <p>Showing data from March 3 - 30 2019</p>
                      <div className="row mb-2">
                        <div className="col-sm-6">
                          <h6 className="text-dark font-weight-bold mt-2">
                            OVERALL SALES
                          </h6>
                          <div className="d-flex align-items-center">
                            <h2 className="text-dark font-weight-bold mr-1 mb-0">
                              $ 14,000
                            </h2>
                            <div className="text-success text-small d-flex align-items-center">
                              <h6>
                                <i className="mdi mdi-chevron-up mdi-24px"></i>{" "}
                                <span>30.68%</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <h6 className="text-dark font-weight-bold mt-2">
                            TODAY'S SALES
                          </h6>
                          <div className="d-flex align-items-center">
                            <h2 className="text-dark font-weight-bold mr-1 mb-0">
                              $ 41,160
                            </h2>
                            <div className="text-success text-small  d-flex align-items-center">
                              <h6>
                                <i className="mdi mdi-chevron-up mdi-24px"></i>{" "}
                                <span>68.22%</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <canvas id="sales-overview"></canvas>
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Users</th>
                              <th>Status</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img
                                    src="../../images/faces/face29.png"
                                    alt=""
                                  />
                                  <div className="ml-3">
                                    <div className="font-weight-bold  text-dark mb-1">
                                      Benjamin Rodriguez
                                    </div>
                                    <div className="font-weight-medium">
                                      bria_morissette@gmail.com
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-opacity-success">
                                  completed
                                </span>
                              </td>
                              <td>
                                <div className="font-weight-bold  text-dark mb-1">
                                  1,12,900
                                </div>
                                <div className="font-weight-medium">
                                  Earning
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img
                                    src="../../images/faces/face30.png"
                                    alt=""
                                  />
                                  <div className="ml-3">
                                    <div className="font-weight-bold  text-dark mb-1">
                                      Franklin Williams
                                    </div>
                                    <div className="font-weight-medium">
                                      franklinwilliams@gmail.com
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-opacity-success">
                                  completed
                                </span>
                              </td>
                              <td>
                                <div className="font-weight-bold  text-dark mb-1">
                                  6,00,00
                                </div>
                                <div className="font-weight-medium">
                                  Earning
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img
                                    src="../../images/faces/face31.png"
                                    alt=""
                                  />
                                  <div className="ml-3">
                                    <div className="font-weight-bold  text-dark mb-1">
                                      Jordan Fox
                                    </div>
                                    <div className="font-weight-medium">
                                      jordanfox@gmail.com
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-opacity-primary">
                                  Pending
                                </span>
                              </td>
                              <td>
                                <div className="font-weight-bold  text-dark mb-1">
                                  3,42,230
                                </div>
                                <div className="font-weight-medium">
                                  Earning
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row flex-grow">
                <div className="col-xl-4 grid-margin stretch-card flex-column d-flex">
                  <div className="row flex-grow">
                    <div className="col-sm-12 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="pb-3 mb-3 border-bottom">
                            <div className="d-flex align-items-center">
                              <div className="recent-earnings">
                                <i className="mdi mdi-briefcase"></i>
                              </div>
                              <div>
                                <h3 className="text-dark font-weight-bold">
                                  $429536
                                </h3>
                                <h6 className="text-dark font-weight-bold">
                                  RECENT EARNINGS
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="text-center">
                              <p className="mb-1">Tickets Sold</p>
                              <h6 className="text-dark font-weight-bold">
                                24995
                              </h6>
                            </div>
                            <div className="text-center">
                              <p className="mb-1">Tickets Available</p>
                              <h6 className="text-dark font-weight-bold">
                                12,281
                              </h6>
                            </div>
                            <div className="text-center">
                              <p className="mb-1">Revenue</p>
                              <h6 className="text-dark font-weight-bold">
                                11,200
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 grid-margin-md stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-8">
                              <h4 className="card-title">
                                Switch to Direct Plans
                              </h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do.
                              </p>
                              <button
                                type="button"
                                className="btn btn-outline-primary mt-3"
                              >
                                Plan Switch
                              </button>
                            </div>
                            <div className="col-sm-4">
                              <img
                                src="../../images/dashboard/group.png"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 grid-margin stretch-card flex-column">
                  <div className="row flex-grow">
                    <div className="col-sm-12 grid-margin-md stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="pb-3 pt-0 border-bottom">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <div className="d-flex align-items-center">
                                  <i className="mdi mdi-account-outline mdi-24px mr-3 text-primary"></i>
                                  <h6 className="text-dark font-weight-bold mb-0">
                                    Profile
                                  </h6>
                                </div>
                              </div>
                              <div>
                                <div className="d-flex  align-items-center">
                                  <h6 className="mb-0">Profile Verified</h6>
                                  <i className="mdi mdi-chevron-right mdi-24px ml-2 text-primary"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="py-3 border-bottom">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <div className="d-flex align-items-center">
                                  <i className="mdi mdi-layers-outline mdi-24px mr-3 text-primary"></i>
                                  <h6 className="text-dark font-weight-bold mb-0">
                                    My Orders
                                  </h6>
                                </div>
                              </div>
                              <div>
                                <div className="d-flex  align-items-center">
                                  <h6 className="mb-0">6 Pending</h6>
                                  <i className="mdi mdi-chevron-right mdi-24px ml-2 text-primary"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="py-3 border-bottom">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <div className="d-flex align-items-center">
                                  <i className="mdi mdi-shield-outline mdi-24px mr-3 text-primary"></i>
                                  <h6 className="text-dark font-weight-bold mb-0">
                                    Watchlist
                                  </h6>
                                </div>
                              </div>
                              <div>
                                <div className="d-flex  align-items-center">
                                  <h6 className="mb-0">343 Funds</h6>
                                  <i className="mdi mdi-chevron-right mdi-24px ml-2 text-primary"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="py-3 border-bottom">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <div className="d-flex align-items-center">
                                  <i className="mdi mdi-tag-outline mdi-24px mr-3 text-primary"></i>
                                  <h6 className="text-dark font-weight-bold mb-0">
                                    Pricing
                                  </h6>
                                </div>
                              </div>
                              <div>
                                <div className="d-flex  align-items-center">
                                  <h6 className="mb-0">343 Funds</h6>
                                  <i className="mdi mdi-chevron-right mdi-24px ml-2 text-primary"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="py-3 border-bottom">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <div className="d-flex align-items-center">
                                  <i className="mdi mdi-calculator mdi-24px mr-3 text-primary"></i>
                                  <h6 className="text-dark font-weight-bold mb-0">
                                    Calculators
                                  </h6>
                                </div>
                              </div>
                              <div>
                                <div className="d-flex  align-items-center">
                                  <h6 className="mb-0">Calculate profits</h6>
                                  <i className="mdi mdi-chevron-right mdi-24px ml-2 text-primary"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="py-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <div className="d-flex align-items-center">
                                  <i className="mdi mdi-logout mdi-24px mr-3 text-primary"></i>
                                  <h6 className="text-dark font-weight-bold mb-0">
                                    Logout
                                  </h6>
                                </div>
                              </div>
                              <div>
                                <div className="d-flex  align-items-center">
                                  <h6 className="mb-0">Logout</h6>
                                  <i className="mdi mdi-chevron-right mdi-24px ml-2 text-primary"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 grid-margin stretch-card flex-column">
                  <div className="row flex-grow">
                    <div className="col-sm-12 grid-margin-md stretch-card d-flex">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-between mb-3">
                            <h4 className="card-title">
                              Switch to Direct Plans
                            </h4>
                            <h6>
                              <a href="#" className="text-primary">
                                See 4 More
                              </a>
                            </h6>
                          </div>
                          <div className="border p-3 mb-3">
                            <div className="border-bottom pb-3">
                              <div className="row">
                                <div className="col-sm-4 border-right-lg border-right-md-0">
                                  <div className="d-flex justify-content-center align-items-center">
                                    <h1 className="mb-0 mr-2 text-primary font-weight-normal">
                                      04
                                    </h1>
                                    <div>
                                      <p className="font-weight-bold mb-0 text-dark">
                                        Feb
                                      </p>
                                      <p className="mb-0">2018</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-8 pl-3">
                                  <p className="text-dark font-weight-bold mb-0">
                                    Lorem ipsum dolor sit amit
                                  </p>
                                  <p className="mb-0">9.30 PM - 10:30 PM</p>
                                </div>
                              </div>
                            </div>
                            <div className="pt-3">
                              <div className="row">
                                <div className="col-sm-4 border-right-lg border-right-md-0">
                                  <div className="d-flex justify-content-center align-items-center">
                                    <h1 className="mb-0 mr-2 text-primary font-weight-normal">
                                      15
                                    </h1>
                                    <div>
                                      <p className="font-weight-bold mb-0 text-dark">
                                        Mar
                                      </p>
                                      <p className="mb-0">2018</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-8 pl-3">
                                  <p className="text-dark font-weight-bold mb-0">
                                    Lorem ipsum dolor sit amit
                                  </p>
                                  <p className="mb-0">10.00 PM - 12:30 PM</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border p-3">
                            <div className="border-bottom pb-3">
                              <div className="row">
                                <div className="col-sm-4 border-right-lg border-right-md-0">
                                  <div className="d-flex justify-content-center align-items-center">
                                    <h1 className="mb-0 mr-2 text-primary font-weight-normal">
                                      22
                                    </h1>
                                    <div>
                                      <p className="font-weight-bold mb-0 text-dark">
                                        Apr
                                      </p>
                                      <p className="mb-0">2018</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-8 pl-3">
                                  <p className="text-dark font-weight-bold mb-0">
                                    Lorem ipsum dolor sit amit
                                  </p>
                                  <p className="mb-0">9.30 PM - 10:30 PM</p>
                                </div>
                              </div>
                            </div>
                            <div className="pt-3">
                              <div className="row">
                                <div className="col-sm-4 border-right-lg border-right-md-0">
                                  <div className="d-flex justify-content-center align-items-center">
                                    <h1 className="mb-0 mr-2 text-primary font-weight-normal">
                                      26
                                    </h1>
                                    <div>
                                      <p className="font-weight-bold mb-0 text-dark">
                                        Jun
                                      </p>
                                      <p className="mb-0">2018</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-8 pl-3">
                                  <p className="text-dark font-weight-bold mb-0">
                                    Lorem ipsum dolor sit amit
                                  </p>
                                  <p className="mb-0">10.00 PM - 12:30 PM</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-xl-4 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body px-0 pb-0 border-bottom">
                      <div className="px-4">
                        <div className="d-flex justify-content-between mb-2">
                          <h4 className="card-title ml-2">Calender</h4>
                          <h6>
                            <a
                              href="pages/apps/calendar.html"
                              className="text-primary"
                            >
                              Go to Calender
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-1 border-bottom">
                      <div className="px-4">
                        <div
                          id="inline-datepicker-dashboard"
                          className="datepicker inline-datepicker-dashboard"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-xl-4 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center text-dark">
                        <h1>$234/m.</h1>
                        <button
                          type="button"
                          className="btn btn-inverse-primary btn-sm"
                        >
                          New
                        </button>
                      </div>
                      <h3 className="text-dark">For Business Plans</h3>
                      <p className="border-bottom text-dark pb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>
                      <div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                          <h6 className="text-dark">Storage capacity</h6>
                          <h6 className="font-weight-medium text-dark">
                            650GB
                          </h6>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                          <h6 className="text-dark">Online support</h6>
                          <h6 className="font-weight-medium text-dark">24/7</h6>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                          <h6 className="text-dark">Daily Updates</h6>
                          <h6 className="font-weight-medium text-dark">
                            Unlimited
                          </h6>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                          <h6 className="text-dark">Visitors Monitoring</h6>
                          <h6 className="font-weight-medium text-dark">342</h6>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                          <h6 className="text-dark">Email Account</h6>
                          <h6 className="font-weight-medium text-dark">Free</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-xl-4 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body px-0 pb-0 border-bottom">
                      <div className="px-4 pb-3">
                        <div className="d-flex justify-content-between align-items-center text-dark">
                          <div className="d-flex align-items-center">
                            <h6 className="mb-0 ml-1">Login</h6>
                            <p className="mb-0 ml-2">welcome back</p>
                          </div>
                          <a
                            href="pages/samples/register.html"
                            className="btn btn-link text-primary font-weight-bold mr-1 p-0"
                          >
                            Sign up
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-1 border-bottom">
                      <div className="px-4">
                        <form className="dashboard-login mt-2">
                          <div className="form-group">
                            <label
                              htmlFor="Login"
                              className=" text-dark text-small"
                            >
                              Your login or email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="Login"
                              placeholder="Login"
                            />
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="pwd"
                              className=" text-dark text-small"
                            >
                              Your Password:
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="pwd"
                              placeholder="Your Password"
                            />
                          </div>
                          <div className="form-group form-check">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />{" "}
                              Remember me
                            </label>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary btn-md btn-block mb-2"
                          >
                            Login
                          </button>
                          <a href="#" className="auth-link text-small">
                            Forgot password?
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-xl-4 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">App Categories</h4>
                      <div className="progress grouped mt-4">
                        <div
                          className="progress-bar  bg-danger"
                          role="progressbar"
                          style={{width: "25%"}}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{width: "16%"}}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <div
                          className="progress-bar  bg-primary"
                          role="progressbar"
                          style={{width: "10%"}}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{width: "25%"}}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{width: "12%"}}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <div
                          className="progress-bar bg-light"
                          role="progressbar"
                          style={{width: "12%"}}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <div
                          className="progress-bar bg-dark"
                          role="progressbar"
                          style={{width: "12%"}}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="app-categories-legend mt-4">
                        <div className="d-flex justify-content-between legend-label align-items-center">
                          <div className="d-flex align-items-center">
                            <span className="bg-danger"></span>News
                          </div>
                          <div>25% 34m</div>
                        </div>
                        <div className="d-flex justify-content-between legend-label align-items-center">
                          <div className="d-flex">
                            <span className="bg-info"></span>Social Media
                          </div>
                          <div>16% 15m</div>
                        </div>
                        <div className="d-flex justify-content-between legend-label align-items-center">
                          <div className="d-flex align-items-center">
                            <span className="bg-primary"></span>Email
                          </div>
                          <div>10% 27m</div>
                        </div>
                        <div className="d-flex justify-content-between legend-label align-items-center">
                          <div className="d-flex align-items-center">
                            <span className="bg-warning"></span>Entertainment
                          </div>
                          <div>25% 56m</div>
                        </div>
                        <div className="d-flex justify-content-between legend-label align-items-center">
                          <div className="d-flex align-items-center">
                            <span className="bg-success"></span>Apps
                          </div>
                          <div>12% 12m</div>
                        </div>
                        <div className="d-flex justify-content-between legend-label align-items-center pb-0">
                          <div className="d-flex align-items-center">
                            <span className="bg-dark"></span>Apps
                          </div>
                          <div>12% 12m</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-xl-4 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Notifications & Update</h4>
                      <div className="mt-4">
                        <div className="mb-3">
                          <span className="badge badge-opacity-primary mb-2">
                            Tomorrow
                          </span>
                          <h6 className="text-dark font-weight-bold">
                            Glen Hines
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="mb-3">
                          <span className="badge badge-opacity-primary mb-2">
                            Monday
                          </span>
                          <h6 className="text-dark font-weight-bold">
                            Nannie Rodgers
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="mb-3">
                          <span className="badge badge-opacity-primary mb-2">
                            Saturday
                          </span>
                          <h6 className="text-dark font-weight-bold">
                            Susie Mullins
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-xl-4 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body px-0 border-bottom">
                      <div className="px-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <h4 className="card-title ml-1 mb-0">
                            Transaction History
                          </h4>
                          <h6 className="mr-1 mb-0">
                            <a href="#" className="text-primary">
                              Show All
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="transaction-history-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="transaction-history-brand transaction-history-brand-success">
                              H
                            </div>
                            <h6 className="text-dark">HSBC</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <i className="mdi mdi-arrow-top-left text-success mr-1"></i>
                            <h6 className="text-dark font-weight-bold">
                              $ 14,000
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="transaction-history-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="transaction-history-brand transaction-history-brand-warning">
                              G
                            </div>
                            <h6 className="text-dark">G4S</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <i className="mdi mdi-arrow-bottom-right text-danger mr-1"></i>
                            <h6 className="text-dark font-weight-bold">
                              $ 34,000
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="transaction-history-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="transaction-history-brand transaction-history-brand-primary">
                              J
                            </div>
                            <h6 className="text-dark">John Lewis & Partners</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <i className="mdi mdi-arrow-top-left text-success mr-1"></i>
                            <h6 className="text-dark font-weight-bold">
                              $ 23,000
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="transaction-history-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="transaction-history-brand transaction-history-brand-danger">
                              J
                            </div>
                            <h6 className="text-dark">Clarks</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <i className="mdi mdi-arrow-bottom-right text-danger mr-1"></i>
                            <h6 className="text-dark font-weight-bold">
                              $ 65,000
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="transaction-history-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="transaction-history-brand transaction-history-brand-primary">
                              J
                            </div>
                            <h6 className="text-dark">Lush Cosmetics</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <i className="mdi mdi-arrow-top-left text-success mr-1"></i>
                            <h6 className="text-dark font-weight-bold">
                              $ 77,000
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="transaction-history-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="transaction-history-brand transaction-history-brand-danger">
                              J
                            </div>
                            <h6 className="text-dark">Lush Cosmetics</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <i className="mdi mdi-arrow-bottom-right text-danger mr-1"></i>
                            <h6 className="text-dark font-weight-bold">
                              $ 77,000
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- content-wrapper ends --> */}
            {/* <!-- partial:partials/_footer.html --> */}
            <footer className="footer">
              <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                  Copyright © 2018{" "}
                  <a href="https://www.urbanui.com/" target="_blank">
                    Urbanui
                  </a>
                  . All rights reserved.
                </span>
                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                  Hand-crafted & made with{" "}
                  <i className="mdi mdi-heart text-danger"></i>
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>

      // <div style={{ height: "75vh" }} className="container valign-wrapper">
      //   <div className="row">
      //     <div className="col s12 center-align">
      //       <h4>
      //         <b>Hey there,</b>
      //         {/* <b>Hey there,</b> {user.name.split(" ")[0]} */}
      //         <p className="flow-text grey-text text-darken-1">
      //           You are logged into the Dashboard{" "}
      //         </p>
      //       </h4>
      //       <button
      //         style={{
      //           width: "150px",
      //           borderRadius: "3px",
      //           letterSpacing: "1.5px",
      //           marginTop: "1rem"
      //         }}
      //         onClick={this.onLogoutClick}
      //         className="btn btn-large waves-effect waves-light hoverable blue accent-3"
      //       >
      //         Logout
      //       </button>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
