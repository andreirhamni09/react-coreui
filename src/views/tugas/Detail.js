import React, { useEffect, useState } from 'react'
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
import { useParams } from 'react-router-dom'

const Detail = () =>{
  const [users, setUsers] = useState([]);
  let { id } = useParams()
  const url = 'http://localhost:9000/user/'+id
  useEffect(() => {  
    
    axios.get(url).then((res) => {
      const user = res.data.data
      setUsers(user);
    })
  }, []);

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
                </CTableRow>
              </CTableHead>
              <CTableBody> 
                      <CTableRow key={users.id}>
                        <CTableHeaderCell scope="row">{users.username}</CTableHeaderCell>
                        <CTableHeaderCell scope="row">{users.email}</CTableHeaderCell>
                        <CTableHeaderCell scope="row">{users.role}</CTableHeaderCell>
                        <CTableHeaderCell scope="row">{users.phone}</CTableHeaderCell>
                        <CTableHeaderCell scope="row">{Status(users.status)}</CTableHeaderCell>
                      </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Detail
