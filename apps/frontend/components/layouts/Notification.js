import React, { Fragment } from 'react';
import Toast from 'react-bootstrap/Toast';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CloseNotification } from '../../actions/notificationAction';

const Notification = ({ notify, CloseNotification }) => {
  return notify.length > 0 ? (
    <div
      aria-live='polite'
      aria-atomic='true'
      style={{
        position: 'fixed',
        minHeight: '200px',
        minWidth: '200px',
        zIndex: 11111,
        top: 50,
        right: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          height: 'fit-content',
          minWidth: '200px',
        }}
      >
        {notify.map((n) => {
          return (
            <Toast key={n.id} onClose={() => CloseNotification({ id: n.id })}>
              <Toast.Header>
                <i className='fas fa-id-card-alt'></i>
                <strong className='mr-auto'> chattify</strong>
                <small>just now</small>
              </Toast.Header>
              <Toast.Body>{JSON.stringify(n.msg)}</Toast.Body>
            </Toast>
          );
        })}
      </div>
    </div>
  ) : (
    <Fragment></Fragment>
  );
};

Notification.propTypes = {
  notify: PropTypes.array.isRequired,
  CloseNotification: PropTypes.func.isRequired,
};

Notification.defaultProps = {
  notify: [],
};

const mapStateToProps = (state) => ({
  notify: state.notify,
});

export default connect(mapStateToProps, { CloseNotification })(Notification);
