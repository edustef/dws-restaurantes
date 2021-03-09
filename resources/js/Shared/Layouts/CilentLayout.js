import React from "react";
import Helmet from "react-helmet";
import Container from '@material-ui/core/Container';
import BaseLayout from './BaseLayout';

export default function Layout({ title, children }) {
  return (
    <>
      <Helmet titleTemplate="%s | Ping CRM" title={title} />
      <BaseLayout>
        {children}
      </BaseLayout>
    </>
  );
}
