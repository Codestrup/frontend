'use client'

import { useState } from 'react';

export default function Accordion1() {
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    {
      id: 'faq1',
      title: 'What is the duration of the internship program?',
      content: 'The internship duration is for both 1 month & 3 month.',
    },
    {
      id: 'faq2',
      title: 'What is the mode of the internship?',
      content: 'The internship is entirely online.',
    },
    {
      id: 'faq3',
      title: 'Internship Completion and Certification?',
      content: 'You will get the Internship & Course Certicate Immediately.',
    },
    {
      id: 'faq4',
      title: 'How is the internship structured?',
      content: 'The internship is project-based. You will work on specific projects to apply your programming skills.',
    }
  ];

  return (
    <div className="accordion" id="accordion">
      {items.map((item) => (
        <div className="accordion-item mb-3" key={item.id}>
          <h5 className="accordion-header">
            <button
              type="button"
              className={`accordion-button ${activeItem === item.id ? '' : 'collapsed'}`}
              onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
              aria-expanded={activeItem === item.id}
            >
              {item.title}
            </button>
          </h5>
          <div
            id={item.id}
            className={`accordion-collapse ${activeItem === item.id ? 'show' : 'hidden'}`}
            style={{ display: activeItem === item.id ? 'block' : 'none' }}
          >
            <div className="accordion-body">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
