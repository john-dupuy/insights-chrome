import React from 'react';
import RootApp from './RootApp';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('RootApp', () => {
  let initialState;
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore();
    initialState = {
      chrome: {
        activeApp: 'some-app',
        activeLocation: 'some-location',
        appId: 'app-id',
      },
    };
  });

  it('should render correctly - no data', () => {
    const store = mockStore({ chrome: {} });
    const { container } = render(
      <Provider store={store}>
        <RootApp />
      </Provider>
    );
    expect(container.querySelector('.pf-c-drawer__content')).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const store = mockStore(initialState);
    const { container } = render(
      <Provider store={store}>
        <RootApp />
      </Provider>
    );
    expect(container.querySelector('.pf-c-drawer__content')).toMatchSnapshot();
  });

  it('should render correctly with pageAction', () => {
    const store = mockStore({
      chrome: {
        ...initialState.chrome,
        pageAction: 'some-action',
      },
    });
    const { container } = render(
      <Provider store={store}>
        <RootApp />
      </Provider>
    );
    expect(container.querySelector('.pf-c-drawer__content')).toMatchSnapshot();
  });

  it('should render correctly with pageObjectId', () => {
    const store = mockStore({
      chrome: {
        ...initialState.chrome,
        pageObjectId: 'some-object-id',
      },
    });
    const { container } = render(
      <Provider store={store}>
        <RootApp />
      </Provider>
    );
    expect(container.querySelector('.pf-c-drawer__content')).toMatchSnapshot();
  });

  it('should render correctly with pageObjectId and pageAction', () => {
    const store = mockStore({
      chrome: {
        ...initialState.chrome,
        pageAction: 'some-action',
        pageObjectId: 'some-object-id',
      },
    });
    const { container } = render(
      <Provider store={store}>
        <RootApp />
      </Provider>
    );
    expect(container.querySelector('.pf-c-drawer__content')).toMatchSnapshot();
  });
});
