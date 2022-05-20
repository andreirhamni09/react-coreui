import React from 'react'
import axios from 'axios'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormInput,
  CFormLabel,
  CButton,
  CFormSelect,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardFooter,
} from '@coreui/react'

import { DocsCallout, DocsExample } from 'src/components'
export default class Usernew extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    phone: '',
    role: '',
    status: Boolean,
    validate: false,
  }
  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value })
  }
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }
  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value })
  }
  handleRoleChange = (event) => {
    this.setState({ role: event.target.value })
  }
  handleSubmit = (event) => {
    if (event.currentTarget.checkValidity() === false) {   
      event.preventDefault()
      event.stopPropagation()
    }
    this.setState({ validate: true })
    const username = this.state.username
    const email = this.state.email
    const password = this.state.password
    const phone = this.state.phone
    const role = this.state.role
    const status = true
    axios
      .post('http://167.172.73.163:9091/user', {
        username: username,
        email: email,
        password: password,
        phone: phone,
        role: role,
        status: status,
      })
      .then((res) => {
        window.location.href = 'http://localhost:3000/user/list'
      })
      .catch(function (error) {
        alert(error.response.data.message);
      })
  }

  render() {
    return (
      <CRow className="justify-content-md-center">
        <CCol xs={7}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Tambah User Baru</strong>
            </CCardHeader>
            <CCardBody>
            <CForm
                className="row g-3"
                noValidate
                validated={this.state.validate}
                onSubmit={this.handleSubmit}
              >
                <CCol xs={12}>
                  <CFormLabel htmlFor="staticEmail2" className="visually-hidden">
                    Username
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    id="username"
                    label="Email address"
                    placeholder="name98"
                    text="Must be 8-20 characters long."
                    aria-describedby="exampleFormControlInputHelpInline"
                    name="username"
                    onChange={this.handleUsernameChange}
                    required
                  />
                </CCol>
                <CCol xs={12}>
                  <CFormLabel htmlFor="staticEmail2" className="visually-hidden">
                    Email
                  </CFormLabel>
                  <CFormInput
                    type="email"
                    id="email"
                    label="Email address"
                    placeholder="name@example.com"
                    text="Must be 8-20 characters long."
                    aria-describedby="exampleFormControlInputHelpInline"
                    name="email"
                    onChange={this.handleEmailChange}
                    required
                  />
                </CCol>
                <CCol xs={12}>
                  <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
                    Password
                  </CFormLabel>
                  <CFormInput
                    type="password"
                    id="password"
                    placeholder="******"
                    name="password"
                    onChange={this.handlePasswordChange}
                    required
                  />
                </CCol>
                <CCol xs={12}>
                  <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
                    Phone
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    id="phone"
                    placeholder="085236176565"
                    name="phone"
                    onChange={this.handlePhoneChange}
                    required
                  />
                </CCol>

                <CCol xs={12}>
                  <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
                    Phone
                  </CFormLabel>
                  <CFormSelect
                    name="role"
                    aria-label="Default select example"
                    onChange={this.handleRoleChange}
                    required
                  >
                    <option disabled selected>
                      Pilih Role
                    </option>
                    <option value="1">Admin</option>
                    <option value="0">Users</option>
                  </CFormSelect>
                </CCol>
                <CCol className="float-end">
                  <CButton type="submit" className="mb-3">
                    Tambah User
                  </CButton>
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    )
  }
}
