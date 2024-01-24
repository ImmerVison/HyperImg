<template>
    <div class="flex-col justify-center items-center p-8">
        <div>
            <UploadFile @change="changeFile" />
        </div>
        <div class="flex flex-wrap justify-center items-center gap-4 mt-8">

            <div>
                <div>
                    <button type="button" class="btn">☝️请上传(PNG)图片</button>
                </div>
            </div>
            <!-- 
            <div class="">
                <input type='text' placeholder='设置帧数(默认1)'
                    class="px-4 py-1.5 text-sm rounded-md  border border-violet-500 w-full outline-violet-500" />
            </div> -->
        </div>

        <p class="logger" v-if="loggerText">{{ isFinish ? "合成视频完成" : loggerText }}</p>
        <div v-else-if="loading" class="flex justify-center my-2">

            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 animate-spin fill-blue-600" viewBox="0 0 24 24">
                <path
                    d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                    data-original="#000000" />
            </svg>

        </div>

        <div v-if="videoUrl">
            <div class="flex justify-center items-center mt-2">

                <div class="justify-center items-center">
                    <video id="vid" src="../assets/SOS.mkv" controls width="800" type="video/mp4"></video>
                </div>

            </div>
            <div class="flex justify-center mt-4">
                <button class="btn" @click="emulate('hello')">下载{{ progress.data }}</button>
            </div>
        </div>

    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import UploadFile from '../components/UploadFile.vue';

const videoUrl = ref("") // 视频链接
const loggerText = ref("")// 合成日志
const loading = ref(false)// 是否正在合成
const isFinish = ref(true) //是否完成合成
const frameNumber = ref("") // 帧数
const progress = ref({})

const changeFile = (e) => {
    imgs.value = e.imgs
    videoBg.value = e.videoBg
}


const emulate = async (tokenizer) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "text": tokenizer,
        "source_lang": "auto",
        "target_lang": "ZH"
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const resp = await fetch("https://api.deeplx.org/translate", requestOptions);
        if (resp.ok) {
            const data = await resp.json();
            progress.value = data;
        } else {
            throw new Error("数据加载失败")
        }
    } catch (e) {

    }
}

</script>

<style scoped>
.btn {
    @apply px-4 py-1.5 rounded-full text-black text-sm tracking-wider font-medium outline-none border border-violet-500 hover:bg-violet-500 hover:text-white transition-all duration-300
}

.logger {
    @apply mt-2.5 text-center text-sm
}
</style>