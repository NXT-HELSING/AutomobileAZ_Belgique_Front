import React from 'react'

const ContectForm = () => {
  return (
      <>
          <div className="col-xl-6 m-b40">
              <div className="contact-area1">
                  <form className="dlab-form style-1 dzForm" method="POST" action="script/contact_smtp.php">
                      <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                      <div className="dzFormMsg"></div>

                      <div className="row sp10">
                          <div className="col-sm-6">
                              <div className="form-group">
                                  <label>Full Name</label>
                                  <div className="input-group">
                                      <input type="text" required className="form-control" name="dzName" placeholder="" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-6">
                              <div className="form-group">
                                  <label>Email</label>
                                  <div className="input-group">
                                      <input type="text" required className="form-control" name="dzEmail" placeholder="" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-12">
                              <div className="form-group">
                                  <label>Subject</label>
                                  <div className="input-group">
                                      <input type="text" required className="form-control" name="dzOther[subject]" placeholder="" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-12">
                              <div className="form-group">
                                  <label>Message</label>
                                  <div className="input-group">
                                      <textarea name="dzMessage" required className="form-control"></textarea>
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-12">
                              <div className="form-group">
                                  <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                  <input className="form-control d-none" style={{ display: 'none' }} data-recaptcha="true" required data-error="Please complete the Captcha" />
                              </div>
                          </div>
                          <div className="col-sm-12">
                              <button name="submit" type="submit" value="submit" className="btn btn-primary w-100 d-block btn-rounded">SEND MESSAGE </button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </>
  )
}

export default ContectForm