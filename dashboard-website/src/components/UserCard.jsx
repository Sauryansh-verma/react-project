import React from 'react'

const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg border border-gray-200">

      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold text-white">
          {user.name.firstname[0].toUpperCase()}
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 capitalize">
            {user.name.firstname} {user.name.lastname}
          </h2>

          <p className="text-sm text-gray-500">
            @{user.username}
          </p>
        </div>
      </div>

      {/* User Information */}
      <div className="mt-6 space-y-4">

        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase">
            Email
          </p>
          <p className="text-gray-700">
            {user.email}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase">
            Phone
          </p>
          <p className="text-gray-700">
            {user.phone}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase">
            Address
          </p>

          <p className="text-gray-700 capitalize">
            {user.address.number}, {user.address.street}
          </p>

          <p className="text-gray-500 text-sm capitalize">
            {user.address.city} - {user.address.zipcode}
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-6 border-t pt-4">
        <p className="text-xs text-gray-400">
          User ID: {user.id}
        </p>
      </div>

    </div>
  )
}

export default UserCard