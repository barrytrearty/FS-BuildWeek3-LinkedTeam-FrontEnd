import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faQuestion } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4 d-flex mx-5">
    <div className="container-fluid text-md-left">
      <div className="row">
        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-0 mb-md-0 mb-3 mr-1"></div>
        <div className="col-md-2 mb-md-0 mb-3">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
            
            id="linkedinlogo"
            className="d-inline-block align-top"
          />

          <ul className="list-unstyled mb-4">
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!">Community Guidelines</a>
            </li>
            <li>
              <a href="#!">Privacy and Terms</a>
            </li>
            <li>
              <a href="#!">Sales Solutions</a>
            </li>
            <li>
              <a href="#!">Safety Center</a>
            </li>
          </ul>
        </div>

        <div className="col-md-2 mt-4">
          <ul className="list-unstyled mt-1">
            <li>
              <a href="#!">Accessibility</a>
            </li>
            <li>
              <a href="#!">Careers</a>
            </li>
            <li>
              <a href="#!">Ad Choices</a>
            </li>
            <li>
              <a href="#!">Mobile</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2 mt-4">
          <ul className="list-unstyled mt-1">
            <li>
              <a href="#!">Talent Solutions</a>
            </li>
            <li>
              <a href="#!">Marketing Solutions</a>
            </li>
            <li>
              <a href="#!">Advertising</a>
            </li>
            <li>
              <a href="#!">Small Business</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 mt-4">
          <ul className="list-unstyled">
            <li>
              <FontAwesomeIcon className="mt-2" icon={faQuestion} />
              <a className="ml-3" href="#!">
                Questions?
              </a>
            </li>
            <li>
              <a href="#!">Visit our Help Center.</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faSearch} />
              <a className="ml-3" style={{ color: "#cb6bdb" }} href="#!">
                Manage your account and privacy
              </a>
            </li>
            <li>
              <a href="#!">Go to your Settings.</a>
            </li>
          </ul>
        </div>
        <div class="dropdownButton mt-4">
          <p className="selectLanguage">Select Language</p>
          <DropdownButton
            variant="outline-dark"
            id="dropdown-basic-button"
            title="English (English)"
          >
            <Dropdown.Item href="#/action-1">Finnish</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
            <Dropdown.Item href="#/action-3">German</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="col-md-1 mb-md-0 mb-3 mr-5"></div>
        <div className="col-md-12 footer-copyright text-left">
          <ul className="list-unstyled">
            <li>
              <a href="#!">Linkedin Corporation © 2021</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

// const Footer = () => (
//   <footer className="page-footer font-small blue pt-4">
//     <div className="container-fluid text-center text-md-left">
//       <div className="row">
//         <hr className="clearfix w-100 d-md-none pb-0" />

//         <div className="col-md-1 mb-md-0 mb-3 mr-5"></div>
//         <div className="col-md-2 mb-md-0 mb-3">
//           <img
//             alt=""
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
//             width="120"
//             height="auto"
//             className="d-inline-block align-top"
//           />

//           <ul className="list-unstyled mb-5">
//             <li>
//               <a href="#!">About</a>
//             </li>
//             <li>
//               <a href="#!">Community Guidelines</a>
//             </li>
//             <li>
//               <a href="#!">Privacy and Terms</a>
//             </li>
//             <li>
//               <a href="#!">Sales Solutions</a>
//             </li>
//             <li>
//               <a href="#!">Safety Center</a>
//             </li>
//           </ul>
//         </div>

//         {/* const Footer = () => <footer className="page-footer font-small blue pt-4">
//     <div className="container-fluid text-md-left">
//         <div className="row">

