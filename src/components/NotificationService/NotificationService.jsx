// notificationService.js
import { toast } from 'react-toastify';

const notify = (message, options = {}) => {
  toast(message, options);
};

const notifySuccess = (message, options = {}) => {
  toast.success(message, options);
};

const notifyError = (message, options = {}) => {
  toast.error(message, options);
};

const notifyInfo = (message, options = {}) => {
  toast.info(message, options);
};

const notifyWarning = (message, options = {}) => {
  toast.warn(message, options);
};

export default {
  notify,
  notifySuccess,
  notifyError,
  notifyInfo,
  notifyWarning
};
