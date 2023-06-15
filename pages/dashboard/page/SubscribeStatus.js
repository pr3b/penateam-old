import React, {useState} from 'react'
import { useSession } from 'next-auth/react'

const SubscribeStatus = () => {
  const {data: session, status} = useSession()
  const userEmailSession = session?.user?.email;
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isUnsubscribeDisabled, setIsUnsubscribeDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWrongEmail, setIsWrongEmail] = useState(false); // New state variable

  const handleEmailVerification = () => {
    if (userEmail === userEmailSession) {
      setIsEmailVerified(true);
      setIsUnsubscribeDisabled(false);
      setIsModalOpen(false); // Close the modal after email verification
      setUserEmail('')
      setIsWrongEmail(false);
    } else {
      setIsWrongEmail(true);
      setUserEmail('')
    }
  };

  const handleUnsubscribe = () => {
    // Handle unsubscribe logic here
    alert("success clicked unsub")
    setIsEmailVerified(false);
    setIsUnsubscribeDisabled(true);
  };


  return (
    <div className="bg-white border border-gray-200 custom-rounded-sm mt-3">
      <div className="p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Cancel Subscription</h3>
        <div className="mt-2 sm:flex sm:items-start sm:justify-between">
          <div className="max-w-xl text-sm leading-5 text-gray-500">
            <p>
              Canceling your subscription means that you no longer wish to continue using our services and accessing
              the associated features and benefits. By canceling your subscription, you will lose access to any premium
              content, exclusive features, and customer support provided to subscribers. Please verify your email first
              to activate the Unsubscribe button!
            </p>
          </div>
          <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
            {!isEmailVerified ? (
              <button
                onClick={() => setIsModalOpen(true)}
                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                Email Verify button!
              </button>
            ) : (
              <span className="text-green-500">Email Verified!</span>
            )}
          </div>
        </div>
        <div className="pt-6">
          <div className="flex justify-between">
            <span className="ml-3 inline-flex rounded-md shadow-sm">
              <button
                onClick={handleUnsubscribe}
                disabled={isUnsubscribeDisabled}
                className={`mr-3 inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white ${
                  isUnsubscribeDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700'
                } focus:outline-none transition duration-150 ease-in-out`}
              >
                Unsubscribe
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Enter Email</h3>
            {isWrongEmail && (
              <div className="text-red-500 mb-4">Wrong email! Please try again.</div>
            )}
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Email"
              className="border border-gray-300 rounded-md p-2 mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={handleEmailVerification}
                disabled={!userEmail}
                className={`inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white ${
                  !userEmail ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700'
                } focus:outline-none transition duration-150 ease-in-out`}
              >
                Verify
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="ml-2 inline-flex justify-center py-2 px-4 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SubscribeStatus