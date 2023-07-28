import React from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface AboutFaq {
  faqs: FAQ[];
}

const AboutFaq = ({ faqs }: AboutFaq) => {
  return (
    <>
      {faqs.map((faq, index) => (
        <div key={index}>
          <p className="mb-0 font-bold tracking-wide text-slate-100">
            {faq.question}
          </p>
          <p className="mt-2 text-slate-400 text-justify">{faq.answer}</p>
        </div>
      ))}
    </>
  );
};

export default AboutFaq;
