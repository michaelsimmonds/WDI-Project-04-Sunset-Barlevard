import React from 'react'

const CommentsForm = ({ data, handleChange, handleSubmit }) => {

  return (
    <section className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Got thoughts on this bar crawl?</h2>
          <div className="field">
            <label className="label">Comment</label>
            <textarea
              className="textarea"
              name="content"
              placeholder="Comment"
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
