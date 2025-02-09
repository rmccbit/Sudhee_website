import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "How to join RMC?",
      answer: "To join RMC, fill out the membership form available on our website and attend our orientation session. Annual membership fee is ₹500."
    },
    {
      question: "What are Mathletes?",
      answer: "Mathletes is our annual mathematics festival featuring competitions, workshops, and guest lectures designed to challenge and inspire mathematical thinking."
    },
    {
      question: "How to register for events?",
      answer: "Click on the 'Register Now' button on any event page. You'll need to create an account if you haven't already, then follow the registration process for your chosen event."
    },
    {
      question: "What are the benefits of joining RMC?",
      answer: "Members get priority registration for events, access to our weekly problem-solving sessions, mentorship opportunities, and networking with fellow mathematics enthusiasts."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700"
              initial={false}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left text-white hover:bg-gray-700 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-indigo-400" />
                ) : (
                  <Plus className="h-5 w-5 text-indigo-400" />
                )}
              </button>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 text-gray-300">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;