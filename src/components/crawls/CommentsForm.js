import React from 'react'

const CommentsForm = ({ data, handleChange, handleSubmit }) => {

  return (
    <section className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Comment</label>
            <textarea
              className="textarea"
              name="content"
              value={data.content}
              onChange={handleChange}
            />
          </div>
          <button className="button button-styled">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default CommentsForm
