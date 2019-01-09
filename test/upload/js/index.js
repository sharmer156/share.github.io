const Uppy = require('@uppy/core')
const Dashboard = require('@uppy/dashboard')
const GoogleDrive = require('@uppy/google-drive')
const Dropbox = require('@uppy/dropbox')
const Instagram = require('@uppy/instagram')
const Webcam = require('@uppy/webcam')
const Tus = require('@uppy/tus')

const uppy = Uppy({
  debug: true,
  autoProceed: false,
  restrictions: {
    maxFileSize: 5000000,
    maxNumberOfFiles: 10,
    minNumberOfFiles: 1,
    allowedFileTypes: ['image/*', 'video/*']
  }
})
.use(Dashboard, {
  trigger: '.UppyModalOpenerBtn',
  inline: true,
  target: '.DashboardContainer',
  replaceTargetContent: true,
  showProgressDetails: true,
  note: 'Images and video only, 1–10 files, up to 5 MB',
  height: 470,
  metaFields: [
    { id: 'name', name: 'Name', placeholder: 'file name' },
    { id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }
  ],
  browserBackButtonClose: true
})
.use(GoogleDrive, { target: Dashboard, serverUrl: 'https://sharmer156.github.io/test/upload/index' })
.use(Dropbox, { target: Dashboard, serverUrl: 'https://sharmer156.github.io/test/upload/index' })
.use(Instagram, { target: Dashboard, serverUrl: 'https://sharmer156.github.io/test/upload/index' })
.use(Webcam, { target: Dashboard })
.use(Tus, { endpoint: 'https://sharmer156.github.io/test/upload/index/upfiles' })

uppy.on('complete', result => {
  console.log('successful files:', result.successful)
  console.log('failed files:', result.failed)
})