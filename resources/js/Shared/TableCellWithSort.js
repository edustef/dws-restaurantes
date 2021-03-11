import { Button, TableCell } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

export default function TableCellWithSort({ align, children, onClick, value }) {

  return (
    <TableCell align={align}>
      <Button onClick={() => onClick(value)}>
        {children}
      </Button>
    </TableCell>
  );
}
