'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    console.log('renderrr dashboard');
  }, []);

  return <p>Dashboard Page</p>;
}
