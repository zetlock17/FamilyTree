<template>
    <div>
        <h3>Галерея</h3>
        <button @click="changeVisibilityAddPhoto">Добавить фото</button>
        <AddPhoto v-if="visibilityAddPhoto"/>
    </div>
</template>

<script>
import AddPhoto from '@/components/forms/AddPhoto.vue';

export default {
    name: 'GalleryView',
    data() {
        return {
            visibilityAddPhoto: false,
        }
    },
    methods: {
        changeVisibilityAddPhoto() {
            this.visibilityAddPhoto = !this.visibilityAddPhoto
        }
    },
    components: {
        AddPhoto,
    }
}
</script>