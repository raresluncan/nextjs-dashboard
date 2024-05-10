'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    console.log('renderrr invoice');
  }, []);
  return <p>Invoices Page</p>;
}
