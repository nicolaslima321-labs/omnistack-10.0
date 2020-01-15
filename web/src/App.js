import React, { useState } from 'react';

// Componentes: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para um componente FILHO (Ex: Atributo de uma tag JSX)
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)


function App() {
  
  const [counter, setCounter] = useState(0)

  function incrementCounter() {
    setCounter(counter + 1)
  }

  return (
    // Fragment
    <>
    <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
