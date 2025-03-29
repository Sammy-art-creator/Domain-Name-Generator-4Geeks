import React from 'react'

const Forgot = () => {
  return (
    <div className='w-100 mx-auto my-5'>
          {error && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Error!</strong> {error}.
              <button
                type="button"
                className="btn-close"
                onClick={() => setError(null)}
                aria-label="Close">
              </button>
            </div>
          )}
          <div className="login-container">
            <div className="login-box">
              <h2 className="text-center">Forgot</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3 input-container">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
  )
}

export default Forgot