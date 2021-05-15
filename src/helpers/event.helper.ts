import { eventDefinitions } from '../definitions';

const on = (eventName: eventDefinitions.EventName, listener: eventDefinitions.Listener): void => {
  document.addEventListener(eventName, (detail) => listener(detail));
};

const off = (eventName: eventDefinitions.EventName, listener: eventDefinitions.Listener): void => {
  document.removeEventListener(eventName, (detail) => listener(detail));
};

const once = (eventName: eventDefinitions.EventName, listener: eventDefinitions.Listener): void => {
  const handleEventOnce = (event: CustomEvent) => {
    listener(event.detail);
    off(eventName, handleEventOnce);
  };

  on(eventName, handleEventOnce);
};

const trigger = (eventName: eventDefinitions.EventName, data: eventDefinitions.Data): void => {
  const event = new CustomEvent(eventName, { detail: data });
  document.dispatchEvent(event);
};

export { on, once, off, trigger };
