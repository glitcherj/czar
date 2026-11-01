import { render, screen } from '@testing-library/react';
jest.mock('swiper/react', () => {
  const React = require('react');
  return {
    Swiper: ({ children }) => React.createElement('div', null, React.Children.toArray(children)),
    SwiperSlide: ({ children }) => React.createElement('div', null, children),
  };
}, { virtual: true });
jest.mock('swiper/modules', () => ({}), { virtual: true });
jest.mock('swiper/css', () => ({}), { virtual: true });
jest.mock('swiper/css/navigation', () => ({}), { virtual: true });
jest.mock('swiper/css/pagination', () => ({}), { virtual: true });
jest.mock('swiper/css/autoplay', () => ({}), { virtual: true });
import App from './App';

beforeEach(() => {
  window.history.pushState({}, '', '/czar/');
  window.scrollTo = jest.fn();
  window.matchMedia = jest.fn().mockReturnValue({ matches: true });
});

test('renders the site navigation', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Join CZAR PCO Car Hire family today!/ })).toBeInTheDocument();
});
