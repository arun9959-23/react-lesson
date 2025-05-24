import React from 'react';
import Fruit from './Fruit';

export default function App6() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      <Fruit name="Apple" />
      <Fruit name="Mango" />
      <Fruit name="Orange" />
      <Fruit name="Banana" />
    </div>
  );
}