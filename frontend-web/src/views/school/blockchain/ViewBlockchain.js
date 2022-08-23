import React from 'react'
import { useState, useEffect, useRef } from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CAlert,
  CToast,
  CToastHeader,
  CToastBody,
  CToaster,
  CBadge,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CFormInput,
  CSpinner,
} from '@coreui/react'

import { cilSearch, cilFilter } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import blockchainService from '../../../services/blockchain/blockchainService'

const studentValidationListData = [
  {
    transactionId: '1',
    index: '1236547',
    fullName: 'L.A.D.D.S. GUNAWARDHANA',
    nic: '199931712165',
    dateOfAdmission: '2011-10-03',
    dateOfLeave: '2015-3-06',
  },
  {
    transactionId: '2',
    index: '9875462',
    fullName: 'D.C. PATHIRAGE',
    nic: '200016548965315',
    dateOfAdmission: '2012-10-08',
    dateOfLeave: '2015-8-16',
  },
]

function ViewBlockchain() {
  //Toast related
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const exampleToast = (status, title, content) => (
    <CToast className={`bg-fade-${status}`}>
      <CToastHeader closeButton className={`text-white bg-${status}`}>
        <strong className="me-auto">{title}</strong>
        <small>Just now</small>
      </CToastHeader>
      <CToastBody>{content}</CToastBody>
    </CToast>
  )

  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')

  //   Blockchain related
  const [blockchain, setBlockchain] = useState([])

  useEffect(() => {
    blockchainService.getBlockChain().then(
      (res) => {
        setBlockchain(res.blockChain)
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()

        // After recieving the server request
        setResMessage(res)
        console.log(res)
        setLoading(false)
      },
    )
  }, [])

  const handleVerifyBlock = (id, publicKey) => {
    console.log(id, publicKey)
    setResMessage('')
    setLoading(true)

    blockchainService.verifyBlock(id, publicKey).then(
      (res) => {
        setLoading(false)
        addToast(exampleToast('success', `Valid block - Block ID ${id}`, res.message))
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()

        // After recieving the server request
        setLoading(false)
        exampleToast('danger', `Invalid block - Block ID ${id}`, res)
      },
    )
  }

  const handleVerifyBlockchain = () => {
    setResMessage('')
    setLoading(true)

    blockchainService.verifyBlockchain().then(
      (res) => {
        setLoading(false)
        addToast(exampleToast('success', `Valid blockchain`, res.message))
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()

        // After recieving the server request
        setLoading(false)
        addToast(exampleToast('danger', `Invalid blockchain`, res))
      },
    )
  }

  return (
    <div>
      {/* Toast */}
      <CToaster ref={toaster} push={toast} placement="top-end" />

      <CRow className="py-2 bg-light rounded">
        <CCol md={6}>
          <CButton
            color="success"
            type="button"
            className="text-white"
            onClick={handleVerifyBlockchain}
          >
            <CIcon icon={cilFilter} />
            <span>
              {'  '}
              {loading ? 'Verifying' : 'Verify Blockchain'}
              {loading && <CSpinner size="sm" />}
            </span>
          </CButton>
        </CCol>
        <CCol md={4} className="ms-auto">
          <CInputGroup>
            <CFormInput type="text" name="phone" placeholder="Search..." />
            <CButton color="warning" type="button" className="text-white">
              <CIcon icon={cilSearch} />
              <span>{'  '}Search</span>
            </CButton>
          </CInputGroup>
        </CCol>
      </CRow>
      <br />

      {resMessage && (
        <CAlert color="danger" className="text-center">
          {resMessage}
        </CAlert>
      )}

      <CRow>
        <CCol xs>
          {blockchain.map((block) => (
            <CCard key={block.id} className="mb-4">
              <CCardHeader>
                Block ID: {block.id}
                {block.id === 1 && <CBadge className="bg-success ms-2">Genesis Block</CBadge>}
                <CButton
                  color="success text-white"
                  type="button"
                  className="p-0 float-end"
                  onClick={() => {
                    handleVerifyBlock(block.id, block.creatorPublicKey)
                  }}
                >
                  <span className="px-3">Verify</span>
                </CButton>
              </CCardHeader>
              <CCardBody>
                {/* Transactions */}
                <strong className="p-2">Transactions</strong>
                <CRow className="m-1">
                  <CTable bordered>
                    <CTableHead color="dark">
                      <CTableRow>
                        <CTableHeaderCell>Id</CTableHeaderCell>
                        <CTableHeaderCell>Index</CTableHeaderCell>
                        <CTableHeaderCell>Fullname</CTableHeaderCell>
                        <CTableHeaderCell>NIC</CTableHeaderCell>
                        <CTableHeaderCell>Date of Admission</CTableHeaderCell>
                        <CTableHeaderCell>Date of Leave</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {block.transactions.map((item) => (
                        <CTableRow key={item.transactionId}>
                          <CTableHeaderCell>{item.transactionId}</CTableHeaderCell>
                          <CTableDataCell>{item.index}</CTableDataCell>
                          <CTableDataCell>{item.fullName}</CTableDataCell>
                          <CTableDataCell>{item.nic}</CTableDataCell>
                          <CTableDataCell>{item.dateOfAdmission}</CTableDataCell>
                          <CTableDataCell>{item.dateOfLeave}</CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </CRow>

                {/* Creator Details */}
                <strong className="p-2">Creator Details</strong>
                <CRow className="m-1">
                  <CCol md={1}>Name:</CCol>
                  <CCol md={11}>{block.creatorName}</CCol>
                </CRow>
                <CRow className="m-1">
                  <CCol md={1}>Address:</CCol>
                  <CCol md={11}>{block.creatorAddress}</CCol>
                </CRow>
                <CRow className="m-1">
                  <CCol md={1}>Public key:</CCol>
                  <CCol md={11}>{block.creatorPublicKey}</CCol>
                </CRow>
                <CRow className="m-1">
                  <CCol md={1}>Signature:</CCol>
                  <CCol md={11}>{block.creatorSignature}</CCol>
                </CRow>

                {/* Footer */}
                <CRow className="px-2 pt-3">
                  <CCol md={6}>
                    <strong>Previous Hash: </strong>
                    <p>{block.previousHash}</p>
                  </CCol>
                  <CCol md={6}>
                    <strong>Block Hash: </strong>
                    <p>{block.hash}</p>
                  </CCol>
                  <CCol md={6}>
                    <strong>Nonce: </strong>
                    <p>{block.nonce}</p>
                  </CCol>
                  <CCol md={6}>
                    <strong>Timestamp: </strong>
                    <p>{block.timeStamp}</p>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          ))}
        </CCol>
      </CRow>
    </div>
  )
}

export default ViewBlockchain
