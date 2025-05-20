'use client'

import { useState } from 'react';

export default function Accordion2() {
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
      title: 'Will I receive an internship & Course completion certificate?',
      content: 'Yes, upon successful completion you’ll get both an internship & Course completion certificate.',
    },
    {
      id: 'faq4',
      title: 'How is the internship structured?',
      content: 'The internship is project-based. You’ll work on real tasks to build your skills.',
    },
    {
      id: 'faq5',
      title: 'What kind of projects will I be working on?',
      content: 'You’ll tackle projects tailored to your chosen track—web, data science, AI, and more.',
    },
    {
      id: 'faq6',
      title: 'How will my performance be evaluated?',
      content: 'We assess your deliverables, deadlines, and engagement throughout the program.',
    },
    {
      id: 'faq7',
      title: 'Will I receive feedback on my work?',
      content: 'Yes—your mentor will give you regular, detailed feedback.',
    },
    {
      id: 'faq8',
      title: 'What support resources are available?',
      content: 'You’ll have access to AI help, tutorials, and one-on-one mentorship.',
    },
    {
      id: 'faq9',
      title: 'When will I get my certificate after completion?',
      content: 'Your certificates appear instantly on your dashboard once you finish.',
    },
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
