import { InertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import React from "react";
import GuestLayout from "@/Shared/Layouts/GuestLayout";
import DefaultLayout from "@/Shared/Layouts/DefaultLayout";
import { render } from "react-dom";

InertiaProgress.init();

const app = document.getElementById("app");

render(
  <InertiaApp
    initialPage={JSON.parse(app.dataset.page)}
    resolveComponent={(name) =>
      import(`./Pages/${name}`).then((module) => module.default)
    }
    resolveError={(page) => page.props.errors || {}}
  />,
  app
);
