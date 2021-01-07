import React from 'react';
import {Confirm} from 'react-st-modal';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <span id="title">Timer</span>
        <div className="action-buttons">
          {/* CLEAR ALL BUTTON */}
          <svg
            id="clear"
            onClick={async() => {
            const result = await Confirm('Are you sure, you want to delete all entries?', 'Clear All Alert');
            if (result) {
              this
                .props
                .clearTimers()
            } else {}
          }}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 0.5C5 0.223858 5.22386 0 5.5 0H12.5C12.7761 0 13 0.223858 13 0.5C13 0.776142 12.7761 1 12.5 1H5.5C5.22386 1 5 0.776142 5 0.5ZM0 3.5C0 3.22386 0.223858 3 0.5 3H3.0808H14.9192H17.5C17.7761 3 18 3.22386 18 3.5C18 3.77614 17.7761 4 17.5 4H15.9193C15.9192 4.02565 15.9182 4.05151 15.9162 4.07754L14.9051 17.0775C14.8646 17.5982 14.4303 18 13.9081 18H4.09191C3.5697 18 3.13541 17.5982 3.09492 17.0775L2.08381 4.07754C2.08178 4.05151 2.08077 4.02565 2.08074 4H0.5C0.223858 4 0 3.77614 0 3.5ZM3.0808 4L4.09191 17H13.9081L14.9192 4H3.0808ZM7 6.5C7.27614 6.5 7.5 6.72386 7.5 7L7.5 13C7.5 13.2761 7.27614 13.5 7 13.5C6.72386 13.5 6.5 13.2761 6.5 13L6.5 7C6.5 6.72386 6.72386 6.5 7 6.5ZM11.5 7C11.5 6.72386 11.2761 6.5 11 6.5C10.7239 6.5 10.5 6.72386 10.5 7V13C10.5 13.2761 10.7239 13.5 11 13.5C11.2761 13.5 11.5 13.2761 11.5 13V7Z"
              fill="#FFFFFF"/>
          </svg>
          <span className="clearAllBtn">Clear All</span>

        </div>
      </div>
    )
  }
}

export default Header;