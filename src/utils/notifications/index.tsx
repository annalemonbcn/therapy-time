import { Notifier, NotifierComponents } from 'react-native-notifier'

const showSuccessNotification = (description: string) =>
  Notifier.showNotification({
    title: 'Success',
    description,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: 'success'
    }
  })

const showErrorNotification = (description: string) =>
  Notifier.showNotification({
    title: 'Error',
    description,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: 'error'
    }
  })

const showWarnNotification = (description: string) =>
  Notifier.showNotification({
    title: 'Warn',
    description,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: 'warn'
    }
  })

export { showErrorNotification, showSuccessNotification, showWarnNotification }
