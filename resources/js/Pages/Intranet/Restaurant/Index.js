import { usePage } from '@inertiajs/inertia-react';
import { DataGrid } from '@material-ui/data-grid'
import React from 'react'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'name', width: 130 },
  { field: 'address', headerName: 'address', width: 130 },
  { field: 'city', headerName: 'city', width: 130 },
  { field: 'phone', headerName: 'phone', width: 130 },
  { field: 'latitude', headerName: 'latitude', width: 130 },
  { field: 'longitude', headerName: 'longitude', width: 130 },
];


export default function Index() {
  const restaurants = usePage().props.restaurants;
  console.log(restaurants);

  return (
    <div>
      Restaurants
    </div>
  )
}
