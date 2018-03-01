<template lang="pug">
v-dialog(v-model="dialog"  max-width="600px")
  v-btn.mr-0(@click="dialog = true" slot="activator" flat) 
    v-icon.mr-2 add_a_photo
    span 사진등록
  v-card
    v-card-title.title
      h3 {{ name }} 사진을 올려주세요 
    v-card-text.pa-0
      v-container(fluid grid-list-lg)
        v-layout(row wrap)
          v-flex(xs6 sm4 v-for="(image, i) in imageUrls" :key="i")
            v-card(flat tile)
              v-card-media(:src="image" height="150px")
          v-flex(xs12)
            input(type="file" ref="fileInput" multiple accept="image/*" @change="onImageSelected" style="display: none")
            v-btn(@click="$refs.fileInput.click()") 이미지 선택
          v-flex(xs12)
            v-checkbox(label="이미지 저작권 동의" v-model="agree")
            | * 등록된 사진은 운영자 확인 뒤 전체 공개 됩니다.
            v-progress-linear(v-if="progress" v-model="progress")
    v-card-actions
      v-spacer
      v-btn(@click="onUpload" :disabled="!imageUrls || !agree || progress" flat) 업로드



</template>

<script>
export default {
  props: ['id', 'name'],
  data () {
    return {
      dialog: false,
      images: null,
      imageUrls: null,
      progress: null,
      agree: false
    }
  },
  methods: {
    onImageSelected (event) {
      if (event.target.files.length === 0) return
      this.images = event.target.files
      this.imageUrls = []
      for (let i = 0; i < this.images.length; i++) {
        const image = this.images[i]
        if (!image.type.match('image')) continue
        const imageReader = new FileReader()
        imageReader.addEventListener('load', () => {
          this.imageUrls.push(imageReader.result)
        })
        imageReader.readAsDataURL(image)
      }
    },
    onUpload () {
      if (!this.agree) {
        return alert('이미지 저작권 동의 여부를 선택해주세요.')
      }

      if (!this.imageUrls || !this.imageUrls.length) {
        console.log(this.imageUrls)
        return alert('사진을 올려주세요.')
      }
      const formData = new FormData()
      const { id, name } = this
      formData.append('id', id)
      formData.append('name', name)
      for (let i = 0; i < this.images.length; i++) {
        formData.append('image', this.images[i])
      }
      this.$axios.$post('/public/images/', formData, {
        onUploadProgress (e) {
          this.progress = (e.loaded / e.total) * 100
        }
      }).then(res => {
        alert('감사합니다!')
        this.dialog = false
        this.images = null
        this.imageUrls = null
        this.progress = null
        this.agree = false
      })
    }
  }

}
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}
</style>