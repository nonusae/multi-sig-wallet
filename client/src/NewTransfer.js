import React, { useState } from 'react';

function NewTransfer({ createTransfer }) {
  const [transfer, setTransfer] = useState(undefined);

  const updateTranfer = (e, field) => {
    const value = e.target.value;
    setTransfer({ ...transfer, [field]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    createTransfer(transfer);
  };

  return (
    <div>
      <h2>Create Transfer</h2>
      <form onSubmit={(e) => submit(e)}>
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          id="amount"
          onChange={(e) => updateTranfer(e, 'amount')}
        />
        <label htmlFor="to">To</label>
        <input type="text" id="to" onChange={(e) => updateTranfer(e, 'to')} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewTransfer;
