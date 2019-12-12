<template>
<client-only>
  <div>
    <div @click="isShow = !isShow" id="container" v-if="isShow">
         <h1>CLICK!</h1>
         <h1>CLICK!</h1>
         <h1>CLICK!</h1>
      </div>
    <div v-else class="tk-home">
      
      <div class="container">
      <!-- <h1 class="tk-home__title">Thirawit Kaeophirom</h1> -->
      <vue-typer
        class="tk-home__header-title"
        :text='["Hi! I am Thirawit.","I am Frontend Developer.", "I am Product Developer."]'
        :repeat='Infinity'
        :shuffle='false'
        initial-action='typing'
        :pre-type-delay='70'
        :type-delay='70'
        :pre-erase-delay='2000'
        :erase-delay='250'
        erase-style='backspace'
        :erase-on-complete='false'
        caret-animation='blink'
      ></vue-typer>
      <div class="row mt-3">
        <div class="tk-home__section col-lg-1 d-none d-lg-block">
          <div class="tk-home__box-card tk-home__box-card--side-right">
            <scrollactive
            :modify-url="true"
            :highlight-first-item="true"
            active-class="active"
            >
           <parallax-container v-for="(item, index) in menu" :key="index" class="horizontal-card centered-card">
          <parallax-element  class="text-container" :parallaxStrength="15" :type="'depth'">
            <div  class="tk-home__item">
             <i :class="item.icon"/>
             <a :href="'#home-' + (index +1)"  class="tk-home__menu-title scrollactive-item">{{item.name}}</a>
             <div v-if="index !== menu.length - 1" class="tk-home__divider"/>
            </div>
            </parallax-element>
            </parallax-container>
            </scrollactive>
          </div>
        </div>
        <div class="tk-home__section col-lg-4">
          <div class="tk-home__box-card tk-home__box-card--center">
          <parallax-container class="horizontal-card centered-card">
            <parallax-element class="background-image" :parallaxStrength="-20" :type="'depth'">
              <img class="tk-home__profile-image" src="~/static/pae-profile.png" alt="profile">
            </parallax-element>
          </parallax-container>
          </div>
        </div>
        <client-only>
        <div class="tk-home__section col-lg-7">
          <div class="tk-home__box-card tk-home__box-card--side-left">
            <div class="tk-home__scrollable">
              <section id="home-1">
             <h3 >About me</h3>
             <div class="tk-home__story">
               Hello, I'm Thirawit. I love being creative and challenge, I am searching a job that enhance my skill and experience everyday in term of Web developer , UI / UX designer, Graphic designer and duty in Software development. I like to challenge and i am seeking that feeling. 
             </div>
              </section>
             <h3 id="home-2">Work</h3>
             <div class="tk-home__story">
               <el-timeline >
                  <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    :timestamp="activity.timestamp">
                    {{activity.content}}
                  </el-timeline-item>
               </el-timeline>
             </div>
             <h3 id="home-3">Project</h3>
             <div class="tk-home__story">
               <el-timeline >
                  <el-timeline-item
                    v-for="(project, index) in project"
                    :key="index"
                    :timestamp="project.tool">
                    <a target="_blank" :href="project.link">{{project.content}}</a>
                  </el-timeline-item>
               </el-timeline>
             </div>
             <h3 id="home-4">Showcase</h3>
             <div class="tk-home__story px-4">
             <SlideShowcase
               v-if="showcase.length > 0"
               name="showcase"
               :custom-option="swiperOption"
               :data="showcase"
             />
             </div>
             <h3 id="home-5">Contact</h3>
             <div class="tk-home__story-container">
               <div class="tk-home__story">Phone : <a target="_blank" href="tel:+6692-429-8797">+66 92-429-8797</a></div>
               <div class="tk-home__story">Email : <a target="_blank" href="mailto:t-rawit@hotmail.co.th">t-rawit@hotmail.co.th</a></div>
             </div>
             </div>
          </div>
        </div>
        </client-only>
      </div>
    </div>
  </div>
  </div>
  </client-only>
</template>

