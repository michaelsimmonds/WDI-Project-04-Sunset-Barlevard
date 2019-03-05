import React from 'react'

const BarStopForm = ({ data, handleSubmit, handleChange}) => {
  console.log(data)
  return(
    <section>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <div className="select">
              <select
                onChange={handleChange}>
                <option name="order">1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>

        <div className="columns add-place">
          <div className="column is-5">
            <button className="button button-styled">Add to Crawl</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default BarStopForm
