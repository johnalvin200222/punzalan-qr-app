<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <div id="reader" style="width: 100%; max-width: 500px; margin: auto;"></div>
        <div v-if="scannedText" class="text-center mt-4">
          <v-alert type="success" border="left" elevation="2" color="green">
            Scanned QR Code: <strong>{{ scannedText }}</strong>
          </v-alert>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue'
import { Html5QrcodeScanner } from 'html5-qrcode'

export default {
  setup() {
    const scannedText = ref('')

    // Called when scan is successful
    const onScanSuccess = (decodedText, decodedResult) => {
      console.log('Scan successful:', decodedText)
      scannedText.value = decodedText
    }

    // Called on scan failure (optional)
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

    return {
      scannedText
    }
  }
}
</script>

<style scoped>
#reader {
  border: 2px dashed #ccc;
  padding: 10px;
}
</style>

