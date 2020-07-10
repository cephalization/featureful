import { routes, Redirect } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  if (isAuthenticated) {
    return <Redirect to={routes.dashboard()} />
  }

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-4xl leading-9 font-extrabold text-gray-900">
          Featureful
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="mt-6">
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="col-start-2">
                <span className="w-full inline-flex rounded-md shadow-sm">
                  <button
                    type="button"
                    onClick={logIn}
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
