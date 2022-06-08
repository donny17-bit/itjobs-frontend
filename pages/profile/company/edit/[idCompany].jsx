import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "../../../../utils/axios";
import Layout from "../../../../components/Layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompanyById,
  updateProfileCompany,
} from "../../../../store/action/company";

function EditCompany() {
  const router = useRouter();
  const { idCompany } = router.query;

  const dispatch = useDispatch();
  const company = useSelector((state) => state.company);

  const [data, setData] = useState(company.data[0]);
  const [sosMed, setSosMed] = useState(data.socialMedia.split(","));
  const [form, setForm] = useState(data);
  const [simpan, setSimpan] = useState(false);
  const [profileImg, setProfileImg] = useState({});
  const [image, setImage] = useState(process.env.URL_CLOUDINARY + data.image);

  const getCompanyId = async (id) => {
    const result = await dispatch(getCompanyById(id));
    setData(result.value.data.data[0]);
  };

  const defaultImage =
    "https://cdn-icons-png.flaticon.com/512/7024/7024005.png";

  const formChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const editBtn = (e) => {
    setSimpan(true);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await dispatch(
      updateProfileCompany(idCompany, {
        ...form,
        socialMedia: `${form.ig},${form.linkedin}`,
      })
    );

    alert("sukses update company profile");
    getCompanyId(idCompany);
    // socialMedia: `${dataDiri.ig},${dataDiri.github},${dataDiri.gitlab}`,
  };

  const imgChange = (e) => {
    const { name, value, files } = e.target;

    setProfileImg({ ...profileImg, image: files[0] });
    setImage(URL.createObjectURL(files[0]));
  };

  const saveImg = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const dataForm in profileImg) {
      formData.append(dataForm, profileImg[dataForm]);
    }

    const result = await axios.patch(
      `company/updateCompanyImage/${idCompany}`,
      formData
    );
    setSimpan(false);

    alert("sukses update profile image");
    getCompanyId(idCompany);
  };

  return (
    <Layout title={"Edit Profile | itJobs"}>
      <div className="container-fluid profile_container">
        <form onSubmit={submitForm}>
          <div className="row m-0">
            <div className="col-md-3 profile_card_container p-0">
              <div className="card pb-1 pt-4 profile_card">
                <div className="text-center">
                  <img
                    src={data.image ? image : defaultImage}
                    className="card-img-top border profile_img"
                    alt="..."
                  />
                  <p>
                    <input
                      type="file"
                      id="actual-btn"
                      name="userImg"
                      onChange={(e) => imgChange(e)}
                      hidden
                    />
                    <label
                      for="actual-btn"
                      className="btn btn-link profile_edit_btn mb-0 pb-0"
                      onClick={(e) => editBtn(e)}
                    >
                      <i className="bi bi-pencil"></i> Edit
                    </label>
                  </p>
                  {simpan ? (
                    <button
                      className="btn btn-primary"
                      onClick={(e) => saveImg(e)}
                    >
                      Simpan
                    </button>
                  ) : (
                    ``
                  )}
                </div>
                <div className="card-body mt-2">
                  <h5 className="card-title profile_name pb-0 mb-0">
                    {data.companyName}
                  </h5>
                  <p className="card-title profile_job m-0">
                    {data.companyField}
                  </p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0 p-2 ps-0 profile_text">
                      <i className="bi bi-geo-alt"></i> {data.address}
                    </li>
                  </ul>
                  <p className="card-text profile_text">{data.description}</p>
                </div>
              </div>
              <div className="d-grid mt-3 mb-3">
                <button type="submit" className="btn btn-primary">
                  Simpan
                </button>
              </div>
              <div className="d-grid mt-3 mb-3">
                <button
                  type="reset"
                  className="btn btn-outline-primary"
                  onClick={() => router.push(`/profile/company/${idCompany}`)}
                >
                  Kembali
                </button>
              </div>
            </div>
            <div className="col-sm">
              <div className="row mb-4 pb-4 profile_col_container">
                <div className="row m-0 border-bottom ps-2 pt-4">
                  <label className="col-md-2 profile_edit_title text-center">
                    Data diri
                  </label>
                </div>
                <div className="row m-0 g-3 pt-1 p-3">
                  <div className="col-sm-12">
                    <label className="form-label profile_edit_label">
                      Nama perusahaan
                    </label>
                    <input
                      type="text"
                      className="form-control profile_edit_input"
                      placeholder="Masukkan nama perusahaan"
                      name="companyName"
                      onChange={(e) => formChange(e)}
                      value={form.companyName}
                    />
                  </div>
                  <div className="col-sm-12">
                    <label className="form-label profile_edit_label">
                      Bidang
                    </label>
                    <input
                      type="text"
                      className="form-control profile_edit_input"
                      placeholder="Masukan bidang perusahaan ex : Financial"
                      name="companyField"
                      onChange={(e) => formChange(e)}
                      value={form.companyField}
                    />
                  </div>
                  <div className="col-sm-12">
                    <label className="form-label profile_edit_label">
                      Domisili
                    </label>
                    <input
                      type="text"
                      className="form-control profile_edit_input"
                      placeholder="Masukkan domisili"
                      name="address"
                      onChange={(e) => formChange(e)}
                      value={form.address}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label profile_edit_label">
                      Deskripsi singkat
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="description"
                      rows="5"
                      placeholder="Tulis deskripsi singkat"
                      onChange={(e) => formChange(e)}
                      value={form.description}
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <label className="form-label profile_edit_label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control profile_edit_input"
                      placeholder="Masukkan email"
                      name="email"
                      onChange={(e) => formChange(e)}
                      value={form.email}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label profile_edit_label">
                      Nomor telepon
                    </label>
                    <input
                      type="text"
                      className="form-control profile_edit_input"
                      placeholder="Masukkan nomor telepon"
                      name="noTelp"
                      onChange={(e) => formChange(e)}
                      value={form.noTelp}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label profile_edit_label">
                      Instagram
                    </label>
                    <input
                      type="text"
                      className="form-control profile_edit_input"
                      placeholder="Masukkan username IG"
                      name="ig"
                      onChange={(e) => formChange(e)}
                      value={sosMed[0]}
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="form-label profile_edit_label">
                      LinkedIn
                    </label>
                    <input
                      type="text"
                      className="form-control profile_edit_input"
                      placeholder="Masukkan LinkedIn"
                      name="linkedin"
                      onChange={(e) => formChange(e)}
                      value={sosMed[1]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default EditCompany;
