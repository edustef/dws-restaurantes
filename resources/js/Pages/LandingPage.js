import React from "react";
import { InertiaLink } from '@inertiajs/inertia-react';
import GuestLayout from "@/Shared/Layouts/GuestLayout";

const LandingPage = () => {
  let foo = "React";

  return <div>
    <div className="m-auto">
      <h2 className="text-5xl">Foodware.</h2>
      <h2 className="italic text-sm">
        The middleware between you and your favorite food.
      </h2>
      <InertiaLink
        href={route('login')}
        className="px-2 py-1 rounded-full text-white bg-red-500">Login</InertiaLink>
    </div>
  </div>;
};

LandingPage.layout = (page) => <GuestLayout title="Dashboard" children={page} />;
export default LandingPage;
