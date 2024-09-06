import React from "react";
import Link from "next/link";

interface Question {
  question: string;
  answer: string;
}

interface QuestionItemProps {
  question: string;
  answer: string;
}

const questions = [
  {
    question: "How do I get started?",
    answer:
      "Visit the Maniya website, create your account, and connect your Web3 wallet to start messaging securely using blockchain technology.",
  },
  {
    question: "Is Maniya secure?",
    answer:
      "Yes, Maniya uses blockchain technology to ensure all messages are encrypted and stored securely on the blockchain, providing enhanced privacy and security.",
  },
  {
    question: "Are there any transaction fees?",
    answer:
      "Maniya allows you to message for free. However, you may incur minimal gas fees for blockchain transactions like storing messages on-chain.",
  },
  {
    question: "How can I reach customer support?",
    answer:
      "You can reach out to Maniya's support team through the contact form on the website or by emailing us directly.",
  },
];

const QuestionItem: React.FC<QuestionItemProps> = ({ question, answer }) => (
  <div className="flex items-start">
    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
      <span className="text-lg font-semibold text-white">?</span>
    </div>
    <div className="ml-4">
      <p className="text-xl font-semibold text-white">{question}</p>
      <p className="mt-4 text-base text-gray-400">{answer}</p>
    </div>
  </div>
);

const Faqs5: React.FC = () => {
  return (
    <section className="py-10 bg-[#0d3645] sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Questions & Answers..
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-200">
            Explore the common questions and answers about Maniya
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
          {questions.map((item, index) => (
            <QuestionItem key={index} {...item} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-12 md:mt-20">
          <div className="px-8 py-4 text-center bg-gray-800 rounded-full ">
            <p className="text-gray-50">
              Didn’t find the answer you need?
              <Link
                href="/contact"
                className="text-yellow-300 transition duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline pl-2"
              >
                Contact Maniya Support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs5;
