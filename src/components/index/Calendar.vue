<template>
    <div class="calendar">
        <div class="h">Mon</div>
        <div class="h">Tue</div>
        <div class="h">Wed</div>
        <div class="h">Thu</div>
        <div class="h">Fri</div>
        <div class="h">Sat</div>
        <div class="h">Sun</div>
        <Day :date="29"  :complete=false :placeholder=true />
        <Day :date="30"  :complete=false :placeholder=true />
        <Day :date="1"   :complete=true  label="📕 Grid systems" color="#FF4A1B"/>
        <Day :date="2"   :complete=true  label="✍️ Signup form" color="purple"/>
        <Day :date="3"   :complete=true  label="🎲 Frontend-opoly" color="#71967b"/>
        <Day :date="4"   :complete=true  label="🗓 Weekly schedule" color="#221d31"/>
        <Day :date="5"   :complete=true  label="📄 Van de Graaf" color="#164666"/>
        <Day :date="6"   :complete=true  label="📰 Broadsheet" color="#000"/>
        <Day :date="7"   :complete=true  label="🖋 Blog composer" color="#559DE6"/>
        <Day :date="8"   :complete=true  label="✨ Mixin collage" color="#583ca0"/>
        <Day :date="9"   :complete=true  label="📱 Milligram feed" color="#14546f"/>
        <Day :date="10"  :complete=true  label="🖥 Dashboard" color="#DA045C"/>
        <Day :date="11"  :complete=true  label="🎬 Review cards" color="#DB8400"/>
        <Day :date="12"  :complete=true  label="📋 Todo board" color="#488600"/>
        <Day :date="13"  :complete=true  label="☕️ Brew guide" color="#6d3f28"/>
        <Day :date="14"  :complete=true  label="✈️ Seat picker" color="#FF930F"/>
        <Day :date="15"  :complete=true  label="🎟 Boarding pass" color="#223146"/>
        <Day :date="16"  :complete=true  label="📈 Brew print" color="#3473B1"/>
        <Day :date="17"  :complete=true  label="📃 Magazine layout" color="#333"/>
        <Day :date="18"  :complete=true  label="🗳 Senate ballot" color="#506827"/>
        <Day :date="19"  :complete=true  label="📱 Itinerary" color="#F26118"/>
        <Day :date="20"  :complete=true  label="📷 Photoessay" color="#000"/>
        <Day :date="21"  :complete=true  label="🖥 “Uses”" color="#1c334a"/>
        <Day :date="22"  :complete=true  label="🔬 Web elements" color="#5a008a"/>
        <Day :date="23"  :complete=true  label="⚙️ Responsive form" color="#005CDD"/>
        <Day :date="24"  :complete=true  label="🌦 Wearthere" color="#004D99"/>
        <Day :date="25"  :complete=true  label="📨 Email client" color="#6177c7"/>
        <Day :date="26"  :complete=true  label="🗒 Blank canvas anxiety" color="#FC9801"/>
        <Day :date="27"  :complete=true  label="⌨️ Butterfly keys" color="#333748"/>
        <Day :date="28"  :complete=true  label="🛒 Ecommerce" color="#940783"/>
        <Day :date="29"  :complete=true  label="🗺 Melbourne" color="#ffa500"/>
        <Day :date="30"  :complete=true  label="📝 Journal app" color="#356882"/>
        <Day :date="31"  :complete=true  label="❤️ Thanks" color="red"/>
        <Day :date="1"   :complete=false :placeholder=true />
        <Day :date="2"   :complete=false :placeholder=true />
    </div>
</template>

<script setup>
import CalendarStyles from "./calendar.scss"
import Day from "./Day.vue"

</script>

<style>

</style>