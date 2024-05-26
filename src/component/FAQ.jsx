import React, { useState } from "react";
import "../styles/FAQ.css";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Krushi?",
      answer:
        "Krushi is a Public Charitable Trust designed to carry out farming on extensive scale Natural & Sustainable methods.",
    },
    {
      question: "How does it work?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.",
    },
    {
      question: "What are the major challenges of current agriculture?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.",
    },
    {
      question: "How does the Krushi address the above challenges?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.",
    },
    {
      question: "How can I be a part of Krushi?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="head">Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <button
            className="faq-question"
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <FaChevronDown />
          </button>
          <div
            className={`faq-answer ${
              activeIndex === index ? "faq-answer-active" : ""
            }`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
