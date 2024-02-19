import { Col } from "react-bootstrap";
import React from "react";

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="cardimage" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <span style={{ display: 'block', marginTop: '10px' }}>
            <a href={link} className="pill-button">Go to</a>
          </span>
        </div>

      </div>
    </Col>
  )
}