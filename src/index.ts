import './styles/style.scss';

const concat = (...args: string[]): string => args.join(' ');

const component = (): HTMLDivElement => {
  const element = document.createElement('div');

  element.innerHTML = concat('Hello', 'World');

  return element;
};

document.body.appendChild(component());
