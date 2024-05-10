'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    console.log('renderrr cusomters');

    return () => {
      console.log('UNMOUNT CUSTOMERSSS');
    };
  }, []);

  return <p>Customers Page</p>;
}
