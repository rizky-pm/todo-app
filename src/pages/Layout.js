import React from "react";
import { Global, css } from "@emotion/core";

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }

        html {
          font-size: 62.5%;
        }

        body {
          font-family: "Lato", sans-serif;
          font-weight: 400;
          /* font-size: 16px; */
          line-height: 1.7;
          color: $color-grey-dark;
          padding: 3rem;
          box-sizing: border-box;
        }
      `}
    />

    <main>{children}</main>
  </>
);

export default Layout;