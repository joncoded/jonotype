import { Component } from './Component.js'
import { ComponentAlternate } from './ComponentAlternate.js'

export default function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <h2>Let's begin our React App!</h2>
      <Component someData="hello component" />
      <ComponentAlternate someData="alternate component" />
    </div>
  );
}