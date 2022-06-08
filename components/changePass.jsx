import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import axios from "../utils/axios";

export default function ChangePass(props) {
  const [pass, setPass] = useState();
  const { id } = props.data;

  const changePassword = (e) => {
    setPass({ ...pass, [e.target.name]: e.target.value });
  };

  const submitPass = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.patch(`user/updatePassword/${id}`, pass);
      alert("sukses change password");
    } catch (error) {
      alert(`${error.response.data.msg}`);
    }
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ubah Password</Modal.Title>
        </Modal.Header>
        <form onSubmit={submitPass}>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-12">
                <label className="form-label profile_edit_label">
                  Current password
                </label>
                <input
                  type="text"
                  name="currentPassword"
                  className="form-control profile_edit_input"
                  placeholder={"Masukkan password saat ini"}
                  onChange={(e) => changePassword(e)}
                />
              </div>
              <div className="col-sm-12">
                <label className="form-label profile_edit_label">
                  Password baru
                </label>
                <input
                  type="text"
                  name="newPassword"
                  className="form-control profile_edit_input"
                  placeholder={"Masukkan password baru"}
                  onChange={(e) => changePassword(e)}
                />
              </div>
              <div className="col-sm-12">
                <label className="form-label profile_edit_label">
                  Konfirmasi password baru
                </label>
                <input
                  type="text"
                  name="confirmPassword"
                  className="form-control profile_edit_input"
                  placeholder={"Silahkan konfirmasi password"}
                  onChange={(e) => changePassword(e)}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" className="profile_btn">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
