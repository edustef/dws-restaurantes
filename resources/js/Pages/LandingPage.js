import React from "react";
import { InertiaLink } from '@inertiajs/inertia-react';
import GuestLayout from "@/Shared/Layouts/GuestLayout";
import Link from '@material-ui/core/Link';
import { Inertia } from '@inertiajs/inertia';

const LandingPage = () => {

  return <div>
    <div className="m-auto">
      <h2 className="text-5xl">Foodware.</h2>
      <h2 className="italic text-sm">
        The middleware between you and your favorite food.
      </h2>
      <Link href={route('login')} component={InertiaLink}>
        Login
      </Link>
    </div>
  </div>;
};

LandingPage.layout = (page) => <GuestLayout title="Welcome to Foodware!" children={page} />;
export default LandingPage;
