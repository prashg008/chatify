import React, { Fragment } from 'react';
import Toast from 'react-bootstrap/Toast';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Notification = ({ notify }) => {
  return notify.length > 0 ? (
    <div
      aria-live='polite'
      aria-atomic='true'
      style={{
        position: 'relative',
        minHeight: '200px',
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      >
        {notify.map((n) => (
          <Toast key={n.id}>
            <Toast.Header>
              <img
                src='holder.js/20x20?text=%20'
                className='rounded mr-2'
                alt=''
              />
              <strong className='mr-auto'>chattify</strong>
              <small>just now</small>
            </Toast.Header>
            <Toast.Body>{n.msg}</Toast.Body>
          </Toast>
        ))}
      </div>
    </div>
  ) : (
    <Fragment></Fragment>
  );
};

Notification.propTypes = {
  notify: PropTypes.array.isRequired,
};

Notification.defaultProps = {
  notify: [],
};

const mapStateToProps = (state) => ({
  notify: state.notify,
});

export default connect(mapStateToProps, null)(Notification);
