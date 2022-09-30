import React from "react";

const Button = ({
                  active = true,
                  action,
                  color = 'button-success',
                  text = 'Продолжить',
                  width,
                  padding,
                  margin,
                  type = 'button',
                  formAction,
                  name,
                  small = false,
                }) => {
  return (
    <button
      disabled={!active}
      onClick={action}
      className={`add-tour-button ${
        active ? color : 'button-disabled'
      } ${
        small ? 'small' : ''
      }`}
      style={{width: width ? width : 'auto', marginRight: width ? '30px' : '0', padding: padding, margin: margin}}
      type={type}
      formAction={formAction}
      name={name}
    >
      {text}
    </button>
  )
}

export default Button