<template>
    <div>
        <label>Фото</label>
        <input type="file" v-on:change="addPhotoToForm" id="inputPhoto" accept=".jpg, .jpeg, .png"/>

        <label>Название</label>
        <input type="text" v-on:change="newPhoto.append('name', $event.target.value)" placeholder="Введите название"/>

        <label>Описание</label>
        <textarea v-on:change="newPhoto.append('description', $event.target.value)" placeholder="Введите описание"></textarea>

        <button @click="sendPhoto">Сохранить</button>

        <!-- позже переделать отображение фото тут + сделать функционал меток на фото -->
        <img class="selectedPhoto" width="300px" /> 
    </div>
</template>

<script>
export default {
    name: 'AddPhoto',

    data() {
        return {
            newPhoto: new FormData()
        }
    },

    methods: {
        sendPhoto() {
            if (this.newPhoto.get("photo")) {
                fetch("http://localhost:4000/gallery", {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(Object.fromEntries(this.newPhoto)),
                })

                this.$parent.visibilityAddPhoto = false;
            } else {
                alert('Вы не выбрали фото')
            }
        },

        addPhotoToForm() {
            const selectedPhoto = document.getElementById('inputPhoto').files[0];

            let blob = new Blob([selectedPhoto])
            this.newPhoto.append('photo', blob)

            let img = document.querySelector('.selectedPhoto');
            img.src = URL.createObjectURL(blob);
        }
    },
}
</script>