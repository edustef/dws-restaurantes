import React from "react";
import Helmet from "react-helmet";
import TopHeader from '../TopHeader';

export default function Layout({ title, children }) {
  return (
    <div>
      <Helmet titleTemplate="%s | Foodware" title={title} />
      <div className="flex flex-col">
        <div className="flex flex-col h-screen">
          <div className="md:flex">
            <TopHeader />
          </div>
          <div className="flex flex-grow overflow-hidden">
            {/* To reset scroll region (https://inertiajs.com/pages#scroll-regions) add `scroll-region="true"` to div below */}
            <div className="w-full px-4 py-8 overflow-hidden overflow-y-auto md:p-12">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
