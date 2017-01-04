import React, { Component, PropTypes } from 'react';

const renderField = ({ input, label, helper, type, meta: { touched, error, invalid, warning } }) => (
    <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
        <label  className="control-label">{label}</label>
        <div>
            <input {...input} className="form-control" placeholder={label} type={type}/>
            <span className="help-block text-muted">{helper}</span>
            <div className="help-block">
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    </div>
)

export default renderField;