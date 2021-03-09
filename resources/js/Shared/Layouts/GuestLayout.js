import { Container } from '@material-ui/core';
import React from "react";
import BaseLayout from './_BaseLayout';

export default function GuestLayout({ title, children }) {
  return (
    <BaseLayout title={title}>
      <Container>
        {children}
      </Container>
    </BaseLayout>
  );
}