import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What are Mathletes?",
      answer: "Mathletes is our annual mathematics festival as part of technical fest Sudhee, featuring competitions, workshops, and guest lectures designed to challenge and inspire mathematical thinking."
    },
    {
      question: "How to register for events?",
      answer: "Click on the 'Register Now' button on any event page and you will be redirected to google form of individual event. You can complete your regestration in it"
    },
    {
      question: "What if we have any queries regarding the events and regestration process?",
      answer: "Event coordinators details are mentioned below and you can submit a query on this website which will be resolved by our team"
    },
    {
      question: "Are payments and registrations done through this website only?",
      answer: "Each individual event regestarions are done through the gforms only* and payment should also needed to be done to the qr provided in the sheet"
    },
    {
      question: "How to join RMC?",
      answer: "We conduct recruitment every year for students of 1st and 2nd years, stay tuned to our instagram for more updates"
    }
    
  ];

  return (
    <section id="faq" className="py-20 bg-gray-900">
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