import React from 'react';
import NavigationPrompt from 'react-router-navigation-prompt';
import useForm from '../../forms/Form/useForm';
import MinimalTemplate from '../../templates/Minimal';
import Button from '../../elements/Button';

import './index.scss';

const modalSlug = 'leave-without-saving';

const LeaveWithoutSaving = () => {
  const { modified } = useForm();

  return (
    <NavigationPrompt when={modified}>
      {({ onConfirm, onCancel }) => {
        return (
          <div className={modalSlug}>
            <MinimalTemplate>
              <h1>Leave without saving</h1>
              <p>Your changes have not been saved. If you leave now, you will lose your changes.</p>
              <Button onClick={onCancel}>
                Go back
              </Button>
              <Button
                buttonStyle="secondary"
                onClick={onConfirm}
              >
                Leave anyway
              </Button>
            </MinimalTemplate>
          </div>
        );
      }}
    </NavigationPrompt>
  );
};

export default LeaveWithoutSaving;