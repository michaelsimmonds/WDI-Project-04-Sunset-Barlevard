import React from 'react'
import Select from 'react-select'

const CrawlForm = ({ data, handleChange, getCrawl, handleSubmit }) => {
  console.log('data.name', data.name)
  console.log('data.stops', data.stops)
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
              <button className="button">Next</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}
// <Select
// isMulti
// options={bars.map(bar => {
//   return { value: bar, label: bar.name }
// }
// )}
// value={stops}
// onChange={handleChange}
// name="stops"
// />

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
