import React from 'react'
import ReactFilestack from 'filestack-react'
import MapboxAutocomplete from 'react-mapbox-autocomplete'


const BarForm = ({ data, handleChange, handleSubmit, suggestionSelect }) => {
  console.log(data)
  return(
    <div className="columns">
      <div className="column is-6 is-offset-3">
        <form onSubmit={handleSubmit}>

          <h2 className="title">Add a New Bar</h2>
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
            <label className="label">Terrace</label>
            <div className="control">
              <input
                className="input"
                placeholder="Does this bar have a terrace/outside space??"
                name="terrace"
                onChange={handleChange}
                value={data.terrace}
              />
            </div>
          </div>

          <div className="field"> {/* Chanage this to select */}
            <label className="label">Area</label>
            <div className="control">
              <input
                className="input"
                placeholder="Change this to select"
                name="location"
                onChange={handleChange}
                value={data.location}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                className="textarea"
                placeholder="Please enter a short description of the bar. Why do you love it?!"
                name="description"
                onChange={handleChange}
                value={data.description}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Please enter an image url</label>
            <div className="control">
              <input
                className="input"
                placeholder="Image"
                name="hero"
                onChange={handleChange}
                value={data.hero}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Please select a location</label>
            <div className="control">
              <MapboxAutocomplete
                publicKey={process.env.MAPBOX_KEY}
                inputClass='form-control search'
                onSuggestionSelect={suggestionSelect}
                resetSearch={false}
                name="address"
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

export default BarForm

// <div className="column is-5 is-offset-2">
//   <ReactFilestack
//     apikey={ `${process.env.FILESTACK_API_KEY}` }
//     mode={'pick'}
//     onSuccess={(res) => handleChange({
//       target: {
//         name: 'hero',
//         value: res.filesUploaded[0].url
//       }})}
//     onError={(e) => console.log(e)}
//     buttonText={data.hero ? 'Image Added': 'Add an Image'}
//     buttonClass={data.hero ? 'button is-square is-success' : 'button is-square is-info'}
//   />
// </div>
