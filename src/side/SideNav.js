import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
import SidenavCard from "../components/cards/SidenavCard";
import NavBox from "../sidebar/NavBox";
import NavBoxSub from "../sidebar/NavBoxSub";
import Navigator from "../sidebar/Navigator";
import Sidebar from "../sidebar/Sidebar";

export default function SideNav() {
  const [state, setState] = useState({
    onProfileToggle: false,
    onAdmissionToggle: false,
    onExCurricularToggle: false,
    onLeavingCertificateToggle: false,
    onPromotionToggle: false,
    isChecked: false,
  });

  //profile toggling
  //profile toggling
  //profile toggling
  const expandProfileMenu = (e) => {
    if (!state.onProfileToggle) {
      setState({
        onProfileToggle: true,
        onAdmissionToggle: false,
        onExCurricularToggle: false,
        onLeavingCertificateToggle: false,
        onPromotionToggle: false,
        isChecked: true,
      });
    }
    if (state.onProfileToggle) {
      setState({
        onProfileToggle: false,
        onAdmissionToggle: false,
        onExCurricularToggle: false,
        onLeavingCertificateToggle: false,
        onPromotionToggle: false,
        isChecked: true,
      });
    }
  };

  //admission toggling
  const expandAdmissionMenu = (e) => {
    if (!state.onAdmissionToggle) {
      setState({
        onProfileToggle: false,
        onAdmissionToggle: true,
        onExCurricularToggle: false,
        onLeavingCertificateToggle: false,
        onPromotionToggle: false,
        isChecked: true,
      });
    }

    if (state.onAdmissionToggle) {
      setState({
        onProfileToggle: false,
        onAdmissionToggle: false,
        onExCurricularToggle: false,
        onLeavingCertificateToggle: false,
        onPromotionToggle: false,
        isChecked: false,
      });
    }
  };

  //extra curricular toggle
  const expandExCurricularMenu = (e) => {
    if (!state.onExCurricularToggle) {
      setState({
        onProfileToggle: false,
        onAdmissionToggle: false,
        onExCurricularToggle: true,
        onLeavingCertificateToggle: false,
        onPromotionToggle: false,
        isChecked: true,
      });
    }
    if (state.onExCurricularToggle) {
      setState({
        onProfileToggle: false,
        onAdmissionToggle: false,
        onExCurricularToggle: false,
        onLeavingCertificateToggle: false,
        onPromotionToggle: false,
        isChecked: false,
      });
    }
  };

  //leaving certificate toggle
  const expandLeavingCertificateMenu = (e) => {
    if (!state.onLeavingCertificateToggle) {
      setState({
        onProfileToggle: false,
        onAdmissionToggle: false,
        onExCurricularToggle: false,
        onLeavingCertificateToggle: true,
        onPromotionToggle: false,
        isChecked: true,
      });
    }
    if (state.onLeavingCertificateToggle) {
      setState({
        onProfileToggle: false,
        onAdmissionToggle: false,
        onExCurricularToggle: false,
        onLeavingCertificateToggle: false,
        onPromotionToggle: false,
        isChecked: false,
      });
    }
  };

  const collapseProfileMenu = () => {
    if (!state.onProfileToggle) {
      setState({
        onProfileToggle: false,
        onAdmissionToggle: false,
        isChecked: true,
      });
    }
  };

  const activateTab = (e) => {
    setState({
      isChecked: true,
    });
  };

  return (
    <Sidebar>
      <SidenavCard>
        {/* <img style={{ height: "99px", padding: "0.8em" }} src={Img}></img> */}
      </SidenavCard>

      <Navigator>
        <NavBox isChecked={state.isChecked} onClick={(e) => activateTab(e)}>
          <Link to="/student/dashboard">Dashboard</Link>
        </NavBox>
        <NavBox
          isChecked={state.isChecked}
          onClick={(e) => expandProfileMenu(e)}
        >
          <Link>Profile</Link>
          {state.onProfileToggle && (
            <div>
              <Link to="/student/profile/view">
                <NavBoxSub>
                  <Link to="/student/profile/view">View</Link>
                </NavBoxSub>
              </Link>
              <Link to="/student/profile/edit">
                <NavBoxSub>
                  <Link to="/student/profile/edit">Edit</Link>
                </NavBoxSub>
              </Link>
            </div>
          )}
        </NavBox>
        <NavBox isChecked onClick={() => expandAdmissionMenu()}>
          <NavLink>Admission</NavLink>
          {state.onAdmissionToggle && (
            <div>
              <Link to="/student/admission/new">
                <NavBoxSub>
                  <Link to="/student/admission/new">New</Link>
                </NavBoxSub>
              </Link>
              <Link to="/student/admission/manage">
                <NavBoxSub>
                  <Link to="/student/admission/manage">Edit</Link>
                </NavBoxSub>
              </Link>
            </div>
          )}
        </NavBox>
        <NavBox isChecked={false} onClick={() => expandExCurricularMenu()}>
          <NavLink>Ex.Curricular&nbsp;Activities</NavLink>
          {state.onExCurricularToggle && (
            <div>
              <Link to="/student/excurricular/add">
                <NavBoxSub>
                  <Link to="/student/excurricular/add">Add</Link>
                </NavBoxSub>
              </Link>
              <Link to="/student/excurricular/edit">
                <NavBoxSub>
                  <Link to="/student/excurricular/add">Edit</Link>
                </NavBoxSub>
              </Link>
            </div>
          )}
        </NavBox>
        <NavBox
          isChecked={false}
          onClick={() => expandLeavingCertificateMenu()}
        >
          <NavLink>Leaving&nbsp;Certificate</NavLink>
          {state.onLeavingCertificateToggle && (
            <div>
              <Link to="/student/leavingcertificate/add">
                <NavBoxSub>
                  <Link to="/student/excurricular/add">New</Link>
                </NavBoxSub>
              </Link>
              <Link to="/student/excurricular/edit">
                <NavBoxSub>
                  <Link to="/student/excurricular/edit">Edit</Link>
                </NavBoxSub>
              </Link>
            </div>
          )}
        </NavBox>
        <NavBox isChecked={false}>
          <Link to="/student/classconfig">
            <NavLink to="/student/classconfig">Class Configuration</NavLink>
          </Link>
        </NavBox>
        <NavBox isChecked={false}>
          <Link to="/student/classallocation">
            <NavLink to="/student/classallocation">
              Classroom Allocation
            </NavLink>
          </Link>
        </NavBox>
        <NavBox isChecked={false}>
          <Link to="/student/promotion">
            <NavLink to="/student/promotion">Promotion</NavLink>
          </Link>
        </NavBox>
      </Navigator>
    </Sidebar>
  );
}
