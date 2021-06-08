import React from 'react';

function Header({ approvers, quorum }) {
  return (
    <header>
      <ul>
        <li>Approvers: {approvers.join(', ')}</li>
        <li>Quorom: {quorum}</li>
      </ul>
    </header>
  );
}

export default Header;
