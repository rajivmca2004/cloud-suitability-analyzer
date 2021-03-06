/*
 * Copyright (c) 2018 - Present VMware, Inc. All Rights Reserved.
 * SPDX-License-Identifier: BSD-2
 */

import React from 'react';
import ReactDOM from 'react-dom';
import FindingsComponent from './FindingsComponent';
import { shallow } from 'enzyme';
import axios from 'axios/index';
import MockAxios from 'axios-mock-adapter';

const mockAxios = new MockAxios(axios, { delayResponse: Math.random() * 100 });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FindingsComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
