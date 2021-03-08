import React from 'react';
import { usePage } from '@inertiajs/inertia-react';

export default function Create() {
  const { category } = usePage().props;
  console.log(usePage());

  return (
    <div>
      Category show page
      {category.name}
    </div>
  )
}

