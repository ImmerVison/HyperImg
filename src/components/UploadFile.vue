<template>
    <div class="bg-gray-50 px-4 py-10 font-[sans-serif]">
        <div class="max-w-7xl max-md:max-w-lg mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <template v-for="(item, index) in imgList" :key="index">
                    <div class="bg-white  rounded overflow-hidden group">
                        <div class="relative overflow-hidden">
                            <img :src="item.target.result" alt=""
                                class="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                            <div class="px-4 py-2.5 rounded-md text-white text-sm tracking-wider bg-orange-500 absolute top-0 right-0
                             cursor-pointer hover:text-md hover:bg-opacity-0" @click="deleteImg(index)">X</div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>

    <div class="flex flex-wrap justify-center gap-8 ">
        <div>
            <label for="uploadFile1"
                class="bg-white text-black text-base rounded w-80 h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 mb-2 fill-black" viewBox="0 0 32 32">
                    <path
                        d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                        data-original="#000000" />
                    <path
                        d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                        data-original="#000000" />
                </svg>
                上传PNG图片
                <input type="file" accept="image/png" multiple id='uploadFile1' @change="uploadImg" class="hidden" />
                <p class="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
            </label>
        </div>

        <div>
            <label for="uploadFile2"
                class="bg-white text-black text-base rounded w-80 h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 mb-2 fill-black" viewBox="0 0 32 32">
                    <path
                        d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                        data-original="#000000" />
                    <path
                        d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                        data-original="#000000" />
                </svg>
                <input type="file" accept="audio/*" id='uploadFile2' @change="uploadAudio" class="hidden" />
                <p class="text-xs text-gray-400 mt-2">{{ videoObj["name"] ? videoObj.name : '上传背景音乐' }}</p>
            </label>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const imgList = ref([])
const videoObj = ref({})
const emit = defineEmits(["change"])


const uploadImg = (e) => {
    fileReader(e.target.files, 0)
}

const fileReader = (files, index) => {
    let reader = new FileReader()
    reader.readAsDataURL(files[index])
    reader.onload = (e) => {

        imgList.value.push(Object.assign(e, {
            raw: files[index]
        }))
        if (++index < files.length) fileReader(files, index)
    }

    emit("change", {
        imgs: imgList.value,
        videoBg: videoObj.value
    })

}

const uploadAudio = (e) => {
    videoObj.value = e.target.files[0]
    console.log(JSON.stringify(videoObj.value))
    emit("change", {
        imgs: imgList.value,
        videoBg: videoObj.value
    })
}

const deleteImg = (index) => {
    imgList.value.splice(index, 1)
    emit("change", {
        imgs: imgList.value,
        videoBg: videoObj.value
    })
}


</script>

<style scoped></style>