import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import FeedBackForm from './style';

import { toggleFeedbackUser } from '~/store/global/actions';

const cpFeedBackForm: React.FC = () => {
  const { label, loader, error, success } = useSelector((state: any) => ({
    label: state.globalData.label,
    loader: state.globalData.loader,
    error: state.globalData.error,
    success: state.globalData.success
  }));

  const dispatch = useDispatch();

  const closeFeedBackUser = () => {
    dispatch(toggleFeedbackUser('', false, false, false));
  };

  return (
    <FeedBackForm className={loader || error || success ? 'active' : ''}>
      {loader ? <div /> : ''}
      <p dangerouslySetInnerHTML={{ __html: label }} />
      {error || success ? <button onClick={() => closeFeedBackUser()} /> : ''}
    </FeedBackForm>
  );
};

export default cpFeedBackForm;
