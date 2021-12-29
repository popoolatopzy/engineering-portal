import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import CardList from "../components/cardList"
import Pagination from "../components/pagination"
import SEO from "../components/seo"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import Hamburger from "../../static/iconHamburger.svg"
import iconClose from "../../static/icon-close.svg"

import styles from "../components/tabs.module.scss"
import PinnedCard from "./pinnedCard"
import layoutStyles from "./layout.module.scss"

const BlogList = props => {
  const { data, pathname, currentPage } = props
  const total = data.allMarkdownRemark.totalCount
  const numPages = Math.ceil(total / 9)
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <Layout>
      <SEO
        title={currentPage === 1 ? "" : `Page ${currentPage}`}
        image={data.allMarkdownRemark.edges[0].node.frontmatter.coverImage}
        pathname={pathname}
        description={
          currentPage === 1
            ? ""
            : `LoginRadius Async Blog - Page ${currentPage} of ${Math.ceil(
                total / 6
              )}`
        }
      />
      <main>
        <div className={layoutStyles.pinnedwrap}>
          <div className={layoutStyles.blogContentPinned}>{<PinnedCard />}</div>
        </div>
        <CardList
          posts={data.allMarkdownRemark.edges}
          total={total}
          currentPage={currentPage}
        />
        <Pagination
          pages={numPages}
          currentPage={parseInt(currentPage)}
          type={data.allMarkdownRemark.edges[0].node.frontmatter.type}
        />
      </main>
    </Layout>
  )
}

export default BlogList
