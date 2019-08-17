import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import Calendar from '../components/Calendar';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Fire!">
      <br />

      <Calendar />
      <style jsx>
        {`

        `}
      </style>
    </Layout>
  )
}

export default IndexPage
