import React from 'react';

// Componentes: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Atributo de uma tag JSX
// Estado:

function Header(props) {
  return (
    <h1>{props.title}</h1>
  );
}

export default Header;
