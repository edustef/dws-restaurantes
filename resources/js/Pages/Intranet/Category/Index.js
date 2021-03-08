import React from 'react';
import Pagination from '@/Shared/Pagination';
import { usePage } from '@inertiajs/inertia-react';

export default function Create() {
  const categoriesData = usePage().props.categories;
  const categories = categoriesData.data;
  const links = categoriesData.links;

  console.log(categories);
  return (
    <div>
      Category show page
      {categories.map(category => <div key={category.id}>
        {category.name}
      </div>)}
      <Pagination links={links} />
    </div>
  )
}


