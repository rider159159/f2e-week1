<script setup>
import { inject, onMounted } from 'vue';

const gsap = inject('$gsap');

onMounted(() => {
  // gsap.to('.text', {
  //   duration: 1,
  //   ease: 'expo',
  //   position: 'absolute',
  //   right: '0%',
  //   delay: 1
  // })

  // gsap.from('.text', {
  //   opacity: 0,
  //   duration: 1,
  //   ease: 'expo',
  //   delay: 1
  // })

  gsap.fromTo('.text', {
    opacity: 0,
    left: '-50%',
    position: 'relative'
  }, {
    opacity: 1,
    left: '0%',
    position: 'relative',
    duration: 1.5,
    ease: 'power3',
    delay: .5
  })

  // yoyo, repeat
  //   gsap.fromTo('.circle', {
  //   right: '100%',
  //   xPercent: '50',
  //   position: 'absolute'
  // }, {
  //   right: '0%',
  //   position: 'absolute',
  //   duration: 3,
  //   ease: 'none',
  //   yoyo: true,
  //   backgroundColor: '#ff4444',
  //   repeat: -1
  // })

  // timeline && scrollTrigger
  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.__block'
  //   }
  // })
  // tl.to('.__block', {
  //   left: '100%',
  //   xPercent: '-100',
  //   position: 'absolute',
  //   duration: 1
  // }).to('.__block', {
  //   top: '100%',
  //   yPercent: '-100',
  //   position: 'absolute',
  //   duration: 1
  // }).to('.__block', {
  //   left: '0%',
  //   xPercent: '0',
  //   position: 'absolute',
  //   duration: 1
  // })
  // .to('.__block', {
  //   top: '0%',
  //   yPercent: '0',
  //   position: 'absolute',
  //   duration: 1
  // })

  // horizonal 水平滾動
  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.horizonal',
  //     start: 'top top',
  //     end: '+=3000px',
  //     pin: true,
  //     scrub: true
  //   }
  // })
  // tl.to('.horizonal', {
  //   xPercent: '-200'
  // })

  // utils.toArray
  // gsap.utils.toArray('.fadeUp').forEach((item) => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: item,
  //       start: 'top center',
  //       end: 'bottom top'
  //     }
  //   })
  //   tl.fromTo(item, {
  //     opacity: 0,
  //     y: '30px'
  //   }, {
  //     opacity: 1,
  //     y: '0px',
  //     duration: 1,
  //     ease: 'expo'
  //   })
  // })
});
</script>

<template>
  <div>
    <header class="z-1 fixed w-full top-34px right-10% flex justify-end mt-34px">
      <div class="mr-30px nsFont text-24px text-white">THE F2E</div>
      <ul class="flex bg-white px-10px">
        <li class="nsFont py-5px px-10px">關卡資訊</li>
        <li class="nsFont py-5px px-10px">作品列表</li>
        <li class="nsFont py-5px px-10px">攻略資源</li>
        <li class="nsFont py-5px px-10px">求職專區</li>
      </ul>
    </header>
    <!-- 區塊一 -->
    <section class="flex flex-col pt-10px items-center overflow-x-hidden bg-black h-965px">
      <!-- <div class="text enFont relative w-800px h-200px">
        <h3 class="absolute z-10 left-0px top--10px text-primary1 font-bold  text-144px">The F2E I</h3>
        <h3 class="absolute text-white font-bold  text-144px">The F2E I</h3>
        <img src="@/assets/images/section1/start.svg" class="absolute bg-primary1 z-10 w-29px right--10px top--10px" alt="">
      </div> -->
      <div class="grid w-full test">

      </div>
    </section>
    <!-- gsap.to -->
    <!-- <h1 class="text text-50px inline">我是文字</h1> -->

    <!-- gsap.from -->
    <!-- <h1 class="text text-50px">我會從隱藏出現</h1> -->

    <!-- gsap.fromTo -->
    <!-- <h1 class="text text-50px whitespace-nowrap">我會從左邊到右邊</h1> -->

    <!-- yoyo, repeat 應用無限輪播效果 -->
    <!-- <h1 class="circle w-100px h-100px rounded-full bg-green-500"></h1> -->

    <!-- timeline && scrollTrigger -->
    <!-- <div class="w-full min-h-screen relative">
      <div class="w-100px h-100px bg-blue-300 __block"></div>
    </div> -->

    <!-- scrub -->
    <!-- <div class="w-full h-screen bg-gray-300"></div>
    <div class="w-full overflow-hidden">
      <div class="horizonal w-full h-screen flex">
        <div class="w-full flex flex-none items-center justify-center">
          <img src="https://images.unsplash.com/photo-1598188306155-25e400eb5078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80" class="w-500px">
        </div>
        <div class="w-full flex flex-none items-center justify-center">
          <img src="https://images.unsplash.com/photo-1618424160135-fe3b7680af1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="w-500px">
        </div>
        <div class="w-full flex flex-none items-center justify-center">
          <img src="      <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="relative w-full mb-20px">
      <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="relative w-full mb-20px">
      <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="relative w-full mb-20px">
      <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="relative w-full mb-20px">
" class="w-500px">
        </div>
      </div>
    </div>
    <div class="w-full h-screen bg-gray-300"></div> -->

    <!-- utils.toArray -->
    <!-- <div class="w-full columns-4 gap-20px">
      <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="fadeUp w-full mb-20px">
      <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="fadeUp w-full mb-20px">
      <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="fadeUp w-full mb-20px">
      <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="fadeUp w-full mb-20px">
      <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="fadeUp w-full mb-20px">
      <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="fadeUp w-full mb-20px">
      <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="fadeUp w-full mb-20px">
      <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="fadeUp w-full mb-20px">
      <img src="./assets/images/變態.png" class="fadeUp w-full mb-20px">
      <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="fadeUp w-full mb-20px">
      <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="fadeUp w-full mb-20px">
      <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="fadeUp w-full mb-20px">
    </div> -->
  </div>
</template>

<style scoped>
.test{
  grid-template-rows: Repeat(3, 120px);
  grid-template-columns: Repeat(8, 120px);
  border: solid 1px white;
}
</style>