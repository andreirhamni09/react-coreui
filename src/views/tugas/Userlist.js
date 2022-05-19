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
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardFooter,
} from '@coreui/react'
import { Link } from 'react-router-dom'

import { DocsCallout, DocsExample } from 'src/components'

const url = 'http://localhost:9000/users'

export default class Userlist extends React.Component {
  state = {
    users: [],
  }
  componentDidMount() {
    axios.get(url).then((res) => {
      const user = res.data.data
      this.setState({ users: user })
      console.log(this.state.users)
    })
  }
  render() {
    function Status(props) {
      const Status = props
      if (Status == true) {
        return 'Aktif'
      } else {
        return 'Tidak Aktif'
      }
    }

    return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Tabel User</strong>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Role</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {this.state.users.map((dusers) => {
                    return (
                      <CTableRow key={dusers.id}>
                        <CTableHeaderCell scope="row">{dusers.username}</CTableHeaderCell>
                        <CTableHeaderCell scope="row">{dusers.email}</CTableHeaderCell>
                        <CTableHeaderCell scope="row">{dusers.role}</CTableHeaderCell>
                        <CTableHeaderCell scope="row">{dusers.phone}</CTableHeaderCell>
                        <CTableHeaderCell scope="row">{Status(dusers.status)}</CTableHeaderCell>
                        <CTableHeaderCell scope="row">
                          <Link to={`/user/${dusers.id}`} color="dark">
                            <CButton color="primary" role="button">
                              Detail
                            </CButton>
                          </Link>
                        </CTableHeaderCell>
                      </CTableRow>
                    )
                  })}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    )
  }
}
