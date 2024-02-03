import { Container } from '@mui/material'
import React from 'react'
import FormWrap from '../components/FormWrap'
import CheckoutClient from './CheckoutClient'

const Checkout = () => {
  return (
    <div>
        <Container>
            <FormWrap>
                <CheckoutClient />
            </FormWrap>
        </Container>
    </div>
  )
}

export default Checkout