<script>
import { Timeline, TimelineItem, Progress } from 'element-ui'
import SlideShowcase from '~/components/slideShowcase.vue'
export default {
  components: {
    SlideShowcase,
    [Timeline.name]: Timeline,
    [TimelineItem.name]: TimelineItem,
  },
  data() {
    return {
      isShow: true,
      skill: [
        {
          tool: 'ReactJs',
          point: ''
        },
        {
          tool: 'React Native',
          point: ''
        },
        {
          tool: 'VueJS (Nuxt)',
          point: ''
        },
        {
          tool: 'Cypress',
          point: ''
        },
        {
          tool: 'Cypress',
          point: ''
        },
       ],
      activities: [{
          content: 'Senior Front-end Developer - Tourkrub',
          timestamp: '2019-06-1 - Then'
        }, {
          content: 'Product and Process Developer - Freshket',
          timestamp: '2018-05-1 - 2019-05'
        }, {
          content: 'Front-end Developer - FinixTV',
          timestamp: '2018-01-1 - 2018-05'
          }, {
          content: 'Product manager (Freelance) - EzyGroup',
          timestamp: '2018-01-1 - 2018-09'
        }],
       project: [{
          content: 'Tourkrub Website',
          tool: 'VueJS (NuxtJS)',
          link: 'https://tourkrub.co/'
        }, {
          content: 'Freshket App',
          tool: 'React Native + Redux',
          link: 'https://apps.apple.com/th/app/freshket/id1341657874'
        }, {
          content: 'Freshket Fast App',
          tool: 'React Native + MobX',
          link: 'https://apps.apple.com/th/app/freshket-fast/id1442759324'
          }, {
          content: 'Freshket Insight',
          tool: 'React Native + MobX',
          link: 'https://apps.apple.com/th/app/freshket-insight/id1417127222'
        }, {
          content: 'Freshket Pro Web Application',
          tool: 'ReactJS + MobX',
          link: 'https://www.freshket.co/'
          }, ],
      menu: [
        {
          name: "ABOUT",
          icon: "tk-icon-st-member"
        },
        {
          name: "WORK",
          icon: "tk-icon-st-bag"
        },
        {
          name: "PROJECT",
          icon: "tk-icon-st-website"
        },
        {
          name: "SHOWCASE",
          icon: "tk-icon-st-booking-ok"
        },
        {
          name: "CONTACT",
          icon: "tk-icon-st-phone"
        }
        ],
        showcase: [
        {
          name: "tourkrub website",
          url: "/showcase/tk.jpg"
        },
        {
          name: "freshket App",
          url: "/showcase/fk1.jpg"
        },
        {
          name: "freshket App",
          url: "/showcase/fk2.jpg"
        },
        {
          name: "freshket insight App",
          url: "/showcase/fk-is1.jpg",
        },
        {
          name: "freshket insight App",
          url: "/showcase/fk-is2.jpg"
        },
        {
          name: "freshket fast App",
          url: "/showcase/fk-f1.jpg"
        },
        {
          name: "freshket fast App",
          url: "/showcase/fk-f2.jpg"
        },
        {
          name: "freshket website",
          url: "/showcase/fk3.jpg"
        },
        ],
        swiperOption: {
        breakpoints: {
          375: {
            centeredSlides: false,
            slidesPerView: 1.15,
          },
          411: {
            centeredSlides: false,
            slidesPerView: 1.25,
          },
          475: {
            centeredSlides: false,
            slidesPerView: 1.35,
          },
          540: {
            centeredSlides: false,
            slidesPerView: 1.45,
          },
          768: {
            centeredSlides: false,
            slidesPerView: 2,
          },
          1024: {
            centeredSlides: false,
            speed: 500,
            slidesPerView: 3,
            slidesPerGroup: 3,
            freeMode: false,
            simulateTouch: false,
            allowTouchMove: false,
          },
        },
      },
    }
  },
}
</script>
<style lang="scss" scoped>
@include block('home'){
  padding: 16px;
  background-color: $--color-grey-4;
  @include modifier(glitch){
   background-color: #333;
  }
  @include media-breakpoint-up(lg){
        height: 100vh;
        align-items: center;
  }
  @include element('title'){
    color: $--color-navy;
  }
  @include element('section'){
    display: block;
  }
  @include element('box-card'){
    display: flex;
    padding: 16px;
    overflow: hidden;
    flex-direction: column;
    background-color: $--color-white;
    border-radius: $--border-radius-1;
    box-shadow: $--box-shadow-2;
    -webkit-box-shadow: $--box-shadow-2;
    color: $--color-black-3;
    line-height: 1.35;
    &::v-deep .background-image {
       display: flex;
       justify-content: center;
     }
    @include modifier(side-right) {
      margin-top: 20px;
      justify-content: center;
    }
    @include modifier(center) {
      height: 300px;
      padding: 0px;
      justify-content: center;
      background-color: #017FB2;
      @include media-breakpoint-up(lg){
        height: 600px;
      }
    }
    @include modifier(side-left) {
      margin-top: 20px;
      height: 560px;
    }
  }
  @include element('profile-image'){
    display: flex;
    width: 100%;
    overflow: hidden;
    @include media-breakpoint-up(md){
        width: 50%;
      }
      @include media-breakpoint-up(lg){
        width: 100%;
      }
  }
  @include element('divider') {
    width: calc(100%);
    height: 1px;
    margin: 16px 0px;
    background-color: $--color-grey-3;
  }
  @include element('header-title') {
    font-size:30px;
    font-family: 'udomsuk-bold';
    color: $--color-navy;
  }
  @include element('story') {
    font-size:16px;
    font-family: 'udomsuk-medium';
    color: $--color-black-3;
    &::v-deep a {
    &:hover {
      cursor: pointer;
    }
    }
    &::v-deep .el-timeline-item__timestamp {
      font-size: 14px;
      margin-bottom: 5px;
      color: $--color-grey-1; 
    }
  }
  @include element('story-container') {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  
  @include element('item') {
    padding-top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
  }
  @include element('menu-title') {
    font-size: 12px;
    color: $--color-black-3;
    text-decoration: none;
    font-family: 'udomsuk-medium';
  }
  @include element('scrollable') {
    overflow-y: scroll;
  }
}
 </style>
 <style lang="scss" >
 #container {
    width: 100vw;
    height: 100vw;
    margin: 30vw auto;
    justify-content: center;
    display: flex;
    flex-direction: column;
  
  @include media-breakpoint-up(md){
  width: 70vw;
  height: auto;
  }
}

