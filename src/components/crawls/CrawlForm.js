import React from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'

const CrawlForm = ({ data, bars, handleAddStop, handleChange, handleSubmit, toggleHidden, isHidden }) => {
  console.log('data.name', data.name)
  console.log('data.bars', data.bars)
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

          <div className="field">
            <label className="label">Date of Crawl</label>
            <div className="control">
              <input
                className="input"
                placeholder="Please enter the date of your crawl"
                name="date"
                onChange={handleChange}
                value={data.date}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Select Bars!</label>
            <Select
              isMulti
              options={bars.map(bar => ({ value: bar, label: bar.name }))}
              onChange={handleAddStop}
              name="stops"
            />
          </div>

          <div className="field">
            <button className="button">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}


// <div className="field">
//   <label className="label">Add bars</label>
//
//   <div className="control">
//     <div className="select">
//       <select
//         onChange={handleChange}
//         name="stops">
//         {bars.map(bar => <option
//           key={bar._id}
//           value={JSON.stringify(bar)}
//         > {bar.name} </option>)}
//       </select>
//     </div>
//   </div>
// </div>


export default CrawlForm
