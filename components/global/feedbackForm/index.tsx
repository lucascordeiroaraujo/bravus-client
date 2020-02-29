import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import FeedBackForm from './style';

import { toggleLoader } from '~/store/global/actions';

const cpFeedBackForm: React.FC = () => {
  const { label, loader, error } = useSelector((state: any) => ({
    label: state.globalData.label,
    loader: state.globalData.loader,
    error: state.globalData.error
  }));

  const dispatch = useDispatch();

  const closeFeedBackUser = () => {
    dispatch(toggleLoader('', false, false));
  };

  return (
    <FeedBackForm className={loader || error ? 'active' : ''}>
      {loader ? <div /> : ''}
      <p dangerouslySetInnerHTML={{ __html: label }} />
      {error ? <button onClick={() => closeFeedBackUser()} /> : ''}
    </FeedBackForm>
  );
};

export default cpFeedBackForm;
