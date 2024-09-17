

import React, { useEffect } from 'react'
import Toast from 'react-native-root-toast';

//color
//warning - #d6ae0d | success - #07bc0c | dark - #121212 | error - #e74c3c | transparent - rgba(255, 255, 255, 0.7)
const ToastModal = ({message, position, color = 'tomato'}: {
  message: string,
  position: 'top' | 'center' | 'bottom',
  color: string
}) => {
  let actualPosition = Toast.positions.TOP;

  if(position === 'top') {
    actualPosition = Toast.positions.TOP + 20
  }

  if(position === 'center') {
    actualPosition = Toast.positions.CENTER
  }

  if(position === 'bottom') {
    actualPosition = Toast.positions.BOTTOM
  }

  console.log("in tiast")

  // Add a Toast on screen.
  let toast = Toast.show(message, {
    duration: Toast.durations.LONG,
    position: actualPosition,
    shadow: true,
    animation: true,
    hideOnPress: true,
    backgroundColor: color,
    delay: 0,
    onShow: () => {
        // calls on toast\`s appear animation start
    },
    onShown: () => {
        // calls on toast\`s appear animation end.
    },
    onHide: () => {
        // calls on toast\`s hide animation start.
    },
    onHidden: () => {
        // calls on toast\`s hide animation end.
    }
  });

  // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
  setTimeout(function () {
    Toast.hide(toast);
  }, 50000);
}

export default ToastModal