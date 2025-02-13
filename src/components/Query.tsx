// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { MessageSquare, Send, X } from 'lucide-react';

// const Query = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Here you would typically handle the form submission
//     setSubmitted(true);
//     setTimeout(() => {
//       setSubmitted(false);
//       setIsOpen(false);
//       setName('');
//       setEmail('');
//       setMessage('');
//     }, 2000);
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed bottom-8 left-8 p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-110 hover:shadow-indigo-500/50 z-40 animate-glow"
//       >
//         <MessageSquare className="h-6 w-6" />
//       </button>

//       {/* Query Modal */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="relative bg-gray-800 rounded-lg shadow-xl max-w-md w-full"
//             >
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="absolute right-4 top-4 text-gray-400 hover:text-white"
//               >
//                 <X className="h-6 w-6" />
//               </button>

//               <div className="p-6">
//                 <h2 className="text-2xl font-bold text-white mb-4">Send us a Query</h2>
                
//                 {submitted ? (
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="text-center py-8"
//                   >
//                     <p className="text-green-400 text-lg">Query submitted successfully!</p>
//                     <p className="text-gray-400 mt-2">We'll get back to you soon.</p>
//                   </motion.div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                         required
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                         required
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
//                         Message
//                       </label>
//                       <textarea
//                         id="message"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         rows={4}
//                         className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                         required
//                       />
//                     </div>

//                     <button
//                       type="submit"
//                       className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
//                     >
//                       <span>Send Query</span>
//                       <Send className="h-4 w-4" />
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Query;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X } from 'lucide-react';

const Query = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('https://formspree.io/f/xeoelveq', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setIsOpen(false);
          setName('');
          setEmail('');
          setMessage('');
        }, 2000);
      } else {
        alert('Failed to send query. Try again later.');
      }
    } catch (error) {
      console.error('Error sending query:', error);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-110 hover:shadow-indigo-500/50 z-40 animate-glow"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Query Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-gray-800 rounded-lg shadow-xl max-w-md w-full"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Send us a Query</h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-8"
                  >
                    <p className="text-green-400 text-lg">Query submitted successfully!</p>
                    <p className="text-gray-400 mt-2">We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                    >
                      <span>Send Query</span>
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Query;