//         <div className="col-md-2 mt-4"> */}
//         <ul className="list-unstyled">
//           <li>
//             <a href="#!">Accessibility</a>
//           </li>
//           <li>
//             <a href="#!">Careers</a>
//           </li>
//           <li>
//             <a href="#!">Ad Choices</a>
//           </li>
//           <li>
//             <a href="#!">Mobile</a>
//           </li>
//         </ul>
//       </div>
//       <div className="col-md-2 mt-4">
//         <ul className="list-unstyled">
//           <li>
//             <a href="#!">Talent Solutions</a>
//           </li>
//           <li>
//             <a href="#!">Marketing Solutions</a>
//           </li>
//           <li>
//             <a href="#!">Advertising</a>
//           </li>
//           <li>
//             <a href="#!">Small Business</a>
//           </li>
//         </ul>
//       </div>
//       <div className="col-md-2 mt-4">
//         <ul className="list-unstyled">
//           <li>
//             <FontAwesomeIcon icon={faQuestion} />
//             <a className="ml-3" href="#!">
//               Questions?
//             </a>
//           </li>
//           <li>
//             <a href="#!">Visit our Help Center.</a>
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faSearch} />
//             <a className="ml-3" href="#!">
//               Manage your account and privacy
//             </a>
//           </li>
//           <li>
//             <a href="#!">Go to your Settings.</a>
//           </li>
//         </ul>
//       </div>
//       <div class="dropdownButton mt-5">
//         <p>Select Language</p>
//         <DropdownButton
//           variant="outline-dark"
//           id="dropdown-basic-button"
//           title="English (English)"
//         >
//           <Dropdown.Item href="#/action-1">Finnish</Dropdown.Item>
//           <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
//           <Dropdown.Item href="#/action-3">German</Dropdown.Item>
//         </DropdownButton>
//       </div>

//       <div className="col-md-1 mb-md-0 mb-3 mr-5"></div>
//       <div className="footer-copyright text-left">
//         <p>Linkedin Corporation © 2021</p>
//       </div>
//     </div>

//     <div className="col-md-0 mb-md-0 mb-3 mr-1"></div>
//     <div className="col-md-2 mb-md-0 mb-3">
//       <img
//         alt=""
//         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
//         width="120"
//         height="auto"
//         className="d-inline-block align-top"
//       />

//       <ul className="list-unstyled mb-4">
//         <li>
//           <a href="#!">About</a>
//         </li>
//         <li>
//           <a href="#!">Community Guidelines</a>
//         </li>
//         <li>
//           <a href="#!">Privacy and Terms</a>
//         </li>
//         <li>
//           <a href="#!">Sales Solutions</a>
//         </li>
//         <li>
//           <a href="#!">Safety Center</a>
//         </li>
//       </ul>
//     </div>

//     <div className="col-md-2 mt-4">
//       <ul className="list-unstyled mt-1">
//         <li>
//           <a href="#!">Accessibility</a>
//         </li>
//         <li>
//           <a href="#!">Careers</a>
//         </li>
//         <li>
//           <a href="#!">Ad Choices</a>
//         </li>
//         <li>
//           <a href="#!">Mobile</a>
//         </li>
//       </ul>
//     </div>
//     <div className="col-md-2 mt-4">
//       <ul className="list-unstyled mt-1">
//         <li>
//           <a href="#!">Talent Solutions</a>
//         </li>
//         <li>
//           <a href="#!">Marketing Solutions</a>
//         </li>
//         <li>
//           <a href="#!">Advertising</a>
//         </li>
//         <li>
//           <a href="#!">Small Business</a>
//         </li>
//       </ul>
//     </div>
//     <div className="col-md-3 mt-4">
//       <ul className="list-unstyled">
//         <li>
//           <FontAwesomeIcon className="mt-2" icon={faQuestion} />
//           <a className="ml-3" href="#!">
//             Questions?
//           </a>
//         </li>
//         <li>
//           <a href="#!">Visit our Help Center.</a>
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faSearch} />
//           <a className="ml-3" style={{ color: "#cb6bdb" }} href="#!">
//             Manage your account and privacy
//           </a>
//         </li>
//         <li>
//           <a href="#!">Go to your Settings.</a>
//         </li>
//       </ul>
//     </div>
//     <div class="dropdownButton mt-5">
//       <p className="selectLanguage">Select Language</p>
//       <DropdownButton
//         variant="outline-dark"
//         id="dropdown-basic-button"
//         title="English (English)"
//       >
//         <Dropdown.Item href="#/action-1">Finnish</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">German</Dropdown.Item>
//       </DropdownButton>
//     </div>
//     <div className="col-md-1 mb-md-0 mb-3 mr-5"></div>
//     <div className="col-md-12 footer-copyright text-left">
//       <ul className="list-unstyled">
//         <li>
//           <a href="#!">Linkedin Corporation © 2021</a>
//         </li>
//       </ul>
//     </div>
//   </footer>
// );

export default Footer;
