<template>
    <div class="flex-col justify-center items-center p-8">
        <div>
            <UploadFile @change="(arg) => {console.log('arg is: ' + JSON.stringify(arg))}"/>
        </div>
        <div class="flex justify-center items-center gap-4 mt-8">
            <div>
                <button type="button"
                class="btn">☝️请上传(PNG)图片</button>
            </div>
            <div>
                <input type='text' placeholder='设置帧数(默认1)'
                class="px-4 py-1.5 text-sm rounded-md  border border-violet-500 w-full outline-violet-500" />
            </div>
        </div>
        
        <p class="text-xl text-center mt-4">合成视频完成</p>
        <div class="flex justify-center items-center">
            
            <div class="justify-center items-center">
                <video id="vid" src="../assets/SOS.mkv" controls width="800" type="video/mp4" ></video>
            </div>
            
        </div>
        <div class="flex justify-center mt-4">
            <button class="btn" @click="download">下载视频</button>
        </div>
        
    </div>
</template>

<script setup>
import UploadFile from '../components/UploadFile.vue';

const download = () => {
    // 获取video标签的src属性
    const videoURL = document.querySelector("video").src;
    const a = document.createElement("a");
    // 设置a标签的href属性为视频的URL
    a.href = videoURL;
    // 设置a标签的download属性为文件名
    a.download = "video.mp4";
    console.log('下载完成')
}

</script>

<style scoped>
    .btn {
        @apply px-4 py-1.5 rounded-full text-black text-sm tracking-wider font-medium 
        outline-none border border-violet-500 hover:bg-violet-500 hover:text-white 
        transition-all duration-300
    }
</style>