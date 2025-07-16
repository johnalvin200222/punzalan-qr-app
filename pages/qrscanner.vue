<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <div id="reader" style="width: 100%; max-width: 500px; margin: auto;"></div>
      </v-col>
    </v-row>
  </v-container>    
</template>

<script>
import { onMounted } from 'vue'
import { Html5QrcodeScanner } from 'html5-qrcode'

export default {
  setup() {
    // Called when scan is successful
    const onScanSuccess = (decodedText, decodedResult) => {
      console.log('Scan successful:', decodedText)
      // You can do something with the decoded text here
    }

    // Called on scan failure or error (optional)
    const onScanFailure = error => {
      console.warn('Scan error:', error)
    }

    onMounted(() => {
      const html5QrcodeScanner = new Html5QrcodeScanner(
        'reader',
        { fps: 10, qrbox: { width: 250, height: 250 } },
        false
      )
      html5QrcodeScanner.render(onScanSuccess, onScanFailure)
    })
  }
}
</script>