h1 {
  cursor: pointer;
  text-align: center;
  color: #fff;
  font-size: 5em;
  letter-spacing: 8px;
  font-family: 'udomsuk-bold';
  font-weight: 400;
  
  margin: 0;
  line-height: 0;
  
  animation: glitch1 2.5s infinite;
}

h1:nth-child(2) {
  color: #67f3da;
  animation: glitch2 2.5s infinite;
}

h1:nth-child(3) {
  color: #f16f6f;
  animation: glitch3 2.5s infinite;
}

@keyframes glitch1 {
  0% {
    transform: none;
    opacity: 1;
  }
  7% {
    transform: skew(-0.5deg, -0.9deg);
    opacity: 0.75;
  }
  10% {
    transform: none;
    opacity: 1;
  }
  27% {
    transform: none;
    opacity: 1;
  }
  30% {
    transform: skew(0.8deg, -0.1deg);
    opacity: 0.75;
  }
  35% {
    transform: none;
    opacity: 1;
  }
  52% {
    transform: none;
    opacity: 1;
  }
  55% {
    transform: skew(-1deg, 0.2deg);
    opacity: 0.75;
  }
  50% {
    transform: none;
    opacity: 1;
  }
  72% {
    transform: none;
    opacity: 1;
  }
  75% {
    transform: skew(0.4deg, 1deg);
    opacity: 0.75;
  }
  80% {
    transform: none;
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}

@keyframes glitch2 {
  0% {
    transform: none;
    opacity: 0.25;
  }
  7% {
    transform: translate(-2px, -3px);
    opacity: 0.5;
  }
  10% {
    transform: none;
    opacity: 0.25;
  }
  27% {
    transform: none;
    opacity: 0.25;
  }
  30% {
    transform: translate(-5px, -2px);
    opacity: 0.5;
  }
  35% {
    transform: none;
    opacity: 0.25;
  }
  52% {
    transform: none;
    opacity: 0.25;
  }
  55% {
    transform: translate(-5px, -1px);
    opacity: 0.5;
  }
  50% {
    transform: none;
    opacity: 0.25;
  }
  72% {
    transform: none;
    opacity: 0.25;
  }
  75% {
    transform: translate(-2px, -6px);
    opacity: 0.5;
  }
  80% {
    transform: none;
    opacity: 0.25;
  }
  100% {
    transform: none;
    opacity: 0.25;
  }
}

@keyframes glitch3 {
  0% {
    transform: none;
    opacity: 0.25;
  }
  7% {
    transform: translate(2px, 3px);
    opacity: 0.5;
  }
  10% {
    transform: none;
    opacity: 0.25;
  }
  27% {
    transform: none;
    opacity: 0.25;
  }
  30% {
    transform: translate(5px, 2px);
    opacity: 0.5;
  }
  35% {
    transform: none;
    opacity: 0.25;
  }
  52% {
    transform: none;
    opacity: 0.25;
  }
  55% {
    transform: translate(5px, 1px);
    opacity: 0.5;
  }
  50% {
    transform: none;
    opacity: 0.25;
  }
  72% {
    transform: none;
    opacity: 0.25;
  }
  75% {
    transform: translate(2px, 6px);
    opacity: 0.5;
  }
  80% {
    transform: none;
    opacity: 0.25;
  }
  100% {
    transform: none;
    opacity: 0.25;
  }
}
 
 </style>
