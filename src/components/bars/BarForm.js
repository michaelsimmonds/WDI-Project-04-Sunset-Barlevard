import React from 'react'
// import ReactFilestack from 'filestack-react'
import MapboxAutocomplete from 'react-mapbox-autocomplete'


const BarForm = ({ data, handleChange, handleSubmit, suggestionSelect }) => {
  console.log(data)
  return(
    <div className="columns">
      <div className="column is-6 is-offset-3">
        <form onSubmit={handleSubmit}>

          <h2 className="title center title-font">ADD A NEW BAR</h2>
          <div className="field">
            <label className="label title-font">Name</label>
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
            <label className="label title-font">Terrace</label>
            <div className="control">
              <select className="input" name="terrace" onChange={handleChange} value={data.terrace}>
                <option value=""></option>
                <option value="true">Yes! This place has a terrace or nice outside area!</option>
                <option value="false">No- this is not the best place for sunny days</option>
              </select>
            </div>
          </div>

          <div className="field"> {/* Chanage this to select */}
            <label className="label title-font">Area of London</label>
            <div className="control">
              <select className="input" name="location" onChange={handleChange} value={data.location}>
                <option value=""></option>
                <option value="north">North</option>
                <option value="south">South</option>
                <option value="east">East</option>
                <option value="west">West</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label className="label title-font">Description</label>
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
            <label className="label title-font">Please enter an image url</label>
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
            <label className="label title-font">Please select a location</label>
            <div className="control">
              <MapboxAutocomplete
                publicKey={process.env.MAPBOX_TOKEN}
                inputClass='form-control search input'
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
