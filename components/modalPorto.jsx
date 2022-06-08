import Image from "next/image";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "../utils/axios";

export default function ModalPorto(props) {
  const { appName, image, publicationLink, linkRepo, workPlace } = props.data;
  console.log(props.data);

  const hanldeLink = () => {
    window.open(`https://${linkRepo}`, "_blank");
  };

  const hanldeLinkPub = () => {
    window.open(`https://${publicationLink}`, "_blank");
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{appName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <Image
              src={process.env.URL_CLOUDINARY + image}
              width={500}
              height={300}
              objectFit="contain"
            />
          </div>
          <p>Tempat Kerja Terkait : {workPlace}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={hanldeLink}>
            Link Repo
          </button>
          <button className="btn btn-primary" onClick={hanldeLinkPub}>
            Link Publication
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
