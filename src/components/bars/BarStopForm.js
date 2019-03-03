import React from 'react'

const BarStopForm = ({ stops, handleSubmit, handleChange}) => {
  console.log(stops)
  return(
    <section>
      <form onSubmit={handleSubmit}>
        <h2 className="title">Order</h2>
        <div className="field">
          <label className="label">Order</label>
          <div className="control">
            <input
              className="input"
              placeholder="Order"
              name="order"
              onChange={handleChange}
              value={stops.order}
            />
          </div>
        </div>

        <div className="columns add-place">
          <div className="column is-5">
            <button className="button">Add Bar</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default BarStopForm
