import React from 'react'
import { navigateTo } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => navigateTo('/sign-up-success/'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  render() {
    return (
      <div>
        <form
          name="contact"
          method="post"
          action="/sign-up-success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p>* = required field</p>
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <div className="grid-wrapper">
            <p className="col-12">
              <label>
                Student Name:*<br />
                <input
                  type="text"
                  name="student_name"
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p className="col-12">
              <label>
                Email:*<br />
                <input
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  required
                />
              </label>
            </p>
            <p className="col-4">
              <label>
                Grade:*<br />
                <input
                  type="text"
                  name="grade"
                  onChange={this.handleChange}
                  required
                />
              </label>
            </p>
            <p className="col-4">
              <label>
                Date of Birth:*<br />
                <input
                  type="text"
                  name="date_of_birth"
                  onChange={this.handleChange}
                  required
                />
              </label>
            </p>
            <p className="col-4">
              <label>
                School:*<br />
                <input
                  type="text"
                  name="school"
                  onChange={this.handleChange}
                  required
                />
              </label>
            </p>
            <p className="col-6">
              <label>
                Address:*<br />
                <input
                  type="text"
                  name="address"
                  onChange={this.handleChange}
                  required
                />
              </label>
            </p>
            <p className="col-6">
              <label>
                City:*<br />
                <input
                  type="text"
                  name="city"
                  onChange={this.handleChange}
                  required
                />
              </label>
            </p>
            <p className="col-12">
              <label>
                Parents' Names:*<br />
                <input
                  type="text"
                  name="parents"
                  onChange={this.handleChange}
                  required
                />
              </label>
            </p>
            <p className="col-6">
              <label>
                Parent Phone 1:*<br />
                <input
                  type="text"
                  name="parent_phone_1"
                  onChange={this.handleChange}
                  required
                />
              </label>
            </p>
            <p className="col-6">
              <label>
                Parent Phone 2:<br />
                <input
                  type="text"
                  name="parent_phone_2"
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p className="col-6">
              <label>
                Parent Email 1:*<br />
                <input
                  type="email"
                  name="parent_email_1"
                  onChange={this.handleChange}
                  required
                />
              </label>
            </p>
            <p className="col-6">
              <label>
                Parent Email 2:<br />
                <input
                  type="email"
                  name="parent_email_2"
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p className="col-6">
              <label>
                Do you have a computer you can use two nights a week and for
                take home projects?*<br />
                <select name="computer" onChange={this.handleChange} required>
                  <option value="" selected />
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </p>
            <p className="col-6">
              <label>
                If so, what kind/model?<br />
                <br />
                <input
                  type="text"
                  name="computer_type"
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p className="col-12">
              <label>
                Emergency Contact Name and Phone:*<br />
                <input
                  type="text"
                  name="emergency"
                  onChange={this.handleChange}
                  required
                />
              </label>
            </p>
            <p className="col-12">
              <label>
                Describe your coding/programming experience:*<br />
                <textarea
                  name="experience"
                  onChange={this.handleChange}
                  required
                  rows={5}
                />
              </label>
            </p>
            <p className="col-12">
              <label>
                What are you hoping to learn?*<br />
                <textarea
                  name="hopes"
                  onChange={this.handleChange}
                  required
                  rows={5}
                />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </div>
        </form>
      </div>
    )
  }
}
