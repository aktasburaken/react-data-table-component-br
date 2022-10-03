import React, { useState, ChangeEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, Label } from 'reactstrap';

interface AutoRefreshType {
  autoRefreshLabel?: string;
  isActive?: boolean;
  onPress?: () => void;
}

const AutoRefresh = ({ autoRefreshLabel, isActive, onPress }: AutoRefreshType) => {
  const [selfIsActive, setSelfIsActive] = useState(isActive);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelfIsActive(e.target.checked);
    onPress?.();
  };

  return (
    <div className='btn-group '>
      <div
        className='form-check-inline form-switch form-switch-md me-0 pe-0'
        dir='ltr'
      >
        <Label
          className='form-check-label noHighlighter '
          htmlFor='autoRefresh'
        >
          {' '}
          {autoRefreshLabel}{' '}
        </Label>
        <Input
          type='checkbox'
          className='form-check-input ms-3 pointer'
          id='autoRefresh'
          checked={selfIsActive}
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
};
AutoRefresh.defaultProps = {
  autoRefreshLabel: '',
  isActive: true,
  onPress: () => {},
};
export default AutoRefresh;
