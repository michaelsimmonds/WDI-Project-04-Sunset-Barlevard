import React from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'

const CrawlForm = ({ data, bars, handleAddStop, handleChange, handleSubmit}) => {

  return(
    <div className="columns">
      <div className="column is-6 is-offset-3">
        <form onSubmit={handleSubmit}>
          <h2 className="title title-font center">ADD A CRAWL</h2>
          <div className="field">
            <label className="title-font label">Select Bars! *</label>
            <Select
              isMulti
              options={bars.map(bar => ({ value: bar, label: bar.name }))}
              onChange={handleAddStop}
              name="stops"
            />
          </div>
          <div className="field">
            <h2 className="title is-6 title-font center">Can't find your bar? Add one <Link to={'/bars/new'}><p className="here"> &nbsp;<u>here!</u></p></Link></h2>
          </div>
          <div className="field">
            <label className="label title-font">Name *</label>
            <div className="control">
              <input
                className="input"
                name="name"
                onChange={handleChange}
                value={data.name}
              />
            </div>
          </div>

          <div className="field">
            <label className="title-font label">Description *</label>
            <div className="control">
              <input
                className="textarea"
                name="description"
                onChange={handleChange}
                value={data.description}
              />
            </div>
          </div>
          <div className="field">
            <button className="button button-styled">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CrawlForm
