<template>
  <div>
    <h1>Below is the editor</h1>
    <div id="editorjs"></div>
    <button @click="save">Save</button>
  </div>
</template>

<script>
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'

export default {
  name: 'Editor',
  data: () => ({
    editor: null
  }),
  created() {
    this.editor = new EditorJS({
      tools: {
        header: Header,
        paragraph: Paragraph,
        onChange() {
          console.log('change')
        }
      }
    })
  },
  methods: {
    async save() {
      const savedData = await this.editor.save()
      console.log(savedData)
    }
  }
}
</script>
