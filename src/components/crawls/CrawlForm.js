import React from 'react'


const CrawlForm = ({ data, handleChange, handleSubmit }) => {
  console.log(data)
  return(
    <div className="columns">
      <div className="column is-6 is-offset-3">
        <form onSubmit={handleSubmit}>

          <h2 className="title">Add a Crawl</h2>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={data.name}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                className="textarea"
                placeholder="Please enter a short description of your Crawl"
                name="description"
                onChange={handleChange}
                value={data.description}
              />
            </div>
          </div>

          <div className="columns add-place">

            <div className="column is-5">
              <button className="button">Submit</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default CrawlForm
