import React from "react"
import { graphql } from "gatsby"
import Layout from "../pages/components/Layout"
import Empty from '../pages/empty'

const Reading = ({ data, context }) => {
  return (
    <Layout>
        <Empty/>
    </Layout>
  )
}

export default Reading
