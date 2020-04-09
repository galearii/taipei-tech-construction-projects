import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <a href="/" className="text-blue-500 hover:text-blue-700">← 回首頁</a>
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-6">

            {post.frontmatter.title}

        </h2>

        <div className="mb-6 pb-6 border-b md:flex md:justify-between">
          <div className="md:w-49p lg:w-3/4">
            <img src={post.fields.slug + "hero.jpg"} />
          </div>
          <div className="md:w-49p lg:pl-4">
            <ul className="mt-2 md:mt-0">
              <li className="p-2 pl-0">
                <span className="rounded mr-2 p-2 bg-teal-200 border-l-4 border-teal-400">
                  總樓地板面積
                </span>
                {post.frontmatter.floorArea}
              </li>
              <li className="p-2 pl-0">
                <span className="rounded mr-2 p-2 bg-indigo-200 border-l-4 border-indigo-400">
                  總工程經費
                </span>
                {post.frontmatter.cost}
              </li>
              <li className="p-2 pl-0">
                <span className="rounded mr-2 p-2 bg-purple-200 border-l-4 border-purple-400">
                  相關期程
                </span>
                {post.frontmatter.schedule}
              </li>
            </ul>
            <div>
              <a
                className="block rounded p-4 text-xl text-white bg-green-500 hover:bg-green-700 mt-4 text-center"
                href="https://newgiving.ntut.edu.tw/"
              >
                前往臺北科技大學捐贈網站
                <svg
                  className="w-4 inline-block ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 125">
                    <path d="M50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm16.4 50.7L48 71.5c-.9.9-2 1.3-3.2 1.3s-2.3-.4-3.2-1.3c-1.7-1.7-1.7-4.6 0-6.3L56.9 50 41.7 34.8c-1.7-1.7-1.7-4.6 0-6.3 1.7-1.7 4.6-1.7 6.3 0l18.4 18.3c.8.8 1.3 2 1.3 3.2s-.5 2.3-1.3 3.2z" fill="#fff"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="project-detail-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        floorArea
        cost
        schedule
      }
    }
  }
`